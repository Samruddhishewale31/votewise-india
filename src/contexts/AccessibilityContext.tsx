/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useAuth } from "./AuthContext";
import { saveUserData, getUserData } from "@/lib/firestore";
import { trackEvent } from "@/lib/analytics";

type TextSize = "normal" | "large" | "extra-large";

type AccessibilityContextType = {
  highContrast: boolean;
  toggleHighContrast: () => void;
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (open: boolean) => void;
};

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export function AccessibilityProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSizeState] = useState<TextSize>("normal");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { user } = useAuth();

  /**
   * Load preferences from localStorage on first mount
   */
  useEffect(() => {
    try {
      const savedHC = localStorage.getItem("vw_highContrast");
      if (savedHC !== null) {
        setHighContrast(savedHC === "true");
      }

      const savedTS = localStorage.getItem("vw_textSize");
      if (
        savedTS === "normal" ||
        savedTS === "large" ||
        savedTS === "extra-large"
      ) {
        setTextSizeState(savedTS);
      }

      const savedRM = localStorage.getItem("vw_reducedMotion");
      if (savedRM !== null) {
        setReducedMotion(savedRM === "true");
      }
    } catch (error) {
      console.warn("Failed to load accessibility settings:", error);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  /**
   * If a user is logged in, fetch saved preferences from Firestore
   */
  useEffect(() => {
    if (!user || !isLoaded) return;

    getUserData(user.uid)
      .then((data) => {
        if (!data?.preferences) return;

        const prefs = data.preferences;

        if (typeof prefs.highContrast === "boolean") {
          setHighContrast(prefs.highContrast);
        }

        if (
          prefs.textSize === "normal" ||
          prefs.textSize === "large" ||
          prefs.textSize === "extra-large"
        ) {
          setTextSizeState(prefs.textSize);
        }

        if (typeof prefs.reducedMotion === "boolean") {
          setReducedMotion(prefs.reducedMotion);
        }
      })
      .catch((error) => {
        console.warn("Failed to fetch user accessibility preferences:", error);
      });
  }, [user, isLoaded]);

  /**
   * Apply settings to DOM + persist locally + sync remotely when logged in
   */
  useEffect(() => {
    if (!isLoaded) return;

    try {
      // High Contrast
      if (highContrast) {
        document.body.classList.add("hc");
      } else {
        document.body.classList.remove("hc");
      }
      localStorage.setItem("vw_highContrast", String(highContrast));

      // Text Size
      document.documentElement.style.fontSize =
        textSize === "normal"
          ? "16px"
          : textSize === "large"
          ? "18px"
          : "20px";
      localStorage.setItem("vw_textSize", textSize);

      // Reduced Motion
      if (reducedMotion) {
        document.documentElement.classList.add("reduced-motion");
      } else {
        document.documentElement.classList.remove("reduced-motion");
      }
      localStorage.setItem("vw_reducedMotion", String(reducedMotion));
    } catch (error) {
      console.warn("Failed to apply accessibility settings:", error);
    }

    if (user) {
      saveUserData(user.uid, {
        preferences: {
          highContrast,
          textSize,
          reducedMotion,
        },
      });
    }

    trackEvent("accessibility_setting_changed", {
      highContrast,
      textSize,
      reducedMotion,
    });
  }, [highContrast, textSize, reducedMotion, isLoaded, user]);

  const setTextSize = (size: TextSize) => {
    setTextSizeState(size);
  };

  const value = useMemo(
    () => ({
      highContrast,
      toggleHighContrast: () => setHighContrast((prev) => !prev),
      textSize,
      setTextSize,
      reducedMotion,
      toggleReducedMotion: () => setReducedMotion((prev) => !prev),
      isPanelOpen,
      setIsPanelOpen,
    }),
    [highContrast, textSize, reducedMotion, isPanelOpen]
  );

  return (
    <AccessibilityContext.Provider value={value}>
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);

  if (!context) {
    throw new Error(
      "useAccessibility must be used within an AccessibilityProvider"
    );
  }

  return context;
}