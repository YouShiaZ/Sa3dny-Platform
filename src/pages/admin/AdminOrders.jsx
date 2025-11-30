import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { orders } from "../../data/mockData";
import { Table } from "../../components/common/Table";
import { Badge } from "../../components/common/Badge";

export const AdminOrders = () => {
  const { t } = useTranslation();
  const columns = [
    { key: "id", label: t("common.id") },
    { key: "clientName", label: t("roles.client") },
    { key: "status", label: t("common.status"), render: (row) => <Badge status={row.status}>{t(`status.${row.status}`)}</Badge> },
    { key: "total", label: t("common.price"), render: (row) => `${t("common.currency")} ${row.total}` },
    { key: "actions", label: t("common.actions"), render: (row) => <Link className="text-admin-primary" to={`/admin/orders/${row.id}`}>{t("common.details")}</Link> },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("admin.ordersTitle")}</h1>
      <Table columns={columns} data={orders} />
    </div>
  );
};
