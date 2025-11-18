# Fikir Reklam Paneli

Next.js 14 + TypeScript + Tailwind CSS uygulaması ile statik reklam paneli ekranları yeniden inşa edildi.

## Ekranlar
- `/` – Ana panel (kpi kartları, grafikler, aktivite akışı)
- `/campaigns` – Kampanya listesi
- `/analytics` – Analizler
- `/creatives` – Creative kütüphanesi
- `/settings` – Ayarlar ve workspace tercihleri
- `/login` – Giriş ekranı

## Geliştirme
```bash
npm install
npm run dev
```

Arayüz, `components/` klasöründeki yeniden kullanılabilir parçalar ve `lib/data/mockData.ts` içerisindeki sahte veriler ile yönetilir.
