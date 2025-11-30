import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Card } from "../../components/common/Card";
import { Input, TextArea } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

const mock = {
  "sup-1": { name: "Omar Selim", phone: "+20 111 888 9900", email: "omar@sa3dny.com", shift: "morning", notes: "Escalations" },
};

export const AdminSupportUserForm = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const [form, setForm] = useState(
    mock[id] || { name: "", phone: "", email: "", shift: "", notes: "" }
  );

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <Card className="space-y-3">
      <h1 className="text-2xl font-bold text-slate-900">{id ? t("actions.edit") : t("actions.add")} {t("admin.supportUsersTitle")}</h1>
      <form className="grid gap-3 md:grid-cols-2" onSubmit={submit}>
        <Input label={t("forms.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <Input label={t("forms.phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        <Input label={t("forms.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <select
          value={form.shift}
          onChange={(e) => setForm({ ...form, shift: e.target.value })}
          className="rounded-xl border border-slate-200 px-3 py-2"
        >
          <option value="morning">{t("shifts.morning")}</option>
          <option value="evening">{t("shifts.evening")}</option>
        </select>
        <TextArea className="md:col-span-2" label={t("forms.notes")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        <Button tone="admin" type="submit" className="md:col-span-2">
          {t("actions.save")}
        </Button>
      </form>
    </Card>
  );
};
