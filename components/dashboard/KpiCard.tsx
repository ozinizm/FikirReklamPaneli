import { Metric } from "@/lib/data/mockData";
import clsx from "clsx";

interface KpiCardProps {
  metric: Metric;
}

const arrowPath = {
  up: "M12 5v14m0-14 5 5m-5-5-5 5",
  down: "M12 19V5m0 14 5-5m-5 5-5-5"
};

export default function KpiCard({ metric }: KpiCardProps) {
  const isPositive = metric.trend === "up";
  return (
    <div className="rounded-3xl bg-white/90 p-6 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">{metric.label}</p>
          <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
        </div>
        <div className={clsx("flex h-12 w-12 items-center justify-center rounded-2xl", isPositive ? "bg-primary/10 text-primary" : "bg-red-100 text-red-500 dark:bg-red-500/10")}> 
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={arrowPath[metric.trend]} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
        <span className={clsx(isPositive ? "text-emerald-500" : "text-red-500")}>{metric.change}</span>
        <span>son 7 gün</span>
      </div>
    </div>
  );
}
