import { TrendPoint } from "@/lib/data/mockData";

interface PerformanceChartProps {
  data: TrendPoint[];
}

export default function PerformanceChart({ data }: PerformanceChartProps) {
  const maxSpend = Math.max(...data.map((point) => point.spend));
  const spendPath = data
    .map((point, idx) => {
      const x = (idx / (data.length - 1)) * 100;
      const y = 100 - (point.spend / maxSpend) * 70 - 15;
      return `${idx === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  const areaPath = `${spendPath} L100,100 L0,100 Z`;

  return (
    <div className="rounded-3xl border border-white/5 bg-slate-900/40 p-6 text-white shadow-card">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-white/50">Aktivite grafiği</p>
          <p className="mt-2 text-2xl font-semibold">Harcama nabzı</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-white/60">
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-6 rounded-full bg-brand-400" /> Harcama
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-6 rounded-full bg-emerald-300" /> ROAS
          </span>
        </div>
      </div>
      <svg viewBox="0 0 100 100" className="mt-6 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="spendGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#9182ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#9182ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gridGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
          </linearGradient>
        </defs>
        {[0, 25, 50, 75, 100].map((y) => (
          <line key={y} x1="0" x2="100" y1={y} y2={y} stroke="url(#gridGradient)" strokeWidth="0.2" />
        ))}
        <path d={areaPath} fill="url(#spendGradient)" stroke="none" />
        <path d={spendPath} fill="none" stroke="#9182ff" strokeWidth="1.5" strokeLinecap="round" />
        {data.map((point, idx) => {
          const x = (idx / (data.length - 1)) * 100;
          const y = 100 - (point.roas / 6) * 70 - 15;
          return <circle key={point.date} cx={x} cy={y} r={1.2} fill="#6ee7b7" />;
        })}
      </svg>
      <div className="mt-5 grid grid-cols-7 gap-2 text-center text-xs text-white/60">
        {data.map((point) => (
          <span key={point.date}>{point.date}</span>
        ))}
      </div>
    </div>
  );
}
