import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { orders, services } from "../../data/mockData";
import { OrderCard } from "../../components/common/OrderCard";
import { Card } from "../../components/common/Card";

export const ClientOrders = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{t("client.ordersTitle")}</h1>
        <Link to="/services" className="text-sm font-semibold text-user-primary">
          {t("actions.bookService")}
        </Link>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {orders.map((order) => {
          const svc = services.find((s) => s.id === order.serviceId);
          return (
            <Link key={order.id} to={`/client/orders/${order.id}`}>
              <OrderCard
                order={order}
                serviceName={t(`servicesDictionary.${svc?.id}`, { defaultValue: svc?.name })}
                workerName="-"
              />
            </Link>
          );
        })}
      </div>
      <Card className="text-sm text-slate-600">
        {t("client.timeline")}: {t("status.submitted")} → {t("status.awaitingPayment")} → {t("status.paymentConfirmed")} → {t("status.assigned")} → {t("status.inProgress")} → {t("status.completed")}
      </Card>
    </div>
  );
};
