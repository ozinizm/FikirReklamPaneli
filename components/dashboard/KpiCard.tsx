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
    <div className="group rounded-3xl border border-white/5 bg-slate-900/40 p-6 text-white shadow-card transition duration-300 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-white/50">{metric.label}</p>
          <p className="mt-3 text-3xl font-semibold">{metric.value}</p>
        </div>
        <div
          className={clsx(
            "flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white",
            isPositive ? "from-emerald-400/30 to-emerald-500/40" : "from-rose-400/30 to-rose-500/40"
          )}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d={arrowPath[metric.trend]} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm">
        <span
          className={clsx(
            "rounded-full px-3 py-1 text-xs font-semibold",
            isPositive ? "bg-emerald-500/10 text-emerald-300" : "bg-rose-500/10 text-rose-200"
          )}
        >
          {metric.change}
        </span>
        <span className="text-xs text-white/60">son 7 gün</span>
      </div>
      <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
        <div
          className={clsx("h-full rounded-full", isPositive ? "bg-emerald-400" : "bg-rose-400")}
          style={{ width: isPositive ? "80%" : "55%" }}
        />
      </div>
    </div>
  );
}
