import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input, TextArea } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { clients } from "../../data/mockData";

export const ClientProfile = () => {
  const { t } = useTranslation();
  const profile = clients[0];
  const [form, setForm] = useState({
    name: profile.name,
    email: profile.email,
    phone: profile.phone,
    notes: "",
  });

  const update = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">{t("client.profileTitle")}</h2>
        <form className="space-y-3" onSubmit={update}>
          <Input label={t("forms.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <Input label={t("forms.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <Input label={t("forms.phone")} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
          <TextArea label={t("forms.notes")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          <Button type="submit">{t("actions.save")}</Button>
        </form>
      </Card>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.paymentOptions")}</h3>
        <div className="space-y-2 text-sm text-slate-600">
          <div className="rounded-xl bg-slate-50 px-3 py-2">{t("forms.onlinePayment")}</div>
          <div className="rounded-xl bg-slate-50 px-3 py-2">{t("forms.instapay")}</div>
        </div>
      </Card>
    </div>
  );
};
