import { useTranslation } from "react-i18next";
import { reviews, services } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const SupportReviews = () => {
  const { t } = useTranslation();
  const title = t("support.reviews.title", { defaultValue: t("support.reviewsTitle") });
  const hasReviews = Array.isArray(reviews) && reviews.length > 0;

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">{title}</h1>
      {hasReviews ? (
        reviews.map((rev) => {
          const svc = services.find((s) => s.id === rev.service || s.name === rev.service || s.id === rev.serviceId);
          return (
            <Card key={rev.id} className="flex items-center justify-between">
              <div>
                <div className="font-semibold text-slate-900">
                  {t(`clients.names.${rev.client}`, { defaultValue: rev.client })}
                </div>
                <div className="text-xs text-slate-500">
                  {t(`servicesDictionary.${svc?.id}`, { defaultValue: svc?.name })}
                </div>
                <div className="text-sm text-slate-600">
                  {t(`reviews.${rev.id}.comment`, { defaultValue: rev.comment })}
                </div>
              </div>
              <Badge tone="support">{rev.rating} ★</Badge>
            </Card>
          );
        })
      ) : (
        <Card className="text-sm text-slate-600">{t("support.reviews.empty")}</Card>
      )}
    </div>
  );
};
