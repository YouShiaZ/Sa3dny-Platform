import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, ClipboardList, Users, MessageSquare, FileText, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SupportBackground } from "./AnimatedBackgrounds";
import { LanguageSwitcher } from "../common/LanguageSwitcher";
import { Button } from "../common/Button";
import { useAuthStore } from "../../store/authStore";

export const SupportLayout = () => {
  const { t } = useTranslation();
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  const navItems = [
    { to: "/support/dashboard", label: t("support.dashboardTitle"), icon: LayoutDashboard },
    { to: "/support/orders", label: t("support.ordersTitle"), icon: ClipboardList },
    { to: "/support/workers", label: t("support.workersTitle"), icon: Users },
    { to: "/support/reviews", label: t("support.reviewsTitle"), icon: MessageSquare },
    { to: "/support/tools/whatsapp-templates", label: t("support.whatsappTitle"), icon: FileText },
  ];

  return (
    <div className="relative min-h-screen bg-support.background/40">
      <SupportBackground />
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 flex-col gap-4 border-r border-white/50 bg-white/80 p-4 shadow-card backdrop-blur lg:flex">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-support-primary text-white font-bold">S</div>
            <div>
              <div className="font-bold text-slate-900">{t("app.nameEn")}</div>
              <div className="text-xs text-support-primary">{t("roles.support")}</div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-support-primary/10 text-support-primary" : "text-slate-700 hover:bg-white"}`
                }
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <LanguageSwitcher />
            <Button tone="support" variant="ghost" onClick={() => { logout(); navigate("/"); }}>
              {t("actions.logout")}
            </Button>
          </div>
        </aside>
        <div className="flex-1 p-4 lg:p-8">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{t("support.dashboardTitle")}</h1>
              <p className="text-sm text-slate-600">{t("app.tagline")}</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-card sm:flex">
                <Headphones size={16} />
                <span>{t("roles.support")}</span>
              </div>
              <LanguageSwitcher />
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
