import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { workers } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const SupportWorkerDetails = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const worker = workers.find((w) => w.id === id) || workers[0];

  return (
    <Card className="space-y-3">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{worker.name}</h1>
        <Badge tone="support">{t(`levels.${worker.level}`)}</Badge>
      </div>
      <div className="text-sm text-slate-700">{worker.phone}</div>
      <div className="text-sm text-slate-700">{worker.area}</div>
      <div className="flex flex-wrap gap-2">
        {worker.services.map((svc) => (
          <Badge key={svc} tone="support" className="bg-slate-100 text-slate-700">
            {svc}
          </Badge>
        ))}
      </div>
    </Card>
  );
};
