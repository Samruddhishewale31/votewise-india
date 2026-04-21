"use client";

import { useState, useEffect } from "react";
import { quizQuestions, calculateReadinessScore } from "@/data/quizData";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function QuizPage() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedStats = localStorage.getItem("vw_quizProgress");
    if (savedStats) {
      try {
        const parsed = JSON.parse(savedStats);
        if (parsed.answers) setSelectedAnswers(parsed.answers);
        if (parsed.currentIdx !== undefined) setCurrentIdx(parsed.currentIdx);
        if (parsed.showResults !== undefined) setShowResults(parsed.showResults);
      } catch (e) {
        console.error("Failed to parse quiz progress", e);
      }
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("vw_quizProgress", JSON.stringify({
        answers: selectedAnswers,
        currentIdx,
        showResults,
      }));
    }
  }, [selectedAnswers, currentIdx, showResults, isLoaded]);

  const currentQ = quizQuestions[currentIdx];
  const hasAnsweredCurrent = selectedAnswers[currentQ.id] !== undefined;

  const handleSelect = (optionIdx: number) => {
    if (hasAnsweredCurrent) return; // Prevent changing answer
    setSelectedAnswers(prev => ({ ...prev, [currentQ.id]: optionIdx }));
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setShowResults(true);
    }
  };

  let score = 0;
  if (showResults) {
    quizQuestions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) score++;
    });
  }

  const resultDetails = showResults ? calculateReadinessScore(score, quizQuestions.length) : null;

  if (showResults && resultDetails) {
    return (
      <div className="py-16 px-6 max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8">Your Readiness Score</h1>
        
        <div className={cn("p-12 rounded-3xl mb-12", resultDetails.bg)}>
           <div className={cn("text-7xl font-black mb-4", resultDetails.color)}>
              {Math.round((score / quizQuestions.length) * 100)}%
           </div>
           <p className="text-2xl font-bold text-gray-900 mb-4">{resultDetails.rating}</p>
           <p className="text-gray-700 text-lg leading-relaxed">{resultDetails.message}</p>
        </div>
        
        <div className="flex gap-4 justify-center">
           <button 
             onClick={() => { setShowResults(false); setSelectedAnswers({}); setCurrentIdx(0); }}
             className="px-8 py-4 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center gap-2"
           >
             <RotateCcw className="w-5 h-5" /> Retake Quiz
           </button>
           <Link 
             href="/learn"
             className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2"
           >
             Go to Learning Hub <ArrowRight className="w-5 h-5" />
           </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
           <span>Question {currentIdx + 1} of {quizQuestions.length}</span>
           <span>Pre-Polling Assessment</span>
        </div>
        <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
           <div 
             className="h-full bg-primary transition-all duration-500" 
             style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
           />
        </div>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 min-h-[400px] flex flex-col">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-snug">
          {currentQ.question}
        </h2>

        <div className="space-y-4 mb-10 flex-grow">
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedAnswers[currentQ.id] === idx;
            const isCorrect = idx === currentQ.correctAnswer;
            
            let btnClass = "bg-white border-gray-200 hover:border-primary/50 text-gray-700";
            
            if (hasAnsweredCurrent) {
               if (isCorrect) {
                  btnClass = "bg-tertiary/10 border-tertiary text-tertiary font-bold ring-1 ring-tertiary";
               } else if (isSelected && !isCorrect) {
                  btnClass = "bg-red-50 border-red-500 text-red-700 font-bold ring-1 ring-red-500";
               } else {
                  btnClass = "bg-gray-50 border-gray-100 text-gray-400 opacity-60";
               }
            } else if (isSelected) {
               btnClass = "bg-primary/5 border-primary text-primary ring-1 ring-primary";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={hasAnsweredCurrent}
                className={cn(
                  "w-full text-left p-6 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary/20",
                  btnClass
                )}
                aria-pressed={isSelected}
              >
                {opt}
              </button>
            );
          })}
        </div>
        
        {hasAnsweredCurrent && (
           <div className={cn(
             "p-6 rounded-xl mb-8 flex gap-4",
             selectedAnswers[currentQ.id] === currentQ.correctAnswer ? "bg-tertiary/5 border border-tertiary/20" : "bg-red-50/50 border border-red-100"
           )}>
              <span className="material-symbols-outlined shrink-0" aria-hidden="true">
                 {selectedAnswers[currentQ.id] === currentQ.correctAnswer ? "check_circle" : "info"}
              </span>
              <div>
                 <p className="font-bold mb-1">
                   {selectedAnswers[currentQ.id] === currentQ.correctAnswer ? "Correct!" : "Actually..."}
                 </p>
                 <p className="text-gray-600 text-sm">{currentQ.explanation}</p>
              </div>
           </div>
        )}

        <div className="flex justify-between items-center mt-auto pt-8 border-t border-gray-100">
           <button 
             onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
             disabled={currentIdx === 0}
             className="px-6 py-3 font-bold text-gray-500 disabled:opacity-30 flex items-center gap-2 hover:bg-gray-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
           >
             <ArrowLeft className="w-4 h-4" /> Previous
           </button>
           
           <button 
             onClick={handleNext}
             disabled={!hasAnsweredCurrent}
             className="px-8 py-3 bg-primary text-white rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex items-center gap-2 shadow-md"
           >
             {currentIdx === quizQuestions.length - 1 ? "See Results" : "Next Question"} <ArrowRight className="w-4 h-4" />
           </button>
        </div>
      </div>
    </div>
  );
}
