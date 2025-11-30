import { useTranslation } from "react-i18next";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { CheckCircle2 } from "lucide-react";

export const About = () => {
  const { t } = useTranslation();
  const pillars = t("about.pillars", { returnObjects: true });

  return (
    <div className="space-y-6">
      <div className="rounded-3xl bg-white/80 p-8 shadow-card">
        <h1 className="text-3xl font-bold text-slate-900">{t("about.title")}</h1>
        <p className="mt-3 text-lg text-slate-700">{t("about.mission")}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {pillars?.map((item) => (
            <Card key={item} className="flex items-start gap-2">
              <CheckCircle2 className="text-user-primary" size={18} />
              <p className="text-sm text-slate-700">{item}</p>
            </Card>
          ))}
        </div>
        <div className="mt-4 rounded-2xl bg-user-primary/10 p-4 text-slate-800">
          {t("about.vision")}
        </div>
        <Button className="mt-4" as="a" href="/services">
          {t("about.cta")}
        </Button>
      </div>
    </div>
  );
};
