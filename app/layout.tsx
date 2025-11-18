import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import RouteGuard from "@/components/layout/RouteGuard";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Fikir Reklam Paneli",
  description: "Ad management platform dashboard"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-background-light font-display text-slate-900 antialiased transition-colors dark:bg-background-dark dark:text-white">
        <RouteGuard>{children}</RouteGuard>
      </body>
    </html>
  );
}
