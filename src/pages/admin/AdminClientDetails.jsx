import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { clients, orders } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const AdminClientDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const client = clients.find((c) => c.id === id) || clients[0];
  const clientOrders = orders.filter((o) => o.clientName === client.name);

  return (
    <div className="space-y-4">
      <Card className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">{client.name}</h1>
          <Badge tone="admin">{t("admin.clientsTitle")}</Badge>
        </div>
        <div className="text-sm text-slate-600">{client.email}</div>
        <div className="text-sm text-slate-600">{client.phone}</div>
      </Card>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.addressesTitle")}</h3>
        {client.addresses.map((addr, idx) => (
          <div key={idx} className="rounded-xl bg-slate-50 px-3 py-2 text-sm">
            <div className="font-semibold text-slate-900">{addr.label}</div>
            <div className="text-slate-600">{addr.location}</div>
            <div className="text-xs text-slate-500">{addr.notes}</div>
          </div>
        ))}
      </Card>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("admin.ordersTitle")}</h3>
        {clientOrders.map((order) => (
          <div key={order.id} className="flex items-center justify-between rounded-xl bg-white px-3 py-2 shadow-inner">
            <div>
              <div className="font-semibold text-slate-900">{order.id}</div>
              <div className="text-sm text-slate-600">{order.address}</div>
            </div>
            <Badge status={order.status}>{t(`status.${order.status}`)}</Badge>
          </div>
        ))}
      </Card>
    </div>
  );
};
