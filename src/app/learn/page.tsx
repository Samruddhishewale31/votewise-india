"use client";

import { useEffect, Suspense } from "react";
import { learningPathsData } from "@/data/learningPaths";
import { ArrowRight, BookOpen, Clock, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { saveUserData } from "@/lib/firestore";
import { trackEvent } from "@/lib/analytics";

function LearnContent() {
  const searchParams = useSearchParams();
  const activePathId = searchParams.get("path") || "first-time";
  const { user } = useAuth();
  
  const activePath = learningPathsData.find(p => p.id === activePathId) || learningPathsData[0];

  useEffect(() => {
    trackEvent("learning_path_selected", { path: activePathId });
    if (user) {
      saveUserData(user.uid, { selectedLearningPath: activePathId });
    }
  }, [activePathId, user]);

  return (
    <div className="py-16 px-6 max-w-7xl mx-auto">
      <div className="space-y-6 mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary font-bold text-xs uppercase tracking-wider">
          <BookOpen className="w-4 h-4" />
          Learning Hub
        </div>
        <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight">
          Your Personalized <br className="hidden md:block"/> Voting Journey
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Select the profile that best matches your situation to get tailored guidance on exercising your constitutional right.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-12">
        {learningPathsData.map(path => (
          <Link
            key={path.id}
            href={`/learn?path=${path.id}`}
            className={`px-6 py-3 rounded-xl font-bold transition-all ${
              activePath.id === path.id 
                ? "bg-primary text-white shadow-md ring-2 ring-primary ring-offset-2" 
                : "bg-white border-2 border-gray-100 text-gray-600 hover:border-primary/50"
            }`}
          >
            {path.title}
          </Link>
        ))}
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
        <div className="flex items-start gap-6 mb-10">
          <div className="hidden md:flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-primary text-3xl">{activePath.icon}</span>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">{activePath.title} Curriculum</h2>
            <p className="text-gray-600 text-lg">{activePath.description}</p>
          </div>
        </div>

        <div className="space-y-4">
          {activePath.modules.map((module, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4 mb-4 sm:mb-0">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-sm font-bold text-gray-400 group-hover:border-primary group-hover:text-primary transition-colors">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{module.title}</h3>
                  <div className="flex items-center gap-1 text-xs font-bold text-gray-400 uppercase mt-1">
                    <Clock className="w-3 h-3" /> {module.duration} read
                  </div>
                </div>
              </div>
              
              <button 
                className="flex items-center justify-center gap-2 text-primary bg-primary/10 hover:bg-primary hover:text-white px-5 py-2.5 rounded-xl font-bold transition-all focus:ring-2 focus:ring-primary focus:outline-none"
                onClick={() => {
                   trackEvent("resources_viewed", { module: module.title });
                }}
              >
                Start Module <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Nav to Assessment */}
      <div className="mt-16 bg-surface-container-low p-8 rounded-2xl border border-gray-200 text-center">
         <h3 className="text-xl font-bold mb-4">Completed your learning path?</h3>
         <p className="text-gray-600 mb-6">Take our short readiness quiz to see if you are fully prepared for polling day.</p>
         <Link href="/quiz" className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors">
             Take the Readiness Quiz
         </Link>
      </div>

    </div>
  );
}

export default function LearnPage() {
  return (
    <Suspense fallback={<div className="py-16 px-6 text-center">Loading learning paths...</div>}>
      <LearnContent />
    </Suspense>
  );
}
