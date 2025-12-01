import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { orders } from "../../data/mockData";
import { Table } from "../../components/common/Table";
import { Button } from "../../components/common/Button";
import { Badge } from "../../components/common/Badge";

export const SupportOrders = () => {
  const { t } = useTranslation();

  const columns = [
    { key: "id", label: t("common.id") },
    {
      key: "clientName",
      label: t("roles.client"),
      render: (row) => t(`clients.names.${row.clientName}`, { defaultValue: row.clientName }),
    },
    { key: "status", label: t("common.status"), render: (row) => <Badge status={row.status}>{t(`status.${row.status}`)}</Badge> },
    { key: "paymentMethod", label: t("forms.paymentMethod"), render: (row) => t(`forms.${row.paymentMethod === "online" ? "onlinePayment" : "instapay"}`) },
    {
      key: "actions",
      label: t("common.actions"),
      render: (row) => (
        <div className="flex gap-2">
          <Button tone="support" variant="ghost" as={Link} to={`/support/orders/${row.id}`}>
            {t("actions.viewDetails")}
          </Button>
          {row.status === "awaitingPayment" && <Button tone="support">{t("actions.confirm")}</Button>}
        </div>
      ),
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("support.ordersTitle")}</h1>
      <Table columns={columns} data={orders} />
    </div>
  );
};
