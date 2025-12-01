import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { orders, services } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Timeline } from "../../components/common/Timeline";
import { Badge } from "../../components/common/Badge";
import { Button } from "../../components/common/Button";
import { TextArea } from "../../components/common/Input";

export const ClientOrderDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const order = orders.find((o) => o.id === id);
  const [review, setReview] = useState({ rating: 5, comment: "" });
  const service = services.find((s) => s.id === order?.serviceId);

  if (!order) return <div className="p-4">{t("actions.viewDetails")}</div>;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{t("client.orderDetailsTitle")}</h1>
          <p className="text-sm text-slate-600">
            {order.id} · {t(`servicesDictionary.${service?.id}`, { defaultValue: service?.name })}
          </p>
        </div>
        <Badge status={order.status}>{t(`status.${order.status}`)}</Badge>
      </div>
      <Card className="grid gap-4 md:grid-cols-3">
        <div>
          <div className="text-sm text-slate-500">{t("forms.date")}</div>
          <div className="font-semibold text-slate-900">{order.date}</div>
        </div>
        <div>
          <div className="text-sm text-slate-500">{t("forms.address")}</div>
          <div className="font-semibold text-slate-900">
            {t(`orders.${order.id}.address`, { defaultValue: order.address })}
          </div>
        </div>
        <div>
          <div className="text-sm text-slate-500">{t("forms.paymentMethod")}</div>
          <div className="font-semibold text-slate-900">
            {t(`forms.${order.paymentMethod === "online" ? "onlinePayment" : "instapay"}`)}
          </div>
        </div>
      </Card>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.timeline")}</h3>
        <Timeline steps={order.timeline} />
      </Card>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.reviewPrompt")}</h3>
        <div className="flex gap-2 text-sm">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setReview({ ...review, rating: star })}
              className={`rounded-full px-3 py-1 ${review.rating >= star ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}
            >
              ★
            </button>
          ))}
        </div>
        <TextArea
          value={review.comment}
          onChange={(e) => setReview({ ...review, comment: e.target.value })}
          placeholder={t("client.reviewPrompt")}
        />
        <Button>{t("actions.submit")}</Button>
      </Card>
    </div>
  );
};
