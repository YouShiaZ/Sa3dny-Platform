import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Layers, Users, Headphones, Briefcase, Settings, LineChart, Sparkles, ClipboardList } from "lucide-react";
import { AdminBackground } from "./AnimatedBackgrounds";
import { useTranslation } from "react-i18next";
import { Button } from "../common/Button";
import { useAuthStore } from "../../store/authStore";
import { LanguageSwitcher } from "../common/LanguageSwitcher";

export const AdminLayout = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const navItems = [
    { to: "/admin/dashboard", label: t("admin.dashboardTitle"), icon: LayoutDashboard },
    { to: "/admin/analytics", label: t("admin.analyticsTitle"), icon: LineChart },
    { to: "/admin/services", label: t("admin.servicesTitle"), icon: ClipboardList },
    { to: "/admin/categories", label: t("admin.categoriesTitle"), icon: Layers },
    { to: "/admin/orders", label: t("admin.ordersTitle"), icon: FolderKanban },
    { to: "/admin/clients", label: t("admin.clientsTitle"), icon: Users },
    { to: "/admin/workers", label: t("admin.workersTitle"), icon: Briefcase },
    { to: "/admin/support-users", label: t("admin.supportUsersTitle"), icon: Headphones },
    { to: "/admin/ai-insights", label: t("admin.aiTitle"), icon: Sparkles },
    { to: "/admin/settings", label: t("admin.settingsTitle"), icon: Settings },
  ];

  return (
    <div className="relative min-h-screen bg-admin.background">
      <AdminBackground />
      <div className="flex">
        <aside className="sticky top-0 hidden h-screen w-64 flex-col gap-4 border-r border-white/50 bg-white/80 p-4 shadow-card backdrop-blur lg:flex">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-admin-primary text-white font-bold">A</div>
            <div>
              <div className="font-bold text-slate-900">{t("app.nameEn")}</div>
              <div className="text-xs text-admin-primary">{t("roles.admin")}</div>
            </div>
          </div>
          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold transition ${isActive ? "bg-admin-primary/10 text-admin-primary" : "text-slate-700 hover:bg-white"}`
                }
              >
                <item.icon size={18} />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex flex-col gap-2">
            <LanguageSwitcher />
            <Button tone="admin" variant="ghost" onClick={() => { logout(); navigate("/"); }}>
              {t("actions.logout")}
            </Button>
          </div>
        </aside>
        <div className="flex-1 p-4 lg:p-8">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">{t("admin.dashboardTitle")}</h1>
              <p className="text-sm text-slate-600">{t("app.tagline")}</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="search"
                placeholder={t("common.search")}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner outline-none"
              />
              <div className="hidden items-center gap-2 rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-card sm:flex">
                <span>{user?.name || "Admin"}</span>
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
