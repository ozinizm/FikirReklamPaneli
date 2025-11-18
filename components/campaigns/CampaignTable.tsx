import { CampaignRow } from "@/lib/data/mockData";
import clsx from "clsx";

interface CampaignTableProps {
  data: CampaignRow[];
  compact?: boolean;
}

const platformColors: Record<CampaignRow["platform"], string> = {
  Meta: "bg-blue-100 text-blue-600 dark:bg-blue-500/10 dark:text-blue-300",
  Google: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  TikTok: "bg-fuchsia-100 text-fuchsia-600 dark:bg-fuchsia-500/10 dark:text-fuchsia-300",
  LinkedIn: "bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-300"
};

const statusStyles: Record<CampaignRow["status"], string> = {
  active: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-300",
  paused: "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-300",
  draft: "bg-slate-100 text-slate-500 dark:bg-slate-700 dark:text-slate-200"
};

export default function CampaignTable({ data, compact = false }: CampaignTableProps) {
  return (
    <div className="overflow-x-auto rounded-3xl bg-white/90 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
      <table className="min-w-full divide-y divide-slate-100 text-left text-sm dark:divide-white/5">
        <thead>
          <tr>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Kampanya</th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Platform</th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Durum</th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Harcama</th>
            {!compact && (
              <>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">CTR</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">CPC</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Dönüşüm</th>
              </>
            )}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-white/5">
          {data.map((row) => (
            <tr key={row.name} className="hover:bg-slate-50/80 dark:hover:bg-white/5">
              <td className="px-6 py-4 text-sm font-semibold text-slate-900 dark:text-white">{row.name}</td>
              <td className="px-6 py-4">
                <span className={clsx("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold", platformColors[row.platform])}>{row.platform}</span>
              </td>
              <td className="px-6 py-4">
                <span className={clsx("inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold", statusStyles[row.status])}>{row.status === "active" ? "Aktif" : row.status === "paused" ? "Beklemede" : "Taslak"}</span>
              </td>
              <td className="px-6 py-4 font-semibold">{row.spend}</td>
              {!compact && (
                <>
                  <td className="px-6 py-4">{row.ctr}</td>
                  <td className="px-6 py-4">{row.cpc}</td>
                  <td className="px-6 py-4">{row.conversions}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
