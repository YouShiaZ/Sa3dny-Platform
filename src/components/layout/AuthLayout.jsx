import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserBackground } from "./AnimatedBackgrounds";

export const AuthLayout = () => {
  const { t } = useTranslation();
  return (
    <div className="relative min-h-screen bg-user.background/60">
      <UserBackground />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4">
        <Link to="/" className="mb-6 flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-card backdrop-blur">
          {t("nav.home")}
        </Link>
        <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-8 rounded-3xl bg-white/80 p-6 shadow-card backdrop-blur lg:grid-cols-2">
          <div className="space-y-4">
            <p className="inline-flex rounded-full bg-user-primary/10 px-3 py-1 text-xs font-semibold text-user-primary">
              {t("app.nameAr")} / {t("app.nameEn")}
            </p>
            <h1 className="text-3xl font-bold text-slate-900">{t("app.tagline")}</h1>
            <p className="text-sm text-slate-600">{t("app.description")}</p>
            <div className="rounded-2xl bg-user-primary/10 p-4 text-sm text-user-primary">
              {t("client.idRequirement")}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-4 shadow-card">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
