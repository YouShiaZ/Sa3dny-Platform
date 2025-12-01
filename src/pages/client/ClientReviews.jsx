import { useState } from "react";
import { useTranslation } from "react-i18next";
import { reviews, services } from "../../data/mockData";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { TextArea } from "../../components/common/Input";

export const ClientReviews = () => {
  const { t } = useTranslation();
  const [list, setList] = useState(reviews);
  const [form, setForm] = useState({ serviceId: services[0].id, comment: "", rating: 5 });

  const submit = (e) => {
    e.preventDefault();
    setList([{ id: Date.now(), client: t("roles.client"), service: form.serviceId, rating: form.rating, comment: form.comment }, ...list]);
    setForm({ ...form, comment: "" });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">{t("client.reviewsTitle")}</h2>
        {list.map((rev) => {
          const svc = services.find((s) => s.id === rev.service || s.name === rev.service || s.id === rev.serviceId);
          return (
            <div key={rev.id} className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2">
              <div className="flex items-center justify-between">
                <div className="font-semibold text-slate-900">
                  {t(`clients.names.${rev.client}`, { defaultValue: rev.client })}
                </div>
                <div className="text-amber-500">{"★".repeat(rev.rating)}</div>
              </div>
              <div className="text-xs text-slate-500">
                {t(`servicesDictionary.${svc?.id}`, { defaultValue: svc?.name })}
              </div>
              <div className="text-sm text-slate-600">
                {t(`reviews.${rev.id}.comment`, { defaultValue: rev.comment })}
              </div>
            </div>
          );
        })}
      </Card>
      <Card className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900">{t("client.reviewPrompt")}</h3>
        <form className="space-y-3" onSubmit={submit}>
          <label className="text-sm font-semibold text-slate-700">{t("forms.service")}</label>
          <select
            value={form.serviceId}
            onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
            className="w-full rounded-xl border border-slate-200 px-3 py-2"
          >
            {services.map((svc) => (
              <option key={svc.id} value={svc.id}>
                {t(`servicesDictionary.${svc.id}`, { defaultValue: svc.name })}
              </option>
            ))}
          </select>
          <div className="flex gap-2 text-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setForm({ ...form, rating: star })}
                className={`rounded-full px-3 py-1 ${form.rating >= star ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-500"}`}
              >
                ★
              </button>
            ))}
          </div>
          <TextArea value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
          <Button type="submit">{t("actions.submit")}</Button>
        </form>
      </Card>
    </div>
  );
};
