import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { services, serviceCategories } from "../../data/mockData";
import { Table } from "../../components/common/Table";
import { Button } from "../../components/common/Button";

export const AdminServices = () => {
  const { t } = useTranslation();
  const columns = [
    { key: "name", label: t("forms.service"), render: (row) => t(`servicesDictionary.${row.id}`, { defaultValue: row.name }) },
    { key: "categoryId", label: t("forms.category"), render: (row) => t(`categories.${row.categoryId}.name`) },
    { key: "price", label: t("servicesPage.price"), render: (row) => `${t("common.currency")} ${row.price}` },
    { key: "duration", label: t("servicesPage.duration") },
    { key: "actions", label: t("common.actions"), render: (row) => <Link className="text-admin-primary" to={`/admin/services/${row.id}/edit`}>{t("actions.edit")}</Link> },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{t("admin.servicesTitle")}</h1>
        <Button as={Link} to="/admin/services/new" tone="admin">
          {t("actions.add")}
        </Button>
      </div>
      <Table columns={columns} data={services} />
      <div className="rounded-2xl bg-white/80 p-4 shadow-card">
        <div className="text-sm font-semibold text-slate-800">{t("admin.categoriesTitle")}</div>
        <div className="flex flex-wrap gap-2 text-sm text-slate-600">
            {serviceCategories.map((cat) => (
              <span key={cat.id} className="rounded-full bg-admin-primary/10 px-3 py-1 text-admin-primary">
                {t(`categories.${cat.id}.name`)}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
