import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { serviceCategories, services } from "../../data/mockData";
import { ServiceCard } from "../../components/common/ServiceCard";
import { Select } from "../../components/common/Input";
import { Card } from "../../components/common/Card";
import { Badge } from "../../components/common/Badge";

export const Services = () => {
  const { t } = useTranslation();
  const [category, setCategory] = useState("all");

  const filtered = useMemo(() => {
    if (category === "all") return services;
    return services.filter((svc) => svc.categoryId === category);
  }, [category]);

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-3 rounded-3xl bg-white/80 p-6 shadow-card md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{t("servicesPage.title")}</h1>
          <p className="text-sm text-slate-600">{t("servicesPage.filters")}</p>
        </div>
        <div className="flex gap-3">
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            options={[
              { value: "all", label: t("actions.viewAll") },
              ...serviceCategories.map((cat) => ({
                value: cat.id,
                label: t(`categories.${cat.id}.name`),
              })),
            ]}
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((svc) => (
          <ServiceCard key={svc.id} service={svc} />
        ))}
      </div>

      <div className="rounded-3xl bg-white/80 p-6 shadow-card">
        <h3 className="text-xl font-semibold text-slate-900">{t("home.categoriesTitle")}</h3>
        <div className="mt-3 grid gap-3 md:grid-cols-4">
          {serviceCategories.map((cat) => (
            <Card key={cat.id} className="space-y-2">
              <div className="text-lg font-semibold text-slate-900">{t(`categories.${cat.id}.name`)}</div>
              <p className="text-sm text-slate-600">{t(`categories.${cat.id}.description`)}</p>
              <Badge tone="user" className="w-fit">
                {services.filter((s) => s.categoryId === cat.id).length} {t("nav.services")}
              </Badge>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
