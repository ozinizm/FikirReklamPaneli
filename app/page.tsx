import AppShell from "@/components/layout/AppShell";
import KpiCard from "@/components/dashboard/KpiCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import CampaignTable from "@/components/campaigns/CampaignTable";
import { activityFeed, campaigns, metrics, trendData } from "@/lib/data/mockData";

export default function DashboardPage() {
  return (
    <AppShell subtitle="Tüm kanallardaki performansı tek panelde takip edin.">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <PerformanceChart data={trendData} />
        <div className="rounded-3xl bg-white/90 p-6 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">Güncel</p>
              <h3 className="text-xl font-semibold">Aktivite akışı</h3>
            </div>
            <button className="text-sm font-semibold text-primary">Tümünü gör</button>
          </div>
          <ul className="mt-6 space-y-5">
            {activityFeed.map((activity) => (
              <li key={activity.id} className="flex items-start gap-3">
                <span className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-2xl text-sm font-semibold ${
                  activity.status === "completed"
                    ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300"
                    : "bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300"
                }`}>
                  {activity.status === "completed" ? "✓" : "!"}
                </span>
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{activity.description}</p>
                  <p className="text-xs text-slate-500">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Kampanyalar</p>
            <h3 className="text-2xl font-semibold">Özet görünüm</h3>
          </div>
          <button className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:text-slate-200">
            Raporu dışa aktar
          </button>
        </div>
        <CampaignTable data={campaigns} compact />
      </section>
    </AppShell>
  );
}
