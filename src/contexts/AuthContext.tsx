"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { User, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, googleProvider, isFirebaseConfigured } from "@/lib/firebase";
import { trackEvent } from "@/lib/analytics";

interface AuthContextType {
  user: User | null;
  isGuest: boolean;
  isLoading: boolean;
  signIn: () => Promise<void>;
  logOut: () => Promise<void>;
  firebaseEnabled: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isGuest: true,
  isLoading: false,
  signIn: async () => {},
  logOut: async () => {},
  firebaseEnabled: false,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  // Default to isLoading false if Firebase is not configured, else true until auth initializes
  const [isLoading, setIsLoading] = useState<boolean>(isFirebaseConfigured);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth) {
      setIsLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    if (!auth || !googleProvider) {
      console.warn("Firebase Auth is not configured. Redirecting to Guest Mode.");
      return;
    }
    try {
      setIsLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user) {
        trackEvent('login_success', { method: 'google' });
      }
    } catch (error) {
      console.error("Sign-in failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = async () => {
    if (!auth) return;
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out failed:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isGuest: !user,
        isLoading,
        signIn,
        logOut,
        firebaseEnabled: isFirebaseConfigured,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
