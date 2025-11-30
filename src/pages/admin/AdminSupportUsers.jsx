import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Table } from "../../components/common/Table";
import { Button } from "../../components/common/Button";

const supportUsers = [
  { id: "sup-1", name: "Omar Selim", phone: "+20 111 888 9900", email: "omar@sa3dny.com", shift: "morning" },
  { id: "sup-2", name: "Nadine Adel", phone: "+20 101 220 2200", email: "nadine@sa3dny.com", shift: "evening" },
];

export const AdminSupportUsers = () => {
  const { t } = useTranslation();
  const columns = [
    { key: "name", label: t("forms.name") },
    { key: "email", label: t("forms.email") },
    { key: "phone", label: t("forms.phone") },
    { key: "shift", label: t("forms.time"), render: (row) => t(`shifts.${row.shift}`) },
    { key: "actions", label: t("common.actions"), render: (row) => <Link className="text-admin-primary" to={`/admin/support-users/${row.id}`}>{t("common.details")}</Link> },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">{t("admin.supportUsersTitle")}</h1>
        <Button tone="admin" as={Link} to="/admin/support-users/new">
          {t("actions.add")}
        </Button>
      </div>
      <Table columns={columns} data={supportUsers} />
    </div>
  );
};
