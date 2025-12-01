import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { serviceCategories } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";

export const AdminCategories = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{t("admin.categoriesTitle")}</h1>
        <Button as={Link} to="/admin/categories/new" tone="admin">
          {t("actions.add")}
        </Button>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        {serviceCategories.map((cat) => (
          <Card key={cat.id} className="space-y-2">
            <div className="text-lg font-semibold text-slate-900">{t(`categories.${cat.id}.name`)}</div>
            <p className="text-sm text-slate-600">{t(`categories.${cat.id}.description`)}</p>
            <Link to={`/admin/categories/${cat.id}/edit`} className="text-sm font-semibold text-admin-primary">
              {t("actions.edit")}
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};
