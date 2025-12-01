import { useTranslation } from "react-i18next";
import { aiInsights } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const AdminAIInsights = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("admin.aiTitle")}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {aiInsights.suggestions.map((item) => (
          <Card key={item.orderId} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-500">{t("admin.ordersTitle")}</div>
              <Badge tone="admin">{Math.round(item.confidence * 100)}%</Badge>
            </div>
            <div className="text-lg font-semibold text-slate-900">{item.orderId}</div>
            <div className="text-sm text-slate-600">
              {t(`workers.names.${item.suggestedWorker}`, { defaultValue: item.suggestedWorker })}
            </div>
            <p className="text-sm text-slate-600">
              {t(`ai.suggestions.${item.orderId}.reason`, { defaultValue: item.reason })}
            </p>
          </Card>
        ))}
      </div>
      <Card className="space-y-2">
        <div className="text-sm font-semibold text-slate-800">{t("support.reviewsTitle")}</div>
        <div className="flex gap-3">
          <Badge tone="admin">+{aiInsights.sentiment.positive}% {t("sentiment.positive")}</Badge>
          <Badge tone="admin">{aiInsights.sentiment.neutral}% {t("sentiment.neutral")}</Badge>
          <Badge tone="admin">{aiInsights.sentiment.negative}% {t("sentiment.negative")}</Badge>
        </div>
      </Card>
    </div>
  );
};
