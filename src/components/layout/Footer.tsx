import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-20 lg:pb-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-2" aria-label="VoteWise India Home">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[16px]" aria-hidden="true">how_to_vote</span>
              </div>
              <span className="text-lg font-extrabold text-primary tracking-tight">VoteWise India</span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Dedicated to a transparent, accessible, and inclusive democratic experience for every citizen of India.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Education</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link href="/learn" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">First-time Voters</Link></li>
              <li><Link href="/myths-facts" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">EVM Security</Link></li>
              <li><Link href="/learn" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Postal Ballots</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Tools</h5>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link href="/resources" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Booth Finder</Link></li>
              <li><Link href="/assistant" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">AI Helper</Link></li>
              <li><Link href="/quiz" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Readiness Quiz</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-black text-gray-900 uppercase tracking-widest mb-6">Important Notice</h5>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
              <p className="text-xs text-gray-500 leading-relaxed">
                This platform is for educational purposes only. Always consult official Election Commission of India (ECI) resources for legal or binding information.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">
            © 2024 VOTEWISE INDIA — NON-PARTISAN INITIATIVE
          </p>
          <div className="flex flex-wrap gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-tighter justify-center">
            <Link href="/about" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">About Us</Link>
            <Link href="/about#accessibility" className="hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm">Accessibility Statement</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
