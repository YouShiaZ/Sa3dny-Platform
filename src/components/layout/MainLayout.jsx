import { Outlet, NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../common/Button";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { UserBackground } from "./AnimatedBackgrounds";
import { useAuthStore } from "../../store/authStore";
import { Badge } from "../common/Badge";

export const MainLayout = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <div className="relative min-h-screen bg-user.background/40">
      <UserBackground />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-10">
        <header className="sticky top-0 z-30 mb-6 bg-gradient-to-b from-white/90 via-white/70 to-transparent backdrop-blur">
          <div className="flex items-center justify-between py-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-user-primary text-white font-bold">S</div>
              <div className="flex flex-col leading-tight">
                <span className="font-extrabold text-lg text-slate-900">{t("app.nameEn")}</span>
                <span className="text-xs font-semibold text-user-primary">{t("app.nameAr")}</span>
              </div>
            </Link>
            <nav className="hidden items-center gap-4 text-sm font-semibold text-slate-600 md:flex">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `rounded-full px-3 py-2 transition ${isActive ? "bg-user-primary/10 text-user-primary" : "hover:text-slate-900"}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              {user ? (
                <div className="flex items-center gap-2">
                  <Badge tone="user">{t(`roles.${user.role}`)}</Badge>
                  <Button variant="ghost" onClick={logout}>
                    {t("actions.logout")}
                  </Button>
                  <Button as={Link} to={`/${user.role}/dashboard`}>
                    {t("nav.dashboard")}
                  </Button>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button variant="ghost" as={Link} to="/auth/login">
                    {t("nav.login")}
                  </Button>
                  <Button as={Link} to="/auth/register">
                    {t("nav.register")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </header>
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
                <span>LinkedIn</span>
                <span>Instagram</span>
                <span>Facebook</span>
              </div>
              <p className="text-xs text-slate-500">© {new Date().getFullYear()} Sa3dny</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
