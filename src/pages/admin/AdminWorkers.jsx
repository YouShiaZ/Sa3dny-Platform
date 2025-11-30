import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { workers } from "../../data/mockData";
import { WorkerCard } from "../../components/common/WorkerCard";
import { Button } from "../../components/common/Button";

export const AdminWorkers = () => {
  const { t } = useTranslation();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{t("admin.workersTitle")}</h1>
        <Button as={Link} to="/admin/workers/new" tone="admin">
          {t("actions.add")}
        </Button>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {workers.map((worker) => (
          <Link key={worker.id} to={`/admin/workers/${worker.id}`}>
            <WorkerCard worker={worker} tone="admin" />
          </Link>
        ))}
      </div>
    </div>
  );
};
