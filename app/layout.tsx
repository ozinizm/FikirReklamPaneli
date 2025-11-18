import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fikir Reklam Paneli",
  description: "Ad management platform dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background-light font-display text-slate-900 antialiased transition-colors dark:bg-background-dark dark:text-white">
        {children}
      </body>
    </html>
  );
}
