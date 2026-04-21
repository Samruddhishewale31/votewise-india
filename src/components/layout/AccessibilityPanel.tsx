"use client";

import * as Dialog from "@radix-ui/react-dialog";
import * as Switch from "@radix-ui/react-switch";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export function AccessibilityPanel() {
  const {
    isPanelOpen,
    setIsPanelOpen,
    highContrast,
    toggleHighContrast,
    textSize,
    setTextSize,
    reducedMotion,
    toggleReducedMotion
  } = useAccessibility();

  return (
    <Dialog.Root open={isPanelOpen} onOpenChange={setIsPanelOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-white p-6 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-2xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-2xl font-bold text-gray-900">
              Accessibility Controls
            </Dialog.Title>
            <Dialog.Close className="rounded-full p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary">
              <X className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Close</span>
            </Dialog.Close>
          </div>
          <Dialog.Description className="text-gray-500 mb-4">
            Adjust the viewing experience to suit your needs. Changes are applied immediately.
          </Dialog.Description>

          <div className="space-y-6 py-4">
            {/* Text Size Control */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-gray-900 block" id="text-size-label">
                Text Size
              </label>
              <div className="flex gap-3" role="radiogroup" aria-labelledby="text-size-label">
                {(["normal", "large", "extra-large"] as const).map((size) => (
                  <button
                    key={size}
                    role="radio"
                    aria-checked={textSize === size}
                    onClick={() => setTextSize(size)}
                    className={cn(
                      "flex-1 py-2 px-4 rounded-lg border font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
                      textSize === size 
                        ? "bg-primary text-white border-primary" 
                        : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <span className={cn(
                      size === "normal" ? "text-base" :
                      size === "large" ? "text-lg" : "text-xl"
                    )}>
                      A
                    </span>
                    <span className="sr-only">
                      {size === "normal" ? "Normal text size" : size === "large" ? "Large text size" : "Extra large text size"}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* High Contrast Toggle */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <div>
                <label className="text-sm font-semibold text-gray-900" htmlFor="high-contrast">
                  High Contrast Mode
                </label>
                <p className="text-sm text-gray-500">Increases color contrast for better readability</p>
              </div>
              <Switch.Root
                id="high-contrast"
                checked={highContrast}
                onCheckedChange={toggleHighContrast}
                className="w-[42px] h-[25px] bg-gray-200 rounded-full relative data-[state=checked]:bg-primary outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                aria-label="Toggle high contrast mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>

            {/* Reduced Motion Toggle */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <div>
                <label className="text-sm font-semibold text-gray-900" htmlFor="reduced-motion">
                  Reduced Motion
                </label>
                <p className="text-sm text-gray-500">Minimizes animations and transitions</p>
              </div>
              <Switch.Root
                id="reduced-motion"
                checked={reducedMotion}
                onCheckedChange={toggleReducedMotion}
                className="w-[42px] h-[25px] bg-gray-200 rounded-full relative data-[state=checked]:bg-primary outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
                aria-label="Toggle reduced motion"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
