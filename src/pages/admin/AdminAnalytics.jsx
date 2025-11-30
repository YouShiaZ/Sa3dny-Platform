import { useTranslation } from "react-i18next";
import { analytics } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const AdminAnalytics = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("admin.analyticsTitle")}</h1>
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="space-y-2">
          <div className="text-sm text-slate-500">{t("common.price")}</div>
          <div className="text-3xl font-bold text-slate-900">{t("common.currency")} {analytics.revenue.toLocaleString()}</div>
          <Badge tone="admin">{t("admin.platformShare")}: 25%</Badge>
        </Card>
        <Card className="space-y-2">
          <div className="text-sm text-slate-500">{t("status.completed")}</div>
          <div className="text-3xl font-bold text-slate-900">260</div>
          <Badge tone="admin">{t("status.inProgress")}: 21</Badge>
        </Card>
        <Card className="space-y-2">
          <div className="text-sm text-slate-500">{t("support.reviewsTitle")}</div>
          <div className="text-3xl font-bold text-slate-900">4.7 /5</div>
          <Badge tone="admin">{t("home.satisfaction")}: 93%</Badge>
        </Card>
      </div>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{t("admin.analyticsTitle")}</h3>
        <div className="grid gap-3 md:grid-cols-3">
          {analytics.statusBreakdown.map((item) => (
            <div key={item.status} className="rounded-xl bg-slate-50 px-3 py-2">
              <div className="text-sm font-semibold text-slate-800">{t(`status.${item.status}`)}</div>
              <div className="text-slate-500">{item.value} {t("admin.ordersTitle")}</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
