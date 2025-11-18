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
    <header className="border-b border-white/5 bg-slate-950/70 backdrop-blur">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.45em] text-brand-300">Kontrol Merkezi</p>
            <div className="mt-2 flex items-center gap-3">
              <h1 className="text-2xl font-semibold text-white">Fikir Growth Hub</h1>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">Canlı</span>
            </div>
            {subtitle && <p className="mt-2 text-sm text-white/60">{subtitle}</p>}
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex min-w-0 flex-1 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
              <svg className="h-4 w-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="7" />
                <path d="m16.5 16.5 4 4" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                placeholder="Kanallarda ara"
                className="flex-1 bg-transparent text-sm text-white placeholder-white/40 focus:outline-none"
              />
            </div>
            <div className="flex items-center justify-end gap-3">
              <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 7h14M5 12h9M5 17h6" strokeLinecap="round" />
                </svg>
                Raporla
              </button>
              <button className="inline-flex items-center gap-2 rounded-2xl bg-brand-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-900/40 transition hover:-translate-y-0.5">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
                {ctaLabel}
              </button>
              <ThemeToggle />
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-white">
                FK
              </div>
            </div>
          </div>
        </div>
        <nav className="flex gap-2 overflow-x-auto text-sm font-semibold text-white/70 lg:hidden">
          {links.map((link) => {
            const isActive = currentPath === link.href || (link.href !== "/" && currentPath.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 transition ${isActive ? "bg-white/10 text-white" : "hover:bg-white/5"}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
