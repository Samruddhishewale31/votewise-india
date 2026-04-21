"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type AccessibilityContextType = {
  highContrast: boolean;
  toggleHighContrast: () => void;
  textSize: "normal" | "large" | "extra-large";
  setTextSize: (size: "normal" | "large" | "extra-large") => void;
  reducedMotion: boolean;
  toggleReducedMotion: () => void;
  isPanelOpen: boolean;
  setIsPanelOpen: (open: boolean) => void;
};

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [textSize, setTextSize] = useState<"normal" | "large" | "extra-large">("normal");
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Load from local storage on mount
    const savedHC = localStorage.getItem("vw_highContrast");
    if (savedHC !== null) setHighContrast(savedHC === "true");

    const savedTS = localStorage.getItem("vw_textSize");
    if (savedTS === "normal" || savedTS === "large" || savedTS === "extra-large") setTextSize(savedTS);

    const savedRM = localStorage.getItem("vw_reducedMotion");
    if (savedRM !== null) setReducedMotion(savedRM === "true");

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    // Apply High Contrast
    if (highContrast) {
      document.body.classList.add("hc");
    } else {
      document.body.classList.remove("hc");
    }
    localStorage.setItem("vw_highContrast", String(highContrast));

    // Apply Text Size
    document.documentElement.style.fontSize = 
      textSize === "normal" ? "16px" : 
      textSize === "large" ? "18px" : "20px";
    localStorage.setItem("vw_textSize", textSize);

    // Apply Reduced Motion
    if (reducedMotion) {
      document.documentElement.classList.add("reduced-motion");
    } else {
      document.documentElement.classList.remove("reduced-motion");
    }
    localStorage.setItem("vw_reducedMotion", String(reducedMotion));

  }, [highContrast, textSize, reducedMotion, isLoaded]);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        toggleHighContrast: () => setHighContrast(prev => !prev),
        textSize,
        setTextSize,
        reducedMotion,
        toggleReducedMotion: () => setReducedMotion(prev => !prev),
        isPanelOpen,
        setIsPanelOpen,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext);
  if (context === undefined) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
}
