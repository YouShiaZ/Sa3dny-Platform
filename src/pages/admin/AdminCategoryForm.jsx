import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { serviceCategories } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Input, TextArea } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export const AdminCategoryForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const existing = serviceCategories.find((c) => c.id === id);
  const [form, setForm] = useState(existing || { name: "", description: "" });

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{existing ? t("actions.edit") : t("actions.add")} {t("admin.categoriesTitle")}</h1>
      <form className="space-y-3" onSubmit={submit}>
        <Input label={t("forms.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <TextArea label={t("forms.notes")} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <Button tone="admin" type="submit">{t("actions.save")}</Button>
      </form>
    </Card>
  );
};
