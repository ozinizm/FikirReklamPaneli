import AppShell from "@/components/layout/AppShell";
import SettingsForm from "@/components/settings/SettingsForm";

export default function SettingsPage() {
  return (
    <AppShell subtitle="Bütçe, bildirim ve entegrasyon tercihlerinizi düzenleyin.">
      <SettingsForm />
    </AppShell>
  );
}
