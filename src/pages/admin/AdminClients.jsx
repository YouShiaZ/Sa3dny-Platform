import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { clients } from "../../data/mockData";
import { Table } from "../../components/common/Table";
import { Button } from "../../components/common/Button";

export const AdminClients = () => {
  const { t } = useTranslation();
  const columns = [
    { key: "name", label: t("forms.name") },
    { key: "email", label: t("forms.email") },
    { key: "phone", label: t("forms.phone") },
    { key: "actions", label: t("common.actions"), render: (row) => <Link className="text-admin-primary" to={`/admin/clients/${row.id}`}>{t("common.details")}</Link> },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{t("admin.clientsTitle")}</h1>
        <Button tone="admin" variant="ghost" as={Link} to="/client/register">
          {t("actions.add")}
        </Button>
      </div>
      <Table columns={columns} data={clients} />
    </div>
  );
};
