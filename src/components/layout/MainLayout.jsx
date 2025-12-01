import { useTranslation } from "react-i18next";
import { Outlet, Link } from "react-router-dom";
import { UserBackground } from "./AnimatedBackgrounds";
import { MainNavbar } from "./MainNavbar";

export const MainLayout = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen bg-user.background/40">
      <UserBackground />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10">
        <MainNavbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <footer className="mt-10 rounded-2xl bg-white/80 p-6 shadow-card backdrop-blur">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-user-primary text-white font-bold">S</div>
                <div>
                  <div className="font-bold text-slate-900">{t("app.nameEn")}</div>
                  <div className="text-xs text-user-primary">{t("app.nameAr")}</div>
                </div>
              </div>
              <p className="text-sm text-slate-600">{t("footer.description")}</p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">{t("footer.links")}</h4>
              <div className="mt-2 flex flex-col gap-2 text-sm text-slate-600">
                <Link to="/about">{t("nav.about")}</Link>
                <Link to="/services">{t("nav.services")}</Link>
                <Link to="/faq">{t("nav.faq")}</Link>
                <Link to="/contact">{t("nav.contact")}</Link>
                <Link to="/terms">{t("footer.terms")}</Link>
                <Link to="/privacy">{t("footer.privacy")}</Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-slate-900">{t("footer.contact")}</h4>
              <div className="mt-2 flex flex-col gap-2 text-sm text-slate-600">
                <span>{t("footer.phone")}: +20 120 000 1020</span>
                <span>{t("footer.whatsapp")}: +20 120 000 1020</span>
                <span>{t("footer.email")}: care@sa3dny.com</span>
              </div>
            </div>
              <div className="flex flex-col justify-between text-sm text-slate-600">
              <div className="font-semibold text-slate-900">{t("common.social")}</div>
              <div className="flex gap-3 text-slate-500">
                <span>{t("footer.social.linkedin")}</span>
                <span>{t("footer.social.instagram")}</span>
                <span>{t("footer.social.facebook")}</span>
              </div>
              <p className="text-xs text-slate-500">© {new Date().getFullYear()} {t("app.nameAr")}</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
