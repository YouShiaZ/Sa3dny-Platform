import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { workers, services } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Input, TextArea } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export const AdminWorkerForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const existing = workers.find((w) => w.id === id);
  const [form, setForm] = useState(
    existing || { name: "", phone: "", area: "", services: [], level: "Bronze", notes: "" }
  );

  const toggleService = (svc) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(svc) ? prev.services.filter((s) => s !== svc) : [...prev.services, svc],
    }));
  };

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{existing ? t("actions.edit") : t("actions.add")} {t("admin.workersTitle")}</h1>
      <form className="grid gap-3 md:grid-cols-2" onSubmit={submit}>
        <Input label={t("forms.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label={t("forms.phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <Input label={t("forms.address")} value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} />
        <select
          value={form.level}
          onChange={(e) => setForm({ ...form, level: e.target.value })}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          {["Bronze", "Silver", "Gold"].map((level) => (
            <option key={level} value={level}>{t(`levels.${level}`)}</option>
          ))}
        </select>
        <div className="md:col-span-2 space-y-2">
          <div className="text-sm font-semibold text-slate-800">{t("forms.service")}</div>
          <div className="flex flex-wrap gap-2">
            {services.map((svc) => (
              <button
                key={svc.id}
                type="button"
                onClick={() => toggleService(svc.name)}
                className={`rounded-full px-3 py-1 text-sm ${form.services.includes(svc.name) ? "bg-admin-primary/10 text-admin-primary" : "bg-slate-100 text-slate-600"}`}
              >
                {t(`servicesDictionary.${svc.id}`, { defaultValue: svc.name })}
              </button>
            ))}
          </div>
        </div>
        <TextArea className="md:col-span-2" label={t("forms.notes")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        <Button tone="admin" type="submit" className="md:col-span-2">
          {t("actions.save")}
        </Button>
      </form>
    </Card>
  );
};
