import { useState } from "react";
import { useTranslation } from "react-i18next";
import { clients } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Input, TextArea } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export const ClientAddresses = () => {
  const { t } = useTranslation();
  const [addresses, setAddresses] = useState(clients[0].addresses);
  const [form, setForm] = useState({ label: "", location: "", notes: "" });

  const addAddress = (e) => {
    e.preventDefault();
    setAddresses([...addresses, form]);
    setForm({ label: "", location: "", notes: "" });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">{t("client.addressesTitle")}</h2>
        {addresses.map((addr, idx) => (
          <div key={idx} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
            <div className="font-semibold text-slate-900">
              {t(`clients.${clients[0].id}.addresses.${idx}.label`, { defaultValue: addr.label })}
            </div>
            <div className="text-sm text-slate-600">
              {t(`clients.${clients[0].id}.addresses.${idx}.location`, { defaultValue: addr.location })}
            </div>
            <div className="text-xs text-slate-500">
              {t(`clients.${clients[0].id}.addresses.${idx}.notes`, { defaultValue: addr.notes })}
            </div>
          </div>
        ))}
      </Card>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{t("actions.add")} {t("client.addressesTitle")}</h3>
        <form className="space-y-3" onSubmit={addAddress}>
          <Input label={t("forms.name")} value={form.label} onChange={(e) => setForm({ ...form, label: e.target.value })} />
          <Input label={t("forms.address")} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
          <TextArea label={t("forms.notes")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          <Button type="submit">{t("actions.save")}</Button>
        </form>
      </Card>
    </div>
  );
};
