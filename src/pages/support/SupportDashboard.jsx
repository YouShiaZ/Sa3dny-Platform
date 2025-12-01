import { useTranslation } from "react-i18next";
import { orders } from "../../data/mockData";
import { StatCard } from "../../components/common/StatCard";
import { ClipboardList, Clock3, CheckCircle2 } from "lucide-react";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const SupportDashboard = () => {
  const { t } = useTranslation();
  const awaiting = orders.filter((o) => o.status === "awaitingPayment");
  const inProgress = orders.filter((o) => ["assigned", "inProgress"].includes(o.status));

  return (
    <div className="space-y-4">
      <div className="grid gap-4 md:grid-cols-3">
        <StatCard title={t("support.ordersTitle")} value={orders.length} helper={t("status.submitted")} icon={ClipboardList} tone="support" />
        <StatCard title={t("status.awaitingPayment")} value={awaiting.length} helper="Instapay" icon={Clock3} tone="support" />
        <StatCard title={t("status.inProgress")} value={inProgress.length} helper={t("support.activeVisits")} icon={CheckCircle2} tone="support" />
      </div>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("support.ordersTitle")}</h3>
        {orders.slice(0, 5).map((order) => (
          <div key={order.id} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-inner">
            <div>
              <div className="font-semibold text-slate-900">{order.id}</div>
              <div className="text-xs text-slate-500">
                {t(`orders.${order.id}.address`, { defaultValue: order.address })}
              </div>
            </div>
            <Badge status={order.status}>{t(`status.${order.status}`)}</Badge>
          </div>
        ))}
      </Card>
    </div>
  );
};
