import { CreativeAsset } from "@/lib/data/mockData";

interface CreativeGridProps {
  data: CreativeAsset[];
}

export default function CreativeGrid({ data }: CreativeGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {data.map((asset) => (
        <article key={asset.id} className="group rounded-3xl bg-white/90 p-4 shadow-card ring-1 ring-slate-200/60 transition hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-900/80 dark:ring-white/5">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="aspect-video w-full bg-slate-200" style={{ backgroundImage: `url(${asset.thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" }} />
            <span className="absolute right-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">{asset.platform}</span>
          </div>
          <div className="mt-4 space-y-2">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{asset.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{asset.format}</p>
            <button className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Detayları görüntüle
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}
