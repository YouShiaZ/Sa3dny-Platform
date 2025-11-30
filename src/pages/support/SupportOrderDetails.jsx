import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { orders, workers, services } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { Timeline } from "../../components/common/Timeline";
import { Button } from "../../components/common/Button";
import { Modal } from "../../components/common/Modal";

export const SupportOrderDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const order = orders.find((o) => o.id === id) || orders[0];
  const [workerId, setWorkerId] = useState(order.workerId || workers[0].id);
  const [open, setOpen] = useState(false);
  const service = services.find((s) => s.id === order.serviceId);
  const jobSheet = `${t("support.jobSheet")} - ${t("app.nameEn")}
${t("admin.ordersTitle")}: ${order.id}
${t("roles.client")}: ${order.clientName}
${t("forms.service")}: ${t(`servicesDictionary.${service?.id}`, { defaultValue: service?.name })}
${t("forms.address")}: ${order.address}
${t("forms.notes")}: ${order.notes}
${t("actions.assign")}: ${workers.find((w) => w.id === workerId)?.name}
${t("common.status")}: ${t(`status.${order.status}`)}`;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{order.id}</h1>
          <p className="text-sm text-slate-600">{order.clientName}</p>
        </div>
        <Badge status={order.status}>{t(`status.${order.status}`)}</Badge>
      </div>
      <Card className="grid gap-4 md:grid-cols-3">
        <div>
          <div className="text-sm text-slate-500">{t("forms.paymentMethod")}</div>
          <div className="font-semibold text-slate-900">{t(`forms.${order.paymentMethod === "online" ? "onlinePayment" : "instapay"}`)}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">{t("forms.address")}</div>
          <div className="font-semibold text-slate-900">{order.address}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">{t("common.worker")}</div>
          <select
            value={workerId}
            onChange={(e) => setWorkerId(e.target.value)}
            className="rounded-xl border border-slate-200 px-3 py-2"
          >
            {workers.map((w) => (
              <option key={w.id} value={w.id}>{w.name}</option>
            ))}
          </select>
          <Button tone="support" className="mt-2">{t("actions.assign")}</Button>
        </div>
      </Card>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.timeline")}</h3>
        <Timeline steps={order.timeline} />
      </Card>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("support.jobSheet")}</h3>
        <Button tone="support" onClick={() => setOpen(true)}>
          {t("actions.copy")}
        </Button>
      </Card>
      <Modal open={open} onClose={() => setOpen(false)} title={t("support.jobSheet")}>
        <pre className="whitespace-pre-wrap text-sm text-slate-800">{jobSheet}</pre>
        <Button tone="support" className="mt-3" onClick={() => navigator.clipboard.writeText(jobSheet)}>
          {t("actions.copy")}
        </Button>
      </Modal>
    </div>
  );
};
