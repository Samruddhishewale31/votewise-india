import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ShieldAlert } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6 hero-gradient">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[13px] uppercase tracking-wider">
              <span className="flex h-2 w-2 rounded-full bg-tertiary animate-pulse" aria-hidden="true"></span>
              Electoral Awareness Platform
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
              Empowering the <span className="text-primary italic">Indian</span> Voter.
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              A premium, non-partisan guide designed to navigate the democratic process. From registration to casting your ballot, we're with you.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/learn" 
                className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                Start Learning Guide
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">arrow_forward</span>
              </Link>
              <Link 
                href="/quiz"
                className="bg-white border-2 border-gray-200 text-gray-700 px-10 py-4 rounded-xl font-bold hover:border-primary hover:text-primary transition-all focus:outline-none focus:ring-4 focus:ring-primary/50"
              >
                Check Readiness
              </Link>
            </div>
          </div>

          <div className="relative group lg:block hidden">
            <div className="absolute -inset-10 bg-primary/5 rounded-[3rem] blur-3xl group-hover:bg-primary/10 transition-colors duration-1000"></div>
            <div className="relative bg-white p-4 rounded-3xl shadow-2xl rotate-1 group-hover:rotate-0 transition-transform duration-700 border border-gray-100">
              {/* Fallback image if object source is missing */}
              <div className="w-full aspect-[4/3] bg-gray-100 rounded-2xl flex items-center justify-center overflow-hidden relative">
                 <Image 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGx9gyMTRp1RnyRZKfbKqSFgkU1thKxi8W5Ug-KypvpBLdDiqYeN8Tnb4qbsiZtwPGd0Ei_QcajLEUJXS0tekkW_uidxEqcTrPA9XsLNVP6rg7e3DO_lgWV3qw7XV5I4CSCX2oRBhnlsOR23ycEjINRg2wRctLDyL2v7Ruuj9o1Cb8xw4_ILFqPcWzXUlWes4vzXo-gh07hTeUTd3ruoO1u0JqvB5Mq7MfGIpgVdqWpSvR_ryultnb7t-7PfML04c2JauJEo67MtYA" 
                    alt="Inclusive representation of Indian voters"
                    fill
                    className="object-cover"
                    unoptimized
                 />
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-tertiary" aria-hidden="true">verified_user</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">Official Data</p>
                  <p className="text-[11px] text-gray-500 font-medium">ECI Sourced Information</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Learning */}
      <section className="py-32 bg-gray-50/50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">Tailored Education Paths</h2>
              <p className="text-lg text-gray-500 max-w-2xl">Civic responsibility varies for everyone. Choose a path designed for your specific life stage.</p>
            </div>
            <Link href="/learn" className="group flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all focus:outline-none focus:ring-2 focus:ring-primary rounded">
              All Modules <span className="material-symbols-outlined text-[20px]" aria-hidden="true">east</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/learn?path=first-time" className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col focus:outline-none focus:ring-4 focus:ring-primary/50">
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">person_add</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">First-Time Voter</h3>
              <p className="text-gray-500 leading-relaxed mb-10">Simplified, step-by-step guidance for youth entering the democratic process for the first time.</p>
              <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                <span className="text-xs font-bold text-tertiary flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">checklist</span> 8 MODULES
                </span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-primary transition-colors" aria-hidden="true">arrow_forward</span>
              </div>
            </Link>

            {/* Card 2 */}
            <Link href="/learn?path=professional" className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col focus:outline-none focus:ring-4 focus:ring-secondary/50">
              <div className="w-14 h-14 bg-secondary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-colors duration-300 text-secondary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">work</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Professional</h3>
              <p className="text-gray-500 leading-relaxed mb-10">Understanding workplace voting rights, leaves of absence, and participation for busy citizens.</p>
              <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-1 uppercase tracking-widest">
                  Available Now
                </span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-secondary transition-colors" aria-hidden="true">arrow_forward</span>
              </div>
            </Link>

            {/* Card 3 */}
            <Link href="/learn?path=senior" className="group bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col focus:outline-none focus:ring-4 focus:ring-tertiary/50">
              <div className="w-14 h-14 bg-tertiary/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-tertiary group-hover:text-white transition-colors duration-300 text-tertiary">
                <span className="material-symbols-outlined text-3xl" aria-hidden="true">elderly</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Citizens</h3>
              <p className="text-gray-500 leading-relaxed mb-10">Exclusive information on home-voting, doorstep registration, and priority booth access.</p>
              <div className="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center">
                <span className="text-xs font-bold text-gray-400 flex items-center gap-1 uppercase tracking-widest">
                  Home Support
                </span>
                <span className="material-symbols-outlined text-gray-300 group-hover:text-tertiary transition-colors" aria-hidden="true">arrow_forward</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Voting Journey (Vertical Timeline Refined) */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">Your Voting Roadmap</h2>
            <div className="flex justify-center gap-2 mb-8">
              <div className="w-12 h-1.5 bg-primary rounded-full"></div>
              <div className="w-3 h-1.5 bg-gray-200 rounded-full"></div>
              <div className="w-3 h-1.5 bg-gray-200 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">From checking your eligibility to verifying your ballot on the machine.</p>
          </div>

          <div className="relative journey-line space-y-24 before:content-[''] before:absolute before:left-[24px] md:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-primary-container before:via-primary before:to-primary-container md:before:-translate-x-1/2">
            
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
              <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1 mt-6 md:mt-0 w-full pl-16 md:pl-0">
                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Check Eligibility</h4>
                <p className="text-gray-500 leading-relaxed">Ensure you meet the criteria: Indian citizenship and 18+ years of age on the qualifying date.</p>
              </div>
              <div className="absolute left-0 md:static z-10 w-12 h-12 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg order-1 md:order-2 shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-primary font-black text-sm">01</span>
              </div>
              <div className="flex-1 md:pl-16 order-3 hidden md:block"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
              <div className="flex-1 order-3 md:order-1 hidden md:block"></div>
              <div className="absolute left-0 md:static z-10 w-12 h-12 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg order-1 md:order-2 shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-primary font-black text-sm">02</span>
              </div>
              <div className="flex-1 md:pl-16 order-2 md:order-3 mt-6 md:mt-0 w-full pl-16 md:pl-16">
                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Verify Electoral Roll</h4>
                <p className="text-gray-500 leading-relaxed">Confirm your presence in the official voters' list for your specific assembly constituency.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
              <div className="flex-1 md:text-right md:pr-16 order-2 md:order-1 mt-6 md:mt-0 w-full pl-16 md:pl-0">
                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Locate Polling Booth</h4>
                <p className="text-gray-500 leading-relaxed">Find your assigned station. Use our digital map tool to find the exact location of your booth.</p>
              </div>
              <div className="absolute left-0 md:static z-10 w-12 h-12 bg-white rounded-full border-4 border-primary flex items-center justify-center shadow-lg order-1 md:order-2 shrink-0 group-hover:scale-110 transition-transform">
                <span className="text-primary font-black text-sm">03</span>
              </div>
              <div className="flex-1 md:pl-16 order-3 hidden md:block"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center md:items-start group">
              <div className="flex-1 order-3 md:order-1 hidden md:block"></div>
              <div className="absolute left-0 md:static z-10 w-12 h-12 bg-primary rounded-full border-4 border-primary/20 flex items-center justify-center shadow-xl order-1 md:order-2 shrink-0 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-white text-xl" aria-hidden="true">how_to_reg</span>
              </div>
              <div className="flex-1 md:pl-16 order-2 md:order-3 mt-6 md:mt-0 w-full pl-16 md:pl-16">
                <h4 className="text-2xl font-extrabold text-gray-900 mb-2">Cast Your Vote</h4>
                <p className="text-gray-500 leading-relaxed">Visit the booth, get inked, and use the EVM+VVPAT system to record your democratic choice securely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact (High Contrast Focus) */}
      <section className="py-32 bg-primary px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-15deg] translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
            <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-xl">
              <span className="material-symbols-outlined text-white text-4xl" aria-hidden="true">policy</span>
            </div>
            <div>
              <h2 className="text-4xl font-extrabold text-white mb-3">Fighting Electoral Misinformation</h2>
              <p className="text-primary-container text-lg">Knowledge is your best defense against rumors and false claims.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Item 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="p-8 bg-red-50 border-b border-red-100">
                <div className="flex items-center gap-3 text-red-600 font-black text-xs uppercase tracking-widest mb-4">
                  <ShieldAlert className="w-5 h-5 text-red-600" aria-hidden="true" />
                  Myth Detected
                </div>
                <p className="text-xl font-bold text-gray-800 leading-snug">"Electronic Voting Machines (EVMs) can be hacked through cellular signals."</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 text-tertiary font-black text-xs uppercase tracking-widest mb-4">
                  <CheckCircle2 className="w-5 h-5 text-tertiary" aria-hidden="true" />
                  The Fact
                </div>
                <p className="text-gray-600 leading-relaxed italic">Indian EVMs are standalone, non-networked units. They have no Wi-Fi, Bluetooth, or wireless hardware, making remote interference technically impossible.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col">
              <div className="p-8 bg-red-50 border-b border-red-100">
                <div className="flex items-center gap-3 text-red-600 font-black text-xs uppercase tracking-widest mb-4">
                  <ShieldAlert className="w-5 h-5 text-red-600" aria-hidden="true" />
                  Myth Detected
                </div>
                <p className="text-xl font-bold text-gray-800 leading-snug">"You cannot vote without your physical Voter ID (EPIC) card."</p>
              </div>
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-3 text-tertiary font-black text-xs uppercase tracking-widest mb-4">
                  <CheckCircle2 className="w-5 h-5 text-tertiary" aria-hidden="true" />
                  The Fact
                </div>
                <p className="text-gray-600 leading-relaxed italic">If your name is on the electoral roll, you can use any of the 12 ECI-approved photo IDs, including Aadhaar, PAN card, Driving License, or Passport.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
             <Link 
                href="/myths-facts" 
                className="inline-flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full font-bold transition-colors focus:ring-2 focus:ring-white outline-none"
             >
                Explore Full Fact Checker <ArrowRight className="w-4 h-4" />
             </Link>
          </div>
        </div>
      </section>
      
      {/* Search / Assist CTA */}
      <section className="py-24 bg-surface px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Need specific guidance?</h2>
           <p className="text-lg text-gray-600">Our Smart AI Assistant is trained exclusively on Indian electoral procedures to help answer your unique questions safely and neutrally.</p>
           <div className="flex justify-center">
              <Link 
                href="/assistant" 
                className="bg-primary text-white border-2 border-primary hover:bg-white hover:text-primary px-10 py-4 rounded-xl font-bold transition-all focus:outline-none focus:ring-4 focus:ring-primary/50 flex items-center gap-2"
              >
                <span className="material-symbols-outlined" aria-hidden="true">smart_toy</span>
                Ask the Assistant
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
