export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-slate-100 to-background-light px-4 py-12 dark:from-slate-900 dark:to-background-dark">
      <div className="w-full max-w-md rounded-3xl bg-white/95 p-8 shadow-card ring-1 ring-slate-200/60 dark:bg-slate-900/80 dark:ring-white/10">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 12h16M4 12c0-4.418 3.582-8 8-8 1.3 0 2.53.31 3.61.86M4 12c0 4.418 3.582 8 8 8 1.3 0 2.53-.31 3.61-.86" strokeLinecap="round" />
              <path d="M20 12c0-2.761-2.239-5-5-5-1.657 0-3 1.343-3 3v7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">Panele giriş yap</h1>
          <p className="text-sm text-slate-500">Reklam kampanyalarınızı yönetmeye devam edin.</p>
        </div>
        <form className="space-y-4">
          <label className="block text-sm">
            <span className="text-slate-500">E-posta</span>
            <input type="email" placeholder="sen@fikir.co" className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-slate-900" />
          </label>
          <label className="block text-sm">
            <span className="text-slate-500">Şifre</span>
            <input type="password" placeholder="••••••••" className="mt-1 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 focus:border-primary focus:outline-none dark:border-white/10 dark:bg-slate-900" />
          </label>
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
              <span>Beni hatırla</span>
            </label>
            <button type="button" className="text-primary">Şifreyi unuttum</button>
          </div>
          <button type="submit" className="w-full rounded-full bg-primary py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-primary/30">
            Giriş yap
          </button>
        </form>
        <p className="mt-6 text-center text-xs text-slate-400">Google & Meta API bağlantısı bu ekrandan sonra yapılacak.</p>
      </div>
    </div>
  );
}
