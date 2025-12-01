import { useTranslation } from "react-i18next";
import { StatCard } from "../../components/common/StatCard";
import { OrderCard } from "../../components/common/OrderCard";
import { orders, services } from "../../data/mockData";
import { Sparkles, Clock3, CheckCircle2 } from "lucide-react";
import { Card } from "../../components/common/Card";

export const ClientDashboard = () => {
  const { t } = useTranslation();
  const latestOrders = orders.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title={t("client.dashboardTitle")} value={`${t("common.currency")} 1,330`} helper={t("status.inProgress")} icon={Sparkles} tone="user" />
        <StatCard title={t("client.ordersTitle")} value={orders.length} helper={t("status.assigned")} icon={Clock3} tone="user" />
        <StatCard title={t("client.reviewsTitle")} value="4.7 ★" helper={t("common.rating")} icon={CheckCircle2} tone="user" />
      </div>

      <Card className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-slate-900">{t("common.latestOrders")}</h3>
          <a href="/client/orders" className="text-sm font-semibold text-user-primary">
            {t("actions.viewAll")}
          </a>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {latestOrders.map((order) => {
            const svc = services.find((s) => s.id === order.serviceId);
            return (
              <OrderCard
                key={order.id}
                order={order}
                serviceName={t(`servicesDictionary.${svc?.id}`, { defaultValue: svc?.name })}
                workerName="-"
                tone="user"
              />
            );
          })}
        </div>
      </Card>
    </div>
  );
};
