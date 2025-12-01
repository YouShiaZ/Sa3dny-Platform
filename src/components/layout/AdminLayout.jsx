import { Outlet, NavLink, useNavigate, Link } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Layers, Users, Headphones, Briefcase, Settings, LineChart, Sparkles, ClipboardList } from "lucide-react";
import { AdminBackground } from "./AnimatedBackgrounds";
import { useTranslation } from "react-i18next";
import { Button } from "../common/Button";
import { useAuthStore } from "../../store/authStore";
import { MainNavbar } from "./MainNavbar";

export const AdminLayout = () => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";

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
      <MainNavbar />
      <div className="flex px-6 pb-6">
        <aside
          className={`sticky top-28 hidden h-screen w-56 flex-col gap-4 overflow-y-auto border-r border-white/50 bg-white/80 p-4 shadow-card backdrop-blur lg:flex ${
            isRTL ? "mt-24 mr-6" : "mt-16 ml-6"
          }`}
        >
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
            <Button tone="admin" variant="ghost" onClick={() => { logout(); navigate("/"); }}>
              {t("actions.logout")}
            </Button>
          </div>
        </aside>
        <div className="flex-1 pt-4 lg:pt-6 lg:pl-8">
          <header className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-slate-900">{t("admin.dashboardTitle")}</h1>
              <p className="text-sm text-slate-600">{t("app.tagline")}</p>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="search"
                placeholder={t("common.search")}
                className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-inner outline-none"
              />
              <Button as={Link} to="/" tone="admin" variant="ghost">
                {t("common.viewWebsite")}
              </Button>
            </div>
          </header>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
