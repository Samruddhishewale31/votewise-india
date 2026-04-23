import { db } from "./firebase";
import {
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

export interface UserPreferences {
  highContrast?: boolean;
  textSize?: "normal" | "large" | "extra-large";
  reducedMotion?: boolean;
}

export interface UserProgressData {
  quizProgress?: Record<string, number>;
  learningProgress?: Record<string, boolean>;
  selectedLearningPath?: string;
  preferences?: UserPreferences;
  lastActivityAt?: unknown;
}

const USERS_COLLECTION = "users";

/**
 * Save or update user progress in Firestore.
 * Degrades gracefully if Firebase is not configured.
 */
export const saveUserData = async (
  userId: string,
  data: Partial<UserProgressData>
): Promise<void> => {
  if (!db) {
    return;
  }

  try {
    const userRef = doc(db, USERS_COLLECTION, userId);

    const dataToSave = {
      ...data,
      lastActivityAt: serverTimestamp(),
    };

    await setDoc(userRef, dataToSave, { merge: true });
  } catch (error) {
    console.error("Failed to save user data to Firestore:", error);
  }
};

/**
 * Fetch user progress from Firestore.
 * Degrades gracefully if Firebase is not configured.
 */
export const getUserData = async (
  userId: string
): Promise<UserProgressData | null> => {
  if (!db) {
    return null;
  }

  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      return docSnap.data() as UserProgressData;
    }

    return null;
  } catch (error) {
    console.error("Failed to fetch user data from Firestore:", error);
    return null;
  }
};