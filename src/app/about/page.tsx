import { CheckCircle2, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto space-y-24">
      
      {/* Vision & About */}
      <section className="space-y-8">
        <h1 className="text-4xl lg:text-6xl font-black text-gray-900 tracking-tight">
          About VoteWise India
        </h1>
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            VoteWise India is an accessibility-first, AI-powered election process education platform designed solely to help citizens understand the democratic process in a simple, neutral, and non-partisan way. 
          </p>
          <p>
            Democracy functions best when its participants are well-informed. However, first-time voters, busy professionals, and seniors often find the official documentation overwhelming. We bridge that gap by extracting the core processes—from checking eligibility to pushing the button on the EVM—and presenting them through personalized, easy-to-digest interactive tools.
          </p>
        </div>

        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
          <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" /> Our Core Principles
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>100% Non-Partisan:</strong> We do not support, endorse, or discuss specific political parties, candidates, or ideologies.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>Accessibility First:</strong> Civic education must be available to everyone, regardless of physical or cognitive ability.</span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" />
              <span className="text-gray-700"><strong>Privacy Focused:</strong> We do not ask for real identity documents or permanently store personal data mapped to individuals.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Accessibility Statement */}
      <section id="accessibility" className="space-y-8 scroll-mt-24">
        <h2 className="text-3xl font-extrabold text-gray-900">Accessibility Statement</h2>
        <div className="prose prose-lg text-gray-600 max-w-none">
          <p>
            VoteWise India is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards (WCAG 2.1 AA/AAA).
          </p>
          <p>
            Our platform features built-in controls for:
          </p>
          <ul>
            <li>Text scaling for users with low vision.</li>
            <li>High Contrast mode to improve legibility against background colors.</li>
            <li>Reduced Motion toggles to stop safe but potentially triggering animations.</li>
            <li>Full semantic HTML structures to support screen readers and keyboard navigation.</li>
          </ul>
          <p>
            If you encounter any accessibility barriers on this platform, please reach out to our support team.
          </p>
        </div>
      </section>

      {/* Official Disclaimer */}
      <section className="bg-red-50 p-8 md:p-12 rounded-3xl border border-red-100">
        <h2 className="text-2xl font-extrabold text-red-800 mb-4 uppercase tracking-widest text-sm">
          Strict Regulatory Disclaimer
        </h2>
        <div className="text-red-900 space-y-4 font-medium">
          <p>
            VoteWise India is a technology prototype built for a hackathon and is <strong>NOT</strong> affiliated with, endorsed by, or operated by the Election Commission of India (ECI) or any government entity.
          </p>
          <p>
            While all educational content is derived closely from publicly available official guidelines, it is provided here for educational purposes only and does not constitute binding legal advice.
          </p>
          <p>
            The tools provided, including the AI Assistant and Polling Map locators, are demonstrations. Always consult the official <Link href="https://eci.gov.in" target="_blank" rel="noopener noreferrer" className="underline decoration-red-400 hover:text-red-700">Election Commission of India website (eci.gov.in)</Link> or the Voter Helpline App for the definitive and legally binding rules, schedules, and polling data.
          </p>
        </div>
      </section>

    </div>
  );
}
