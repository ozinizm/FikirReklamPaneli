"use client";

import { useRouter } from "next/navigation";
import { authState, updateAuthState } from "@/lib/authState";

export default function ConnectMetaPage() {
  const router = useRouter();

  const handleConnect = () => {
    if (!authState.isLoggedIn) {
      router.replace("/login");
      return;
    }
    updateAuthState({ platform: "meta" });
    router.replace("/dashboard");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-16">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-2xl shadow-blue-500/10 ring-1 ring-slate-100">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-500">Meta Ads</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Connect your Meta Ads Account</h1>
            <p className="mt-4 text-base text-slate-500">
              Securely sync spend, audiences, and conversions to unlock AI pacing recommendations.
            </p>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 text-blue-600">
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 8c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5c1 3-3 8.5-6 8.5s-7-5.5-6-8.5Z" />
              <path d="M9 11c.5-1 1.5-2 3-2s2.5 1 3 2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="mt-10 space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">This action will:</p>
          <ul className="space-y-2">
            <li>• Pull 90 days of campaign history.</li>
            <li>• Enable automated rule recommendations.</li>
            <li>• Share workspace access with your team.</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={handleConnect}
            className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5"
          >
            Connect
          </button>
          <button onClick={() => router.back()} className="text-sm font-semibold text-slate-500 transition hover:text-slate-700">
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
