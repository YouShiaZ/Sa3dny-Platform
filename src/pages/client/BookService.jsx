import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { services, clients } from "../../data/mockData";
import { Input, TextArea, Select } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { ordersApi } from "../../api/ordersApi";

export const BookService = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId) || services[0];
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    categoryId: service.categoryId,
    serviceId: service.id,
    date: "",
    time: "",
    duration: service.duration,
    address: clients[0].addresses[0]?.location,
    notes: "",
    paymentMethod: "online",
  });

  const submit = async (e) => {
    e.preventDefault();
    await ordersApi.createOrder({ ...form, clientName: clients[0].name, total: service.price });
    navigate("/client/orders");
  };

  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="md:col-span-2 space-y-3">
        <h1 className="text-2xl font-bold text-slate-900">{t("client.bookTitle")}</h1>
        <form className="space-y-3" onSubmit={submit}>
          <Select
            label={t("forms.category")}
            value={form.categoryId}
            onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
            options={[
              { value: service.categoryId, label: t(`categories.${service.categoryId}`) },
            ]}
          />
          <Select
            label={t("forms.service")}
            value={form.serviceId}
            onChange={(e) => setForm({ ...form, serviceId: e.target.value })}
            options={services.filter((s) => s.categoryId === form.categoryId).map((s) => ({
              value: s.id,
              label: t(`servicesDictionary.${s.id}`, { defaultValue: s.name }),
            }))}
          />
          <div className="grid gap-3 md:grid-cols-2">
            <Input label={t("forms.date")} type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} />
            <Input label={t("forms.time")} type="time" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} />
          </div>
          <Input label={t("forms.duration")} value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} />
          <Select
            label={t("forms.address")}
            value={form.address}
            onChange={(e) => setForm({ ...form, address: e.target.value })}
            options={clients[0].addresses.map((addr) => ({ value: addr.location, label: addr.location }))}
          />
          <TextArea label={t("forms.notes")} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
          <Select
            label={t("forms.paymentMethod")}
            value={form.paymentMethod}
            onChange={(e) => setForm({ ...form, paymentMethod: e.target.value })}
            options={[
              { value: "online", label: t("forms.onlinePayment") },
              { value: "instapay", label: t("forms.instapay") },
            ]}
          />
          <Button type="submit">{t("actions.submit")}</Button>
        </form>
      </Card>
      <Card className="space-y-2">
        <div className="text-sm text-slate-500">{t("servicesPage.detailsTitle")}</div>
        <div className="text-2xl font-bold text-slate-900">{t(`servicesDictionary.${service.id}`, { defaultValue: service.name })}</div>
        <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
          {t("servicesPage.price")}: {t("common.currency")} {service.price}
        </div>
        <div className="rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700">
          {t("servicesPage.duration")}: {service.duration}
        </div>
        <div className="space-y-2">
          {service.highlights.map((item) => (
            <div key={item} className="rounded-xl bg-white px-3 py-2 text-sm text-slate-700 shadow-inner">
              {item}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
