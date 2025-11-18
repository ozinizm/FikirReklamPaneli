"use client";

import Link from "next/link";
import { useMemo } from "react";
import ThemeToggle from "./ThemeToggle";

interface NavLink {
  href: string;
  label: string;
}

interface TopbarProps {
  links: NavLink[];
  currentPath: string;
  subtitle?: string;
}

export default function Topbar({ links, currentPath, subtitle }: TopbarProps) {
  const ctaLabel = useMemo(() => "Yeni kampanya", []);

  return (
    <header className="rounded-3xl bg-white/80 p-6 shadow-card ring-1 ring-slate-200/60 backdrop-blur dark:bg-slate-900/70 dark:ring-white/10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-3 text-slate-900 dark:text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 12h16M4 12c0-4.418 3.582-8 8-8 1.3 0 2.53.31 3.61.86M4 12c0 4.418 3.582 8 8 8 1.3 0 2.53-.31 3.61-.86" strokeLinecap="round" />
                <path d="M20 12c0-2.761-2.239-5-5-5-1.657 0-3 1.343-3 3v7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Fikir Reklam</p>
              <h1 className="text-2xl font-semibold leading-tight">Merkezî reklam paneli</h1>
            </div>
          </div>
          {subtitle && <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">{subtitle}</p>}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <nav className="flex flex-wrap items-center gap-2 rounded-full bg-slate-100 px-2 py-1 text-sm font-medium dark:bg-slate-800">
            {links.map((link) => {
              const isActive = currentPath === link.href || (link.href !== "/" && currentPath.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-1.5 transition ${
                    isActive ? "bg-white text-slate-900 shadow dark:bg-slate-900 dark:text-white" : "text-slate-500 hover:text-slate-900 dark:text-slate-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <button className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 5v14M5 12h14" strokeLinecap="round" />
            </svg>
            {ctaLabel}
          </button>
          <ThemeToggle />
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-400 text-white font-semibold">
            F
          </div>
        </div>
      </div>
    </header>
  );
}
