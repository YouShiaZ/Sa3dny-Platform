import { useTranslation } from "react-i18next";
import { orders, services, workers } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";

export const SupportWhatsAppTemplates = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">{t("support.whatsappTitle")}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {orders.map((order) => {
          const service = services.find((s) => s.id === order.serviceId);
          const worker = workers.find((w) => w.id === order.workerId) || workers[0];
          const text = `🔸 ${t("support.jobSheet")} - ${t("app.nameEn")}
${t("admin.ordersTitle")}: ${order.id}
${t("roles.client")}: ${order.clientName}
${t("forms.service")}: ${t(`servicesDictionary.${service?.id}`, { defaultValue: service?.name })}
${t("forms.address")}: ${order.address}
${t("forms.date")}: ${order.date}
${t("forms.notes")}: ${order.notes}
${t("common.worker")}: ${worker.name}`;
          return (
            <Card key={order.id} className="space-y-2">
              <div className="font-semibold text-slate-900">{order.id}</div>
              <pre className="whitespace-pre-wrap rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">{text}</pre>
              <Button tone="support" onClick={() => navigator.clipboard.writeText(text)}>
                {t("actions.copy")}
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
