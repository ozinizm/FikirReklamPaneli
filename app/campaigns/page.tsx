import AppShell from "@/components/layout/AppShell";
import CampaignTable from "@/components/campaigns/CampaignTable";
import { campaigns } from "@/lib/data/mockData";

const filters = ["Tümü", "Aktif", "Beklemede", "Taslak"];

export default function CampaignsPage() {
  return (
    <AppShell subtitle="Tüm kampanyalarınızı statüye göre filtreleyin.">
      <section className="space-y-6 rounded-3xl bg-white/90 p-6 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Kampanya listesi</p>
            <h2 className="text-2xl font-semibold">Kanallar arası görünüm</h2>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:text-slate-200">
              Filtreler
            </button>
            <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30">Yeni kampanya</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          {filters.map((filter, index) => (
            <button key={filter} className={`rounded-full px-4 py-2 ${index === 0 ? "bg-primary text-white shadow" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200"}`}>
              {filter}
            </button>
          ))}
        </div>
        <CampaignTable data={campaigns} />
      </section>
    </AppShell>
  );
}
