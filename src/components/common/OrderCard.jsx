import { Calendar, MapPin, CreditCard, User } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { useTranslation } from "react-i18next";

export const OrderCard = ({ order, serviceName, workerName, tone = "user" }) => {
  const { t } = useTranslation();
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-slate-500">{t("common.status")}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-900">{order.id}</span>
            <Badge status={order.status}>{t(`status.${order.status}`)}</Badge>
          </div>
        </div>
        <div className="text-right text-sm text-slate-600">
          <div className="font-semibold">{serviceName}</div>
          <div className="text-slate-500">{order.clientName}</div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-3 text-sm text-slate-700 md:grid-cols-3">
        <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
          <Calendar size={16} /> {order.date}
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
          <MapPin size={16} /> {order.address}
        </div>
        <div className="inline-flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2">
          <CreditCard size={16} /> {t(`forms.${order.paymentMethod === "online" ? "onlinePayment" : "instapay"}`)}
        </div>
      </div>
      <div className="flex items-center justify-between text-sm text-slate-700">
        <div className="inline-flex items-center gap-2">
          <User size={16} className="text-slate-500" />
          <span>{workerName || t("common.worker") + ": -"}</span>
        </div>
        <div className="text-lg font-bold text-slate-900">
          {t("common.currency")} {order.total}
        </div>
      </div>
    </Card>
  );
};
