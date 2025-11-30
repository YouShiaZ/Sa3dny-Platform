import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { workers } from "../../data/mockData";
import { WorkerCard } from "../../components/common/WorkerCard";

export const SupportWorkers = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("support.workersTitle")}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {workers.map((worker) => (
          <Link key={worker.id} to={`/support/workers/${worker.id}`}>
            <WorkerCard worker={worker} tone="support" />
          </Link>
        ))}
      </div>
    </div>
  );
};
