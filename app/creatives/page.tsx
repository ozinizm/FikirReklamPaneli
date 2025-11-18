import AppShell from "@/components/layout/AppShell";
import CreativeGrid from "@/components/creatives/CreativeGrid";
import { creatives } from "@/lib/data/mockData";

export default function CreativesPage() {
  return (
    <AppShell subtitle="Tüm görsel ve video varlıklarınızı tek kütüphanede yönetin.">
      <section className="space-y-6 rounded-3xl bg-white/90 p-6 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Creative kütüphanesi</p>
            <h2 className="text-2xl font-semibold">Sürükle-bırak hazır</h2>
          </div>
          <div className="flex gap-3">
            <button className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:text-slate-200">Filtrele</button>
            <button className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30">Yeni creative</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          {["Tümü", "Video", "Görüntü", "Carousel"].map((chip, index) => (
            <button key={chip} className={`rounded-full px-4 py-2 font-medium ${index === 0 ? "bg-primary text-white" : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-200"}`}>
              {chip}
            </button>
          ))}
        </div>
        <CreativeGrid data={creatives} />
      </section>
    </AppShell>
  );
}
