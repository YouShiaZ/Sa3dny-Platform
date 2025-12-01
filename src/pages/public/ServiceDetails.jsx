import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";
import { Button } from "../../components/common/Button";
import { Clock, Star } from "lucide-react";

export const ServiceDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const service = services.find((svc) => svc.id === id);
  const highlights =
    t(`services.details.${service?.id}.highlights`, { returnObjects: true, defaultValue: service?.highlights || [] }) ||
    [];
  const description = t(`services.details.${service?.id}.description`, {
    defaultValue: service?.highlights?.join(" • "),
  });

  if (!service) {
    return <div className="rounded-2xl bg-white p-6 text-slate-700 shadow-card">{t("actions.viewDetails")}</div>;
  }

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="md:col-span-2 space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{t(`servicesDictionary.${service.id}`, { defaultValue: service.name })}</h1>
            <p className="text-sm text-slate-600">{t(`categories.${service.categoryId}.name`)}</p>
          </div>
          <Badge tone="user" className="text-sm">
            {t("servicesPage.duration")}: {service.duration}
          </Badge>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
            <Star className="text-amber-500" size={16} /> {service.rating} ({service.reviewsCount})
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1">
            <Clock className="text-slate-500" size={16} /> {service.duration}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{t("servicesPage.highlights")}</h3>
          <div className="text-sm text-slate-600">{description}</div>
          <div className="mt-2 grid gap-2 md:grid-cols-2">
            {highlights.map((item) => (
              <div key={item} className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Card>
      <Card className="space-y-3">
        <div className="text-sm text-slate-500">{t("servicesPage.price")}</div>
        <div className="text-3xl font-bold text-slate-900">
          {t("common.currency")} {service.price}
        </div>
        <p className="text-sm text-slate-600">{t("home.heroSubtitle")}</p>
        <Button as={Link} to={`/client/book/${service.id}`}>
          {t("servicesPage.bookNow")}
        </Button>
      </Card>
    </div>
  );
};
