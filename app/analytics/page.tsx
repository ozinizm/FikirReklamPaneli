import AppShell from "@/components/layout/AppShell";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import KpiCard from "@/components/dashboard/KpiCard";
import { metrics, trendData } from "@/lib/data/mockData";

const breakdown = [
  { channel: "Meta", spend: 52, color: "bg-blue-500" },
  { channel: "Google", spend: 34, color: "bg-amber-500" },
  { channel: "TikTok", spend: 9, color: "bg-fuchsia-500" },
  { channel: "LinkedIn", spend: 5, color: "bg-sky-500" }
];

export default function AnalyticsPage() {
  return (
    <AppShell subtitle="Performans trendlerini ve kanal bazlı dağılımları inceleyin.">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {metrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-[3fr,2fr]">
        <PerformanceChart data={trendData} />
        <div className="space-y-4 rounded-3xl bg-white/90 p-6 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
          <div>
            <p className="text-sm text-slate-500">Dağılım</p>
            <h3 className="text-xl font-semibold">Kanal bazlı harcama</h3>
          </div>
          <div className="space-y-4">
            {breakdown.map((item) => (
              <div key={item.channel} className="space-y-2">
                <div className="flex items-center justify-between text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${item.color}`} />
                    {item.channel}
                  </div>
                  <span>{item.spend}%</span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 dark:bg-white/10">
                  <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.spend}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl bg-slate-50/80 p-4 text-sm dark:bg-white/5">
            <p className="font-semibold">Öne çıkan içgörü</p>
            <p className="text-slate-500">Meta kampanyaları haftalık ROAS'ta %12 artış yakaladı. Google tarafında optimizasyon öneriliyor.</p>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
