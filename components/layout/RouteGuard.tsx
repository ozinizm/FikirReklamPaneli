"use client";

import { ReactNode, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { authState } from "@/lib/authState";

const publicRoutes = new Set(["/login"]);
const setupRoutes = new Set(["/account-select", "/connect/meta", "/connect/google"]);
const dashboardRoutes = new Set(["/", "/dashboard"]);

export default function RouteGuard({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [status, setStatus] = useState<"checking" | "allowed">("checking");

  useEffect(() => {
    setStatus("checking");
    const isPublic = publicRoutes.has(pathname);
    const isSetup = setupRoutes.has(pathname);
    const isDashboard = dashboardRoutes.has(pathname);

    if (!authState.isLoggedIn) {
      if (isPublic) {
        setStatus("allowed");
        return;
      }
      router.replace("/login");
      return;
    }

    if (authState.isLoggedIn && isPublic) {
      router.replace(authState.platform ? "/dashboard" : "/account-select");
      return;
    }

    if (authState.isLoggedIn && !authState.platform) {
      if (isSetup) {
        setStatus("allowed");
        return;
      }
      router.replace("/account-select");
      return;
    }

    if (authState.platform && isSetup) {
      router.replace("/dashboard");
      return;
    }

    if (isDashboard && authState.isLoggedIn && !authState.platform) {
      router.replace("/account-select");
      return;
    }

    setStatus("allowed");
  }, [pathname, router]);

  if (status === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light text-sm text-slate-600">
        Yönlendiriliyor...
      </div>
    );
  }

  return <>{children}</>;
}
