export default function SettingsForm() {
  return (
    <form className="space-y-6 rounded-3xl bg-white/90 p-8 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/5">
      <div>
        <h2 className="text-xl font-semibold">Çalışma alanı</h2>
        <p className="text-sm text-slate-500">Bildirimler, bütçe uyarıları ve entegrasyonlarınızı yönetin.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <label className="space-y-2 text-sm">
          <span className="text-slate-500">Şirket adı</span>
          <input type="text" placeholder="Fikir Reklam" className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-base shadow-inner focus:border-primary focus:outline-none dark:border-white/10 dark:bg-slate-900/60" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-slate-500">İletişim e-postası</span>
          <input type="email" placeholder="destek@fikirreklam.co" className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-base shadow-inner focus:border-primary focus:outline-none dark:border-white/10 dark:bg-slate-900/60" />
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-slate-500">Aylık harcama limiti</span>
          <select className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-base focus:border-primary focus:outline-none dark:border-white/10 dark:bg-slate-900/60">
            <option>50.000 ₺</option>
            <option>100.000 ₺</option>
            <option>250.000 ₺</option>
          </select>
        </label>
        <label className="space-y-2 text-sm">
          <span className="text-slate-500">Varsayılan platform</span>
          <select className="w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-base focus:border-primary focus:outline-none dark:border-white/10 dark:bg-slate-900/60">
            <option>Meta Ads</option>
            <option>Google Ads</option>
            <option>TikTok</option>
          </select>
        </label>
      </div>
      <div className="space-y-3 rounded-2xl bg-slate-50/80 p-4 dark:bg-white/5">
        <label className="flex items-center justify-between text-sm font-medium">
          <div>
            <p>Haftalık rapor e-postası</p>
            <span className="text-xs text-slate-500">Her pazartesi gönderilir</span>
          </div>
          <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" defaultChecked />
        </label>
        <label className="flex items-center justify-between text-sm font-medium">
          <div>
            <p>Bütçe aşımlarında push bildirimi</p>
            <span className="text-xs text-slate-500">Mobil uygulamaya gönderilir</span>
          </div>
          <input type="checkbox" className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary" />
        </label>
      </div>
      <div className="flex flex-wrap justify-end gap-3">
        <button type="button" className="rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300">
          Vazgeç
        </button>
        <button type="submit" className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30">
          Ayarları kaydet
        </button>
      </div>
    </form>
  );
}
