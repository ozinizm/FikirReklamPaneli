import AppShell from "@/components/layout/AppShell";
import KpiCard from "@/components/dashboard/KpiCard";
import PerformanceChart from "@/components/dashboard/PerformanceChart";
import CampaignTable from "@/components/campaigns/CampaignTable";
import { activityFeed, campaigns, metrics, trendData } from "@/lib/data/mockData";

const channelPulse = [
  { name: "Meta Ads", spend: "$18,200", change: "+8.2%", progress: 78 },
  { name: "Google Ads", spend: "$15,460", change: "+5.1%", progress: 64 },
  { name: "TikTok Spark", spend: "$6,870", change: "+12.8%", progress: 52 },
  { name: "LinkedIn", spend: "$4,110", change: "-2.3%", progress: 38 }
];

const automationInsights = [
  {
    title: "ROAS üstünde seyrediyor",
    description: "Perşembe optimizasyonundan sonra Meta kampanyası %12 yükseldi.",
    tag: "Insight"
  },
  {
    title: "Hazır rapor",
    description: "Google Ads haftalık raporu ekip ile paylaşılmaya hazır.",
    tag: "Rapor"
  },
  {
    title: "Kreatif bekliyor",
    description: "TikTok video serisi onay için müşteri yorumunu bekliyor.",
    tag: "Görev"
  }
];

export default function DashboardPage() {
  return (
    <AppShell subtitle="Gerçek zamanlı performans izleme ve otomasyon önerileri.">
      <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-brand-700 via-brand-500 to-slate-900 p-8 text-white shadow-card">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
          <div className="flex-1">
            <p className="text-sm uppercase tracking-[0.5em] text-white/70">Dashboard Hero</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">Bütün reklam evreniniz tek panelde senkron.</h2>
            <p className="mt-4 text-base text-white/80">
              Kanallar arası bütçe, dönüşüm ve yaratıcı performansını tek bakışta görün. Otomasyon önerileri ile bütçeyi doğru yere yönlendirin.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="rounded-full bg-white/95 px-6 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
                Kampanya başlat
              </button>
              <button className="rounded-full border border-white/50 px-6 py-2.5 text-sm font-semibold text-white/90 transition hover:border-white">
                Rapor planla
              </button>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3">
            {[
              { label: "Aylık hedef", value: "$120K" },
              { label: "Canlı kampanya", value: "18" },
              { label: "Otomasyon", value: "6 aktif" }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/20 bg-white/10 p-4 text-center backdrop-blur">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {metrics.map((metric) => (
          <KpiCard key={metric.label} metric={metric} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <PerformanceChart data={trendData} />
        </div>
        <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6 text-white shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">Aktivite</p>
              <h3 className="mt-2 text-2xl font-semibold">Son işlemler</h3>
            </div>
            <button className="text-sm font-semibold text-brand-200 transition hover:text-white">Tümünü gör</button>
          </div>
          <ul className="mt-6 space-y-5">
            {activityFeed.map((activity) => (
              <li key={activity.id} className="flex items-start gap-4">
                <span
                  className={`mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-base font-semibold ${
                    activity.status === "completed" ? "bg-emerald-500/15 text-emerald-200" : "bg-amber-500/15 text-amber-200"
                  }`}
                >
                  {activity.status === "completed" ? "✓" : "!"}
                </span>
                <div>
                  <p className="font-semibold">{activity.description}</p>
                  <p className="text-xs text-white/60">{activity.timestamp}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6 text-white shadow-card lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">Kanallar</p>
              <h3 className="mt-2 text-2xl font-semibold">Sağlık durumu</h3>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">Güncellendi 5 dk önce</span>
          </div>
          <div className="mt-6 space-y-4">
            {channelPulse.map((channel) => (
              <div key={channel.name} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <p className="text-white/70">{channel.name}</p>
                    <p className="text-lg font-semibold">{channel.spend}</p>
                  </div>
                  <span className={`text-xs font-semibold ${channel.change.startsWith("-") ? "text-rose-200" : "text-emerald-200"}`}>
                    {channel.change}
                  </span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className={`h-full rounded-full ${channel.change.startsWith("-") ? "bg-rose-400" : "bg-brand-400"}`}
                    style={{ width: `${channel.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6 text-white shadow-card">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/50">Asistan</p>
              <h3 className="mt-2 text-2xl font-semibold">Otomasyon notları</h3>
            </div>
            <span className="text-xs text-white/60">AI destekli</span>
          </div>
          <div className="mt-6 space-y-5">
            {automationInsights.map((insight) => (
              <div key={insight.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-200">{insight.tag}</span>
                <p className="mt-2 text-lg font-semibold">{insight.title}</p>
                <p className="mt-2 text-sm text-white/70">{insight.description}</p>
                <button className="mt-4 text-sm font-semibold text-brand-200 transition hover:text-white">Detayı aç</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-white/50">Kampanyalar</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">Son hareketler</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white/80 transition hover:border-white/30">
              Filtrele
            </button>
            <button className="rounded-full bg-brand-500 px-5 py-2 text-sm font-semibold text-white shadow-brand-900/30 transition hover:-translate-y-0.5">
              Dışa aktar
            </button>
          </div>
        </div>
        <CampaignTable data={campaigns} compact />
      </section>
    </AppShell>
  );
}
