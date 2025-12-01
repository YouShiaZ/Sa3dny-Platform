import { Star, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { useTranslation } from "react-i18next";

export const ServiceCard = ({ service, onSelect, tone = "user" }) => {
  const { t } = useTranslation();
  const highlights =
    t(`services.details.${service.id}.highlights`, { returnObjects: true, defaultValue: service.highlights }) || [];
  const summary =
    t(`services.details.${service.id}.summary`, {
      defaultValue: Array.isArray(service.highlights) ? service.highlights.slice(0, 2).join(" • ") : "",
    });

  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex h-full flex-col justify-between rounded-2xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur"
    >
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-900">{t(`servicesDictionary.${service.id}`, { defaultValue: service.name })}</h3>
          <Badge tone={tone}>{t(`categories.${service.categoryId}.name`)}</Badge>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
            <Star className="text-amber-500" size={16} /> {service.rating} ({service.reviewsCount})
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1">
            <Clock size={16} className="text-slate-500" /> {t("servicesPage.duration")}: {service.duration}
          </span>
        </div>
        <p className="text-sm text-slate-600">
          {summary}
        </p>
        <div className="flex flex-wrap gap-2">
          {highlights?.map((item) => (
            <Badge key={item} tone={tone} className="bg-slate-100 text-slate-700">
              {item}
            </Badge>
          ))}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-xl font-bold text-slate-900">
          {t("common.currency")} {service.price}
        </div>
        <Button tone={tone} onClick={() => onSelect?.(service)} icon={ArrowRight}>
          {t("actions.bookService")}
        </Button>
      </div>
    </motion.div>
  );
};
