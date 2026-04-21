"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Namaste! I am the VoteWise India Educational Assistant. I can help clear up any confusion about voting rules, eligibility, polling day processes, and EVMs. How can I help you prepare for elections today?"
    }
  ]);
  const [inputStr, setInputStr] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputStr.trim() || isLoading) return;

    const query = inputStr.trim();
    setInputStr("");
    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query })
      });

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.result }]);
      } else {
        throw new Error(data.error || "Failed to fetch");
      }
    } catch (error: any) {
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: `Sorry, I encountered an error: ${error.message}. Please try again.`
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-gray-50/50">
      <div className="max-w-4xl w-full mx-auto p-6 flex flex-col h-full">
        
        {/* Header */}
        <div className="bg-white rounded-t-3xl shadow-sm border border-gray-100 p-6 flex items-center justify-between z-10 relative">
           <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                 <Bot className="w-6 h-6 text-primary" />
              </div>
              <div>
                 <h1 className="text-xl font-bold text-gray-900">Civic Guide Assistant</h1>
                 <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
                   <span className="w-2 h-2 rounded-full bg-tertiary"></span> System Online
                 </p>
              </div>
           </div>
           {/* Mobile hidden strict mode warning */}
           <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-yellow-50 text-yellow-800 rounded-lg text-xs font-bold border border-yellow-200">
              <AlertCircle className="w-4 h-4" /> Strictly Educational & Non-Partisan
           </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow overflow-y-auto bg-white border-x border-gray-100 p-6 space-y-6">
           {messages.map((m, idx) => (
             <div key={idx} className={cn("flex w-full", m.role === "user" ? "justify-end" : "justify-start")}>
               <div className={cn(
                 "flex gap-4 max-w-[85%] md:max-w-[75%]",
                 m.role === "user" ? "flex-row-reverse" : "flex-row"
               )}>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
                    m.role === "user" ? "bg-gray-100" : "bg-primary text-white"
                  )}>
                     {m.role === "user" ? <User className="w-5 h-5 text-gray-600" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-base leading-relaxed overflow-hidden",
                    m.role === "user" 
                      ? "bg-gray-100 text-gray-900 rounded-tr-none" 
                      : "bg-primary/5 text-gray-800 border border-primary/10 rounded-tl-none"
                  )}>
                     {m.role === "user" ? (
                       m.content
                     ) : (
                       <div className="prose prose-sm prose-primary max-w-none prose-p:leading-relaxed">
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                       </div>
                     )}
                  </div>
               </div>
             </div>
           ))}
           
           {isLoading && (
             <div className="flex justify-start">
               <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                     <Bot className="w-5 h-5" />
                  </div>
                  <div className="p-4 rounded-2xl bg-primary/5 border border-primary/10 rounded-tl-none flex items-center gap-2">
                     <span className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                     <span className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                     <span className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce"></span>
                  </div>
               </div>
             </div>
           )}
           <div ref={endRef} />
        </div>

        {/* Input Area */}
        <div className="bg-white rounded-b-3xl shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.05)] border border-gray-100 p-4 shrink-0">
           <form onSubmit={handleSubmit} className="flex gap-2 relative">
             <input 
               type="text" 
               maxLength={500}
               required
               value={inputStr}
               onChange={(e) => setInputStr(e.target.value)}
               placeholder="Ask about EVMs, eligibility, registration..."
               className="flex-grow pl-6 pr-16 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
             />
             <button 
               type="submit"
               disabled={isLoading || !inputStr.trim()}
               className="absolute right-2 top-2 bottom-2 aspect-square bg-primary text-white rounded-xl flex items-center justify-center shadow-md disabled:bg-gray-300 disabled:cursor-not-allowed transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
               aria-label="Send message"
             >
                <Send className="w-5 h-5 ml-[-2px]" />
             </button>
           </form>
           <p className="text-center text-xs text-gray-400 mt-3 flex items-center justify-center gap-1">
             AI responses are generated. Proceed considering them as educational guidelines.
           </p>
        </div>

      </div>
    </div>
  );
}
