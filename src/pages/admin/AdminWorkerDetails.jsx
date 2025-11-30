import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { workers } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const AdminWorkerDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const worker = workers.find((w) => w.id === id) || workers[0];

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="space-y-2">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-slate-900">{worker.name}</h1>
          <Badge tone="admin">{t(`levels.${worker.level}`)}</Badge>
        </div>
        <div className="text-sm text-slate-600">{worker.phone}</div>
        <div className="text-sm text-slate-600">{worker.area}</div>
        <div className="text-sm text-slate-600">{t("common.rating")}: {worker.rating}</div>
      </Card>
      <Card className="space-y-2">
        <h3 className="text-lg font-semibold text-slate-900">{t("forms.service")}</h3>
        <div className="flex flex-wrap gap-2">
          {worker.services.map((svc) => (
            <Badge key={svc} tone="admin" className="bg-slate-100 text-slate-700">
              {svc}
            </Badge>
          ))}
        </div>
        <div className="rounded-xl bg-admin-primary/10 px-3 py-2 text-sm text-admin-primary">
          {t("admin.finance")}: {t("common.currency")} {worker.totalEarned.toLocaleString()}
        </div>
      </Card>
    </div>
  );
};
