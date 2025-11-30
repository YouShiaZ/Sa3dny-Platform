import { useTranslation } from "react-i18next";
import { reviews } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const SupportReviews = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">{t("support.reviewsTitle")}</h1>
      {reviews.map((rev) => (
        <Card key={rev.id} className="flex items-center justify-between">
          <div>
            <div className="font-semibold text-slate-900">{rev.client}</div>
            <div className="text-sm text-slate-600">{rev.comment}</div>
          </div>
          <Badge tone="support">{rev.rating} ★</Badge>
        </Card>
      ))}
    </div>
  );
};
