import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { orders, services, workers } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { Timeline } from "../../components/common/Timeline";
import { Button } from "../../components/common/Button";

const statusOptions = ["submitted", "awaitingPayment", "paymentConfirmed", "assigned", "inProgress", "completed", "cancelled"];

export const AdminOrderDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const order = orders.find((o) => o.id === id) || orders[0];
  const service = services.find((s) => s.id === order.serviceId);
  const [status, setStatus] = useState(order.status);
  const [assignedWorker, setAssignedWorker] = useState(order.workerId || workers[0].id);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{order.id}</h1>
          <p className="text-sm text-slate-600">{t(`servicesDictionary.${service?.id}`, { defaultValue: service?.name })}</p>
        </div>
        <Badge status={status}>{t(`status.${status}`)}</Badge>
      </div>
      <Card className="grid gap-4 md:grid-cols-3">
        <div>
          <div className="text-sm text-slate-500">{t("roles.client")}</div>
          <div className="font-semibold text-slate-900">{order.clientName}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">{t("forms.address")}</div>
          <div className="font-semibold text-slate-900">{order.address}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">{t("common.price")}</div>
          <div className="font-semibold text-slate-900">{t("common.currency")} {order.total}</div>
        </div>
      </Card>
      <Card className="grid gap-4 md:grid-cols-3">
        <div className="space-y-2">
          <div className="text-sm font-semibold text-slate-800">{t("common.status")}</div>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2"
          >
            {statusOptions.map((opt) => (
              <option key={opt} value={opt}>{t(`status.${opt}`)}</option>
            ))}
          </select>
          <Button tone="admin">{t("actions.save")}</Button>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold text-slate-800">{t("common.worker")}</div>
          <select
            value={assignedWorker}
            onChange={(e) => setAssignedWorker(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2"
          >
            {workers.map((w) => (
              <option key={w.id} value={w.id}>{w.name}</option>
            ))}
          </select>
          <Button tone="admin">{t("actions.assign")}</Button>
        </div>
        <div className="space-y-2">
          <div className="text-sm font-semibold text-slate-800">{t("common.details")}</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">{order.notes}</div>
        </div>
      </Card>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.timeline")}</h3>
        <Timeline steps={order.timeline} />
      </Card>
    </div>
  );
};
