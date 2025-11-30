import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { services, serviceCategories } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Input, TextArea, Select } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export const AdminServiceForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const existing = services.find((s) => s.id === id);
  const [form, setForm] = useState(
    existing || {
      name: "",
      categoryId: serviceCategories[0].id,
      price: "",
      duration: "",
      highlights: [],
    }
  );

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{existing ? t("actions.edit") : t("actions.add")} {t("forms.service")}</h1>
      <form className="grid gap-4 md:grid-cols-2" onSubmit={submit}>
        <Input label={t("forms.service")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Select
          label={t("forms.category")}
          value={form.categoryId}
          onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
          options={serviceCategories.map((cat) => ({ value: cat.id, label: t(`categories.${cat.id}`) }))}
        />
        <Input label={t("servicesPage.price")} value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <Input label={t("servicesPage.duration")} value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
        <TextArea
          className="md:col-span-2"
          label={t("servicesPage.highlights")}
          value={form.highlights.join(", ")}
          onChange={(e) => setForm({ ...form, highlights: e.target.value.split(",").map((v) => v.trim()) })}
        />
        <Button type="submit" tone="admin" className="md:col-span-2">
          {t("actions.save")}
        </Button>
      </form>
    </Card>
  );
};
