"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { authState, updateAuthState } from "@/lib/authState";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    // Fake login
    updateAuthState({ isLoggedIn: true, platform: null });
    router.push("/account-select");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-white/95 p-8 shadow-2xl shadow-blue-500/10 ring-1 ring-slate-200/60">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12h16M4 12c0-4.418 3.582-8 8-8 1.3 0 2.53.31 3.61.86M4 12c0 4.418 3.582 8 8 8 1.3 0 2.53-.31 3.61-.86" strokeLinecap="round" />
              <path d="M20 12c0-2.761-2.239-5-5-5-1.657 0-3 1.343-3 3v7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.4em] text-slate-400">AdsPro</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-900">Welcome back</h1>
          <p className="text-sm text-slate-500">Log in to orchestrate every channel from a single hub.</p>
        </div>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-slate-600">
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="you@adspro.co"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <label className="block text-sm font-medium text-slate-600">
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="••••••••"
              className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </label>
          <div className="flex items-center justify-between text-sm text-slate-500">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              Keep me signed in
            </label>
            <button type="button" className="font-semibold text-blue-600 hover:text-blue-500">
              Forgot password?
            </button>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-blue-600 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-blue-600/30 transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Redirecting..." : "Login"}
          </button>
        </form>
        <p className="text-center text-xs text-slate-400">
          {authState.isLoggedIn ? "You are already authenticated." : "Meta & Google API permissions will be requested next."}
        </p>
      </div>
    </div>
  );
}
