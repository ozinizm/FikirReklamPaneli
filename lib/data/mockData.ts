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

export interface ChannelPulse {
  name: string;
  spend: string;
  change: string;
  progress: number;
}

export interface AutomationInsight {
  title: string;
  description: string;
  tag: string;
}

export interface OverviewStat {
  label: string;
  value: string;
}

export interface DashboardBundle {
  overview: OverviewStat[];
  metrics: Metric[];
  trendData: TrendPoint[];
  activityFeed: ActivityItem[];
  channelPulse: ChannelPulse[];
  automationInsights: AutomationInsight[];
  campaigns: CampaignRow[];
}

const metaMetrics: Metric[] = [
  { label: "Toplam Harcama", value: "$48,920", change: "+12.4%", trend: "up" },
  { label: "ROAS", value: "5.1x", change: "+0.6%", trend: "up" },
  { label: "CTR", value: "3.84%", change: "-0.3%", trend: "down" },
  { label: "Dönüşüm", value: "2,310", change: "+4.7%", trend: "up" },
  { label: "CPM", value: "$8.22", change: "-1.1%", trend: "down" }
];

const metaTrend: TrendPoint[] = [
  { date: "Pzt", spend: 28, roas: 4.1 },
  { date: "Sal", spend: 35, roas: 4.4 },
  { date: "Çar", spend: 31, roas: 4.7 },
  { date: "Per", spend: 38, roas: 5.4 },
  { date: "Cum", spend: 33, roas: 4.9 },
  { date: "Cmt", spend: 40, roas: 5.6 },
  { date: "Paz", spend: 44, roas: 5.1 }
];

const metaActivity: ActivityItem[] = [
  { id: 1, description: "Meta kampanyasında bütçe %10 artırıldı", timestamp: "2 saat önce", status: "completed" },
  { id: 2, description: "Lookalike segmenti yenilendi", timestamp: "5 saat önce", status: "completed" },
  { id: 3, description: "Yeni TikTok kreatifi onaya gönderildi", timestamp: "Dün", status: "pending" },
  { id: 4, description: "ROAS raporu dışa aktarıldı", timestamp: "2 gün önce", status: "completed" }
];

const metaChannelPulse: ChannelPulse[] = [
  { name: "Meta Ads", spend: "$18,200", change: "+8.2%", progress: 78 },
  { name: "Instagram Reels", spend: "$9,460", change: "+5.1%", progress: 64 },
  { name: "Audience Network", spend: "$6,870", change: "+12.8%", progress: 52 },
  { name: "Messenger", spend: "$4,110", change: "-2.3%", progress: 38 }
];

const metaInsights: AutomationInsight[] = [
  {
    title: "ROAS üstünde seyrediyor",
    description: "Perşembe optimizasyonundan sonra Meta kampanyası %12 yükseldi.",
    tag: "Insight"
  },
  {
    title: "Hazır rapor",
    description: "Paid social haftalık raporu ekip ile paylaşılmaya hazır.",
    tag: "Rapor"
  },
  {
    title: "Kreatif bekliyor",
    description: "Stories video serisi onay için müşteri yorumunu bekliyor.",
    tag: "Görev"
  }
];

const metaOverview: OverviewStat[] = [
  { label: "Aylık hedef", value: "$120K" },
  { label: "Canlı kampanya", value: "18" },
  { label: "Otomasyon", value: "6 aktif" }
];

const metaSnapshotCampaigns: CampaignRow[] = [
  { name: "Yeni Ürün Lansmanı", platform: "Meta", status: "active", spend: "$12,430", ctr: "4.2%", cpc: "$0.91", conversions: 420 },
  { name: "Retargeting", platform: "Meta", status: "active", spend: "$8,630", ctr: "5.1%", cpc: "$0.73", conversions: 510 },
  { name: "Video Awareness", platform: "Meta", status: "draft", spend: "$1,240", ctr: "1.9%", cpc: "$1.65", conversions: 34 }
];

