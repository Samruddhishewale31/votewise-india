import type { Metadata } from "next";
import "./globals.css";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { TopAppBar } from "@/components/layout/TopAppBar";
import { BottomNavBar } from "@/components/layout/BottomNavBar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "VoteWise India - Official Civic Education Platform",
  description: "A premium, non-partisan guide designed to navigate the democratic process for Indian voters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AuthProvider>
          <AccessibilityProvider>
            <div className="flex flex-col min-h-screen">
              <TopAppBar />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
              <BottomNavBar />
            </div>
          </AccessibilityProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
