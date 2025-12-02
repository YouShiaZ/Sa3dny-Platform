import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../common/Button";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { useAuthStore } from "../../store/authStore";
import { Menu, X } from "lucide-react";
import { MobileDrawer } from "./MobileDrawer";
import { AnimatePresence } from "framer-motion";

export const MainNavbar = ({ className = "" }) => {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();
  const [open, setOpen] = useState(false);
  const isRTL = document.documentElement.dir === "rtl";

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/faq", label: t("nav.faq") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <header className={`sticky top-0 z-40 mb-4 bg-gradient-to-b from-white/95 via-white/80 to-white/60 backdrop-blur ${className}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
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
          <div className="hidden items-center gap-2 md:flex">
            {user ? (
              <>
                <Button as={Link} to={`/${user.role}/dashboard`} className="flex flex-col items-center px-3 py-1 text-xs font-semibold leading-tight">
                  <span className="text-xs font-semibold text-slate-700">{t("nav.dashboard")}</span>
                  <span className="text-[11px] font-semibold text-white/90">{t(`roles.${user.role}`)}</span>
                </Button>
                <Button variant="ghost" onClick={logout}>
                  {t("actions.logout")}
                </Button>
              </>
            ) : (
              <>
                <Button variant="ghost" as={Link} to="/auth/login">
                  {t("nav.login")}
                </Button>
                <Button as={Link} to="/auth/register">
                  {t("nav.register")}
                </Button>
              </>
            )}
          </div>
          <button
            className="md:hidden rounded-lg border border-slate-200 bg-white p-2 shadow-inner"
            onClick={() => setOpen((p) => !p)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
      </AnimatePresence>
      <MobileDrawer
        open={open}
        isRTL={isRTL}
        onClose={() => setOpen(false)}
        header={
          <>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-user-primary text-white font-bold">S</div>
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-lg text-slate-900">{t("app.nameEn")}</span>
              <span className="text-xs font-semibold text-user-primary">{t("app.nameAr")}</span>
            </div>
          </>
        }
        items={navItems}
      >
        <LanguageSwitcher />
        {user ? (
          <>
            <Button as={Link} to={`/${user.role}/dashboard`} className="w-full" onClick={() => setOpen(false)}>
              {t("nav.dashboard")}
            </Button>
            <Button variant="ghost" className="w-full" onClick={() => { logout(); setOpen(false); }}>
              {t("actions.logout")}
            </Button>
          </>
        ) : (
          <>
            <Button as={Link} to="/auth/login" className="w-full" onClick={() => setOpen(false)}>
              {t("nav.login")}
            </Button>
            <Button as={Link} to="/auth/register" className="w-full" onClick={() => setOpen(false)}>
              {t("nav.register")}
            </Button>
          </>
        )}
      </MobileDrawer>
    </header>
  );
};
