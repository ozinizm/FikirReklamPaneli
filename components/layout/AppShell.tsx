"use client";

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
    <div className="min-h-screen bg-background-light px-4 py-8 text-slate-900 dark:bg-background-dark dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Topbar links={navLinks} currentPath={pathname} subtitle={subtitle} />
        {children}
      </div>
    </div>
  );
}
