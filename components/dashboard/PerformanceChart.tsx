import { TrendPoint } from "@/lib/data/mockData";

interface PerformanceChartProps {
  data: TrendPoint[];
}

export default function PerformanceChart({ data }: PerformanceChartProps) {
  const maxSpend = Math.max(...data.map((point) => point.spend));
  const spendPath = data
    .map((point, idx) => {
      const x = (idx / (data.length - 1)) * 100;
      const y = 100 - (point.spend / maxSpend) * 80 - 10;
      return `${idx === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  const gradientArea = `${spendPath} L100,100 L0,100 Z`;

  return (
    <div className="rounded-3xl bg-white/90 p-6 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500">Haftalık performans</p>
          <p className="text-2xl font-semibold">Harcamalar & ROAS</p>
        </div>
        <div className="flex gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="h-2 w-2 rounded-full bg-primary" /> Harcama
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-400" /> ROAS
          </div>
        </div>
      </div>
      <svg viewBox="0 0 100 100" className="mt-6 w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="spendGradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#0a78ff" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0a78ff" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={gradientArea} fill="url(#spendGradient)" stroke="none" />
        <path d={spendPath} fill="none" stroke="#0a78ff" strokeWidth="1.5" strokeLinecap="round" />
        {data.map((point, idx) => {
          const x = (idx / (data.length - 1)) * 100;
          const y = 100 - (point.roas / 6) * 80 - 10;
          return <circle key={point.date} cx={x} cy={y} r={0.9} fill="#34d399" />;
        })}
      </svg>
      <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
        {data.map((point) => (
          <span key={point.date}>{point.date}</span>
        ))}
      </div>
    </div>
  );
}
