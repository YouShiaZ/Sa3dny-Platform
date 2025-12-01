import { MapPin, Phone } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { useTranslation } from "react-i18next";
import { services } from "../../data/mockData";

export const WorkerCard = ({ worker, tone = "admin" }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const serviceLabel = (svc) => {
    const match = typeof svc === "string" ? services.find((s) => s.id === svc || s.name === svc) : null;
    const key = match ? match.id : svc;
    return t(`servicesDictionary.${key}`, { defaultValue: typeof svc === "string" ? svc : String(svc) });
  };
  return (
    <Card className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg font-semibold text-slate-900">{t(`workers.${worker.id}.name`, { defaultValue: worker.name })}</h4>
          <div className="text-sm text-slate-600">{t(`levels.${worker.level}`)}</div>
        </div>
        <Badge tone={tone}>{t("common.rating")}: {worker.rating}</Badge>
      </div>
      <div className="flex flex-wrap gap-2">
        {worker.services.map((svc) => (
          <Badge key={svc} tone={tone} className="bg-slate-100 text-slate-700">
            {serviceLabel(svc)}
          </Badge>
        ))}
      </div>
      <div className="flex items-center justify-between text-sm text-slate-700">
        <span className="inline-flex items-center gap-2"><MapPin size={16} /> {t(`workers.${worker.id}.area`, { defaultValue: worker.area })}</span>
        <span className="inline-flex items-center gap-2"><Phone size={16} /> {worker.phone}</span>
      </div>
      <div className="text-right text-xs text-slate-500">
        {t("admin.finance")}: {t("common.currency")} {worker.totalEarned.toLocaleString()}
      </div>
    </Card>
  );
};
