"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { AccessibilityPanel } from "./AccessibilityPanel";
import { useAccessibility } from "@/contexts/AccessibilityContext";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, User as UserIcon } from "lucide-react";

export function TopAppBar() {
  const pathname = usePathname();
  const { setIsPanelOpen } = useAccessibility();
  const { user, signIn, logOut, firebaseEnabled, isLoading } = useAuth();

  const navLinks = [
    { name: "Learning Hub", href: "/learn" },
    { name: "AI Assistant", href: "/assistant" },
    { name: "Voter Quiz", href: "/quiz" },
    { name: "Myth vs Fact", href: "/myths-facts" },
    { name: "Resources", href: "/resources" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 z-40 sticky top-0">
        <nav className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2" aria-label="VoteWise India Home">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl" aria-hidden="true">
                how_to_vote
              </span>
            </div>
            <span className="text-xl font-extrabold text-primary tracking-tight">
              VoteWise <span className="text-gray-400 font-medium">India</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (pathname.startsWith(link.href) && link.href !== "/");

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm px-1",
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-gray-500 hover:text-primary"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {firebaseEnabled && (
              <div className="hidden sm:block">
                {isLoading ? (
                  <div className="h-10 w-24 bg-gray-100 animate-pulse rounded-full"></div>
                ) : user ? (
                  <div className="flex items-center gap-2 group relative">
                    <img src={user.photoURL || ""} alt="User Avatar" className="w-10 h-10 rounded-full border-2 border-primary/20" />
                    <button 
                      onClick={logOut}
                      className="absolute right-0 top-12 bg-white border border-gray-100 shadow-xl rounded-xl p-2 hidden group-hover:flex items-center gap-2 font-semibold text-sm text-gray-700 hover:bg-gray-50 min-w-max"
                    >
                      <LogOut className="w-4 h-4" /> Sign Out
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={signIn}
                    className="flex items-center gap-2 border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full font-bold text-xs transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  >
                    <UserIcon className="w-4 h-4 text-gray-500" />
                    SIGN IN
                  </button>
                )}
              </div>
            )}
            <button
              onClick={() => setIsPanelOpen(true)}
              className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-full transition-all border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="Open accessibility controls"
              aria-haspopup="dialog"
            >
              <span
                className="material-symbols-outlined text-gray-600 text-[20px]"
                aria-hidden="true"
              >
                accessibility_new
              </span>
              <span className="text-xs font-bold text-gray-700 hidden sm:inline-block">
                ACCESSIBILITY
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AccessibilityPanel />
    </>
  );
}