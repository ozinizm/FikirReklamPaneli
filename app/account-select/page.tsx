import Link from "next/link";

const platforms = [
  {
    name: "Meta Ads",
    description: "Boost paid social with creative intelligence and automated rules.",
    href: "/connect/meta",
    gradient: "from-blue-500/10 via-blue-400/10 to-purple-500/10",
    icon: (
      <svg className="h-10 w-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 8c1-3 3.5-4.5 6-4.5s5 1.5 6 4.5c1 3-3 8.5-6 8.5s-7-5.5-6-8.5Z" />
        <path d="M9 11c.5-1 1.5-2 3-2s2.5 1 3 2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Google Ads",
    description: "Unify search + performance max spend with shared pacing goals.",
    href: "/connect/google",
    gradient: "from-emerald-500/10 via-blue-500/10 to-amber-500/10",
    icon: (
      <svg className="h-10 w-10 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M5 19 12 4l7 15" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="19" r="1.5" />
      </svg>
    )
  }
];

export default function AccountSelectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-4 py-16">
      <div className="mx-auto max-w-4xl space-y-10">
        <div className="rounded-3xl bg-white p-10 shadow-2xl shadow-blue-500/10 ring-1 ring-slate-100">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-500">Workspace setup</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">Choose the platform you want to connect</h1>
          <p className="mt-4 text-base text-slate-500">
            AdsPro syncs your budgets, creatives, and KPIs in real-time. Pick a platform below to continue with a secure connection.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {platforms.map((platform) => (
            <Link
              key={platform.name}
              href={platform.href}
              className={`group flex flex-col justify-between rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-lg shadow-slate-200/40 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-blue-500/20`}
            >
              <div className={`inline-flex items-center gap-4 rounded-2xl bg-gradient-to-r ${platform.gradient} px-4 py-3`}>
                {platform.icon}
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Connect</p>
                  <p className="text-lg font-semibold text-slate-900">{platform.name}</p>
                </div>
              </div>
              <p className="mt-6 text-sm text-slate-500">{platform.description}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                Continue
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m9 6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
