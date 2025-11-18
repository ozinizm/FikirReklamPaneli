"use client";

import { useRouter } from "next/navigation";
import { authState, updateAuthState } from "@/lib/authState";

export default function ConnectGooglePage() {
  const router = useRouter();

  const handleConnect = () => {
    if (!authState.isLoggedIn) {
      router.replace("/login");
      return;
    }
    updateAuthState({ platform: "google" });
    router.replace("/dashboard");
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-16">
      <div className="w-full max-w-3xl rounded-3xl bg-white p-10 shadow-2xl shadow-emerald-500/10 ring-1 ring-slate-100">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-emerald-500">Google Ads</p>
            <h1 className="mt-3 text-4xl font-semibold text-slate-900">Connect your Google Ads Account</h1>
            <p className="mt-4 text-base text-slate-500">
              Bring search, shopping, and performance max data into a single performance command center.
            </p>
          </div>
          <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-100 to-amber-100 text-emerald-600">
            <svg className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M5 19 12 4l7 15" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </div>
        </div>
        <div className="mt-10 space-y-4 rounded-3xl bg-slate-50 p-6 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">This action will:</p>
          <ul className="space-y-2">
            <li>• Import conversions and shared budgets.</li>
            <li>• Activate pacing alerts across campaigns.</li>
            <li>• Sync scheduled reports with Slack.</li>
          </ul>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={handleConnect}
            className="rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-emerald-500/30 transition hover:-translate-y-0.5"
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
