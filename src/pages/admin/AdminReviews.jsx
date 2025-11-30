import { useTranslation } from "react-i18next";
import { reviews } from "../../data/mockData";
import { Table } from "../../components/common/Table";

export const AdminReviews = () => {
  const { t } = useTranslation();
  const columns = [
    { key: "client", label: t("roles.client") },
    { key: "service", label: t("forms.service") },
    { key: "rating", label: t("common.rating") },
    { key: "comment", label: t("forms.notes") },
  ];
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("admin.reviewsTitle")}</h1>
      <Table columns={columns} data={reviews} />
    </div>
  );
};
