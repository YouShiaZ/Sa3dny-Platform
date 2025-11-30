import { useTranslation } from "react-i18next";
import { StatCard } from "../../components/common/StatCard";
import { analytics, orders, services } from "../../data/mockData";
import { LineChart, PieChart, Users, WalletCards } from "lucide-react";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const AdminDashboard = () => {
  const { t } = useTranslation();
  const revenueShare = Math.round(analytics.revenue * analytics.platformShare);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title={t("admin.analyticsTitle")} value={`${t("common.currency")} ${analytics.revenue.toLocaleString()}`} helper={`${t("admin.platformShare")}: ${t("common.currency")} ${revenueShare.toLocaleString()}`} icon={WalletCards} tone="admin" />
        <StatCard title={t("admin.ordersTitle")} value={orders.length} helper={t("status.inProgress")} icon={LineChart} tone="admin" />
        <StatCard title={t("admin.clientsTitle")} value="1.2K" helper={t("admin.activeClients")} icon={Users} tone="admin" />
        <StatCard title={t("admin.aiTitle")} value="86%" helper={t("admin.aiConfidence")} icon={PieChart} tone="admin" />
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="md:col-span-2 space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">{t("admin.finance")}</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-admin-primary/10 px-4 py-3 text-admin-primary">
              {t("admin.platformShare")}: 25%
            </div>
            <div className="rounded-2xl bg-admin-secondary/10 px-4 py-3 text-admin-secondary">
              {t("admin.workersShare")}: 75%
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {analytics.statusBreakdown.map((item) => (
              <div key={item.status} className="rounded-xl bg-slate-50 px-3 py-2 text-sm">
                <div className="font-semibold text-slate-800">{t(`status.${item.status}`)}</div>
                <div className="text-slate-500">{item.value} {t("admin.ordersTitle")}</div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">{t("admin.servicesTitle")}</h3>
          {analytics.mostRequested.map((svc) => (
            <div key={svc.name} className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-2">
              <div>
                <div className="font-semibold text-slate-900">
                  {t(`servicesDictionary.${services.find((s) => s.name === svc.name)?.id}`, { defaultValue: svc.name })}
                </div>
                <div className="text-xs text-slate-500">
                  {t("common.rating")}: {services.find((s) => s.name === svc.name)?.rating || 4.5}
                </div>
              </div>
              <Badge tone="admin">{svc.count}</Badge>
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};