const googleMetrics: Metric[] = [
  { label: "Toplam Harcama", value: "$54,380", change: "+6.3%", trend: "up" },
  { label: "ROAS", value: "4.4x", change: "-0.8%", trend: "down" },
  { label: "CTR", value: "6.12%", change: "+0.4%", trend: "up" },
  { label: "Dönüşüm", value: "3,120", change: "+2.1%", trend: "up" },
  { label: "CPM", value: "$11.04", change: "+0.7%", trend: "down" }
];

const googleTrend: TrendPoint[] = [
  { date: "Pzt", spend: 32, roas: 3.9 },
  { date: "Sal", spend: 37, roas: 4.2 },
  { date: "Çar", spend: 42, roas: 4.1 },
  { date: "Per", spend: 40, roas: 4.5 },
  { date: "Cum", spend: 44, roas: 4.2 },
  { date: "Cmt", spend: 48, roas: 4.7 },
  { date: "Paz", spend: 45, roas: 4.4 }
];

const googleActivity: ActivityItem[] = [
  { id: 1, description: "PMax kampanyasında bütçe 2K$ artırıldı", timestamp: "1 saat önce", status: "completed" },
  { id: 2, description: "Yeni sitelink uzantısı yayınlandı", timestamp: "3 saat önce", status: "completed" },
  { id: 3, description: "Akıllı teklif testi devam ediyor", timestamp: "Dün", status: "pending" },
  { id: 4, description: "Bütçe uyarısı Slack'e gönderildi", timestamp: "2 gün önce", status: "completed" }
];

const googleChannelPulse: ChannelPulse[] = [
  { name: "Search", spend: "$21,320", change: "+4.1%", progress: 71 },
  { name: "Performance Max", spend: "$17,860", change: "+9.8%", progress: 65 },
  { name: "Display", spend: "$9,640", change: "-1.3%", progress: 48 },
  { name: "YouTube", spend: "$5,560", change: "+3.4%", progress: 53 }
];

const googleInsights: AutomationInsight[] = [
  {
    title: "Search pacing normal",
    description: "CPA hedefinin %3 altında, bütçe artışı öneriliyor.",
    tag: "Alert"
  },
  {
    title: "PMax creative",
    description: "Yeni video asetleri yüklenirse tahmini ROAS %6 artar.",
    tag: "Tavsiye"
  },
  {
    title: "Feed sağlığı",
    description: "Merchant Center verisi güncel, ürün eşleşmesi %98.",
    tag: "Health"
  }
];

const googleOverview: OverviewStat[] = [
  { label: "Aylık hedef", value: "$150K" },
  { label: "Aktif kampanya", value: "24" },
  { label: "Otomasyon", value: "9 aktif" }
];

const googleSnapshotCampaigns: CampaignRow[] = [
  { name: "E-ticaret Performansı", platform: "Google", status: "active", spend: "$9,870", ctr: "3.7%", cpc: "$1.12", conversions: 305 },
  { name: "App Install", platform: "Google", status: "active", spend: "$7,910", ctr: "5.4%", cpc: "$0.88", conversions: 680 },
  { name: "Brand Max", platform: "Google", status: "paused", spend: "$3,210", ctr: "6.1%", cpc: "$0.65", conversions: 190 }
];

export const dashboardDataByPlatform: Record<"meta" | "google", DashboardBundle> = {
  meta: {
    overview: metaOverview,
    metrics: metaMetrics,
    trendData: metaTrend,
    activityFeed: metaActivity,
    channelPulse: metaChannelPulse,
    automationInsights: metaInsights,
    campaigns: metaSnapshotCampaigns,
  },
  google: {
    overview: googleOverview,
    metrics: googleMetrics,
    trendData: googleTrend,
    activityFeed: googleActivity,
    channelPulse: googleChannelPulse,
    automationInsights: googleInsights,
    campaigns: googleSnapshotCampaigns,
  },
};

export const metrics = metaMetrics;
export const trendData = metaTrend;
export const activityFeed = metaActivity;

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
