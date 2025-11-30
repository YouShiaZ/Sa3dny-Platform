import { useTranslation } from "react-i18next";
import { Card } from "../../components/common/Card";

export const FAQ = () => {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true });

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-slate-900">{t("faq.title")}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        {items?.map((item, idx) => (
          <Card key={idx} className="space-y-2">
            <div className="text-lg font-semibold text-slate-900">{item.q}</div>
            <p className="text-sm text-slate-600">{item.a}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};
