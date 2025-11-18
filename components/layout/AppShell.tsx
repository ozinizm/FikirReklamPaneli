"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Topbar from "./Topbar";

const navLinks = [
  { href: "/", label: "Panel" },
  { href: "/campaigns", label: "Kampanyalar" },
  { href: "/analytics", label: "Analizler" },
  { href: "/creatives", label: "Creatives" },
  { href: "/settings", label: "Ayarlar" }
];

interface AppShellProps {
  children: ReactNode;
  subtitle?: string;
}

export default function AppShell({ children, subtitle }: AppShellProps) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background-dark text-white">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <aside className="w-full border-b border-white/5 bg-slate-950/90 px-6 py-6 lg:w-72 lg:border-b-0 lg:border-r">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/10 text-brand-200">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M4 12h16M12 4v16" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/40">Fikir</p>
                <p className="text-lg font-semibold">Pulse Command</p>
              </div>
            </div>
            <nav className="space-y-1 text-sm font-semibold text-white/60">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`flex items-center justify-between rounded-2xl px-4 py-2 transition duration-200 ${
                      isActive ? "bg-white/10 text-white" : "hover:bg-white/5"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="text-xs font-medium text-brand-200">live</span>
                    )}
                  </Link>
                );
              })}
            </nav>
            <div className="rounded-3xl border border-white/5 bg-white/5 p-5">
              <p className="text-sm text-white/70">Strateji paketi</p>
              <p className="mt-2 text-2xl font-semibold">Growth+</p>
              <p className="mt-2 text-xs text-white/60">Aylık raporlar ve otomatik optimizasyon aktif.</p>
              <button className="mt-4 w-full rounded-2xl bg-white/90 py-2 text-sm font-semibold text-slate-900 transition hover:bg-white">
                Planı yönet
              </button>
            </div>
          </div>
        </aside>
        <div className="flex-1 bg-slate-950/70">
          <Topbar links={navLinks} currentPath={pathname} subtitle={subtitle} />
          <main className="space-y-8 px-4 pb-12 pt-6 sm:px-6 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
