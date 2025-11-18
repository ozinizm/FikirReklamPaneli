export interface Metric {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
}

export interface TrendPoint {
  date: string;
  spend: number;
  roas: number;
}

export interface CampaignRow {
  name: string;
  platform: "Meta" | "Google" | "TikTok" | "LinkedIn";
  status: "active" | "paused" | "draft";
  spend: string;
  ctr: string;
  cpc: string;
  conversions: number;
}

export interface CreativeAsset {
  id: number;
  title: string;
  format: string;
  platform: string;
  thumbnail: string;
}

export interface ActivityItem {
  id: number;
  description: string;
  timestamp: string;
  status: "completed" | "pending";
}

export const metrics: Metric[] = [
  { label: "Toplam Harcama", value: "$48,920", change: "+12.4%", trend: "up" },
  { label: "ROAS", value: "5.1x", change: "+0.6%", trend: "up" },
  { label: "CTR", value: "3.84%", change: "-0.3%", trend: "down" },
  { label: "Dönüşüm", value: "2,310", change: "+4.7%", trend: "up" },
  { label: "CPM", value: "$8.22", change: "-1.1%", trend: "down" }
];

export const trendData: TrendPoint[] = [
  { date: "Pzt", spend: 28, roas: 4.1 },
  { date: "Sal", spend: 35, roas: 4.4 },
  { date: "Çar", spend: 31, roas: 4.7 },
  { date: "Per", spend: 38, roas: 5.4 },
  { date: "Cum", spend: 33, roas: 4.9 },
  { date: "Cmt", spend: 40, roas: 5.6 },
  { date: "Paz", spend: 44, roas: 5.1 }
];

export const campaigns: CampaignRow[] = [
  { name: "Yeni Ürün Lansmanı", platform: "Meta", status: "active", spend: "$12,430", ctr: "4.2%", cpc: "$0.91", conversions: 420 },
  { name: "E-ticaret Performansı", platform: "Google", status: "active", spend: "$9,870", ctr: "3.7%", cpc: "$1.12", conversions: 305 },
  { name: "Marka Farkındalık", platform: "LinkedIn", status: "paused", spend: "$4,210", ctr: "2.8%", cpc: "$2.41", conversions: 92 },
  { name: "Retargeting", platform: "Meta", status: "active", spend: "$8,630", ctr: "5.1%", cpc: "$0.73", conversions: 510 },
  { name: "Video Awareness", platform: "TikTok", status: "draft", spend: "$1,240", ctr: "1.9%", cpc: "$1.65", conversions: 34 }
];

export const creatives: CreativeAsset[] = [
  { id: 1, title: "Yaz Koleksiyonu 01", format: "Video 15sn", platform: "Meta", thumbnail: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "App Install Banner", format: "1080x1080", platform: "Google", thumbnail: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "Performans Carousel", format: "4 kart", platform: "Meta", thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80" },
  { id: 4, title: "LinkedIn Thought Leadership", format: "1200x627", platform: "LinkedIn", thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80" },
  { id: 5, title: "TikTok Story", format: "9:16", platform: "TikTok", thumbnail: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80" },
  { id: 6, title: "Reel Koleksiyonu", format: "Video 30sn", platform: "Meta", thumbnail: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=400&q=80" }
];

export const activityFeed: ActivityItem[] = [
  { id: 1, description: "Meta kampanyasında bütçe %10 artırıldı", timestamp: "2 saat önce", status: "completed" },
  { id: 2, description: "Google Ads dönüşüm optimizasyonu aktif edildi", timestamp: "5 saat önce", status: "completed" },
  { id: 3, description: "Yeni TikTok kreatifi onaya gönderildi", timestamp: "Dün", status: "pending" },
  { id: 4, description: "ROAS raporu dışa aktarıldı", timestamp: "2 gün önce", status: "completed" }
];
