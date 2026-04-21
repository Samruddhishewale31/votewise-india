"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function BottomNavBar() {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/", icon: "home" },
    { name: "Learn", href: "/learn", icon: "school" },
    { name: "Help", href: "/assistant", icon: "smart_toy" },
    { name: "Booth", href: "/resources", icon: "person_search" },
  ];

  return (
    <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40">
      <nav className="bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl rounded-2xl flex justify-around items-center px-4 py-3" aria-label="Mobile Navigation">
        {links.map((link) => {
          const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
          
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary",
                isActive ? "text-primary" : "text-gray-400 hover:text-gray-600"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <span 
                className={cn(
                  "material-symbols-outlined text-[24px]",
                  isActive && "fill-1"
                )} 
                aria-hidden="true"
              >
                {link.icon}
              </span>
              <span className="text-[10px] font-black uppercase tracking-tighter mt-1">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
