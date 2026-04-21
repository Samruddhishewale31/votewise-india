"use client";

import { mythsData } from "@/data/myths";
import { ShieldAlert, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function MythsFactsPage() {
  const [revealedStates, setRevealedStates] = useState<Record<number, boolean>>({});

  const toggleReveal = (id: number) => {
    setRevealedStates(prev => ({ ...prev, [id]: true }));
  };

  return (
    <div className="py-16 px-6 max-w-5xl mx-auto">
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-wider">
          Fact Checker
        </div>
        <h1 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight">
          Electoral Misinformation
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Social media can spread confusion about the voting process. Use our official fact-checker to distinguish rumors from Election Commission policy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mythsData.map((item) => {
          const isRevealed = revealedStates[item.id];
          
          return (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col h-full focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
              <div className="p-8 bg-red-50 border-b border-red-100 flex-1">
                <div className="flex items-center gap-3 text-red-600 font-black text-xs uppercase tracking-widest mb-4">
                  <ShieldAlert className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> 
                  Myth Detected
                </div>
                <p className="text-xl font-bold text-gray-800 leading-snug">
                  "{item.myth}"
                </p>
              </div>

              <div className="p-8 bg-white relative">
                {!isRevealed ? (
                  <div className="flex justify-center py-6">
                    <button 
                      onClick={() => toggleReveal(item.id)}
                      className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-3 rounded-full font-bold transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-gray-300"
                      aria-expanded="false"
                      aria-controls={`fact-${item.id}`}
                    >
                      Reveal The Fact
                    </button>
                  </div>
                ) : (
                  <div 
                    id={`fact-${item.id}`}
                    className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                    aria-live="polite"
                  >
                    <div className="flex items-center gap-3 text-tertiary font-black text-xs uppercase tracking-widest mb-4">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" aria-hidden="true" /> 
                      The Fact
                    </div>
                    <p className="text-gray-600 leading-relaxed italic">
                      {item.fact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
