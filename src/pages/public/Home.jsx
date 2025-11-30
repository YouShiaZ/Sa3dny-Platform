import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, HeartPulse, HelpingHand, Feather, Play, CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { serviceCategories, services } from "../../data/mockData";
import { Button } from "../../components/common/Button";
import { Card } from "../../components/common/Card";
import { ServiceCard } from "../../components/common/ServiceCard";
import { Badge } from "../../components/common/Badge";

const icons = {
  housekeeping: Sparkles,
  nursing: HeartPulse,
  elderly: HelpingHand,
  carpets: Feather,
};

export const Home = () => {
  const { t } = useTranslation();
  const steps = t("home.steps", { returnObjects: true });
  const features = t("home.features", { returnObjects: true });

  return (
    <div className="space-y-12">
      <section className="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-card">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <Badge tone="user" className="inline-flex">{t("home.heroBadge")}</Badge>
            <h1 className="text-4xl font-extrabold text-slate-900">{t("home.heroTitle")}</h1>
            <p className="text-lg text-slate-700">{t("home.heroSubtitle")}</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button as={Link} to="/services" icon={Play}>
                {t("home.ctaBook")}
              </Button>
              <Button as={Link} to="/about" variant="ghost">
                {t("home.ctaLearn")}
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {features?.map((item) => (
                <span key={item} className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="text-user-primary" />
                  {item}
                </span>
              ))}
            </div>
            <div className="rounded-2xl bg-user-primary/10 px-4 py-3 text-sm font-semibold text-user-primary">
              {t("home.trusted")}
            </div>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-panel relative rounded-3xl p-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{t("common.latestOrders")}</p>
                  <h3 className="text-xl font-bold text-slate-900">{t(`servicesDictionary.${services[0].id}`, { defaultValue: services[0].name })}</h3>
                </div>
                <Badge tone="user">{t("status.awaitingPayment")}</Badge>
              </div>
              <div className="mt-4 space-y-2 text-sm text-slate-700">
                <div className="flex items-center justify-between">
                  <span>{t("common.price")}</span>
                  <span className="font-semibold">{t("common.currency")} 320</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>{t("common.worker")}</span>
                  <span className="font-semibold">Lina Mansour</span>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-slate-600">
                {steps?.map((step, idx) => (
                  <div key={idx} className="rounded-xl bg-slate-50 px-3 py-2">
                    <p className="font-semibold text-slate-800">{step.title}</p>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute -left-10 -bottom-10 hidden rounded-3xl bg-gradient-to-br from-user-primary to-user-secondary p-4 text-white shadow-2xl lg:block"
            >
              <div className="text-xs uppercase text-white/70">{t("common.overview")}</div>
              <div className="text-3xl font-bold">98%</div>
              <p className="text-sm text-white/80">{t("home.satisfaction")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">{t("home.categoriesTitle")}</h2>
          <Button as={Link} to="/services" variant="ghost">
            {t("actions.viewAll")}
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat) => {
            const Icon = icons[cat.id];
            return (
              <Card key={cat.id} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  {Icon && <Icon className="text-user-primary" size={20} />}
                  <div>
                    <div className="text-lg font-semibold text-slate-900">{t(`categories.${cat.id}`)}</div>
                    <p className="text-sm text-slate-600">{cat.description}</p>
                  </div>
                </div>
                <Link to={`/services?category=${cat.id}`} className="text-sm font-semibold text-user-primary hover:underline">
                  {t("actions.viewDetails")}
                </Link>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">{t("servicesPage.popular")}</h2>
          <Button as={Link} to="/services" variant="ghost">
            {t("actions.viewAll")}
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {services.slice(0, 4).map((svc) => (
            <ServiceCard key={svc.id} service={svc} onSelect={() => {}} tone="user" />
          ))}
        </div>
      </section>

      <section className="space-y-3 rounded-3xl bg-white/80 p-6 shadow-card">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">{t("home.howItWorks")}</h3>
          <Badge tone="user">{t("actions.learnMore")}</Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {steps?.map((step, idx) => (
            <Card key={idx} className="space-y-2">
              <div className="text-sm font-semibold text-user-primary">0{idx + 1}</div>
              <div className="text-lg font-semibold text-slate-900">{step.title}</div>
              <p className="text-sm text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
