import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "./components/layout/MainLayout";
import { AdminLayout } from "./components/layout/AdminLayout";
import { SupportLayout } from "./components/layout/SupportLayout";
import { AuthLayout } from "./components/layout/AuthLayout";
import { ProtectedRoute } from "./router/ProtectedRoute";
import { useUIStore } from "./store/uiStore";
import { Home } from "./pages/public/Home";
import { About } from "./pages/public/About";
import { FAQ } from "./pages/public/FAQ";
import { Contact } from "./pages/public/Contact";
import { Services } from "./pages/public/Services";
import { ServiceDetails } from "./pages/public/ServiceDetails";
import { Login } from "./pages/auth/Login";
import { Register } from "./pages/auth/Register";
import { ForgotPassword } from "./pages/auth/ForgotPassword";
import { ClientDashboard } from "./pages/client/ClientDashboard";
import { ClientProfile } from "./pages/client/ClientProfile";
import { ClientAddresses } from "./pages/client/ClientAddresses";
import { ClientIDVerification } from "./pages/client/ClientIDVerification";
import { ClientOrders } from "./pages/client/ClientOrders";
import { ClientOrderDetails } from "./pages/client/ClientOrderDetails";
import { ClientReviews } from "./pages/client/ClientReviews";
import { BookService } from "./pages/client/BookService";
import { AdminDashboard } from "./pages/admin/AdminDashboard";
import { AdminServices } from "./pages/admin/AdminServices";
import { AdminServiceForm } from "./pages/admin/AdminServiceForm";
import { AdminCategories } from "./pages/admin/AdminCategories";
import { AdminCategoryForm } from "./pages/admin/AdminCategoryForm";
import { AdminClients } from "./pages/admin/AdminClients";
import { AdminClientDetails } from "./pages/admin/AdminClientDetails";
import { AdminWorkers } from "./pages/admin/AdminWorkers";
import { AdminWorkerForm } from "./pages/admin/AdminWorkerForm";
import { AdminWorkerDetails } from "./pages/admin/AdminWorkerDetails";
import { AdminSupportUsers } from "./pages/admin/AdminSupportUsers";
import { AdminSupportUserForm } from "./pages/admin/AdminSupportUserForm";
import { AdminSupportUserDetails } from "./pages/admin/AdminSupportUserDetails";
import { AdminOrders } from "./pages/admin/AdminOrders";
import { AdminOrderDetails } from "./pages/admin/AdminOrderDetails";
import { AdminReviews } from "./pages/admin/AdminReviews";
import { AdminAnalytics } from "./pages/admin/AdminAnalytics";
import { AdminAIInsights } from "./pages/admin/AdminAIInsights";
import { AdminSettings } from "./pages/admin/AdminSettings";
import { SupportDashboard } from "./pages/support/SupportDashboard";
import { SupportOrders } from "./pages/support/SupportOrders";
import { SupportOrderDetails } from "./pages/support/SupportOrderDetails";
import { SupportWorkers } from "./pages/support/SupportWorkers";
import { SupportWorkerDetails } from "./pages/support/SupportWorkerDetails";
import { SupportReviews } from "./pages/support/SupportReviews";
import { SupportWhatsAppTemplates } from "./pages/support/SupportWhatsAppTemplates";

const App = () => {
  const { language } = useUIStore();

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
        <Route element={<MainLayout />}>
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/client/profile" element={<ClientProfile />} />
          <Route path="/client/addresses" element={<ClientAddresses />} />
          <Route path="/client/id-verification" element={<ClientIDVerification />} />
          <Route path="/client/orders" element={<ClientOrders />} />
          <Route path="/client/orders/:id" element={<ClientOrderDetails />} />
          <Route path="/client/reviews" element={<ClientReviews />} />
          <Route path="/client/book/:serviceId" element={<BookService />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/services" element={<AdminServices />} />
          <Route path="/admin/services/new" element={<AdminServiceForm />} />
          <Route path="/admin/services/:id/edit" element={<AdminServiceForm />} />
          <Route path="/admin/categories" element={<AdminCategories />} />
          <Route path="/admin/categories/new" element={<AdminCategoryForm />} />
          <Route path="/admin/categories/:id/edit" element={<AdminCategoryForm />} />
          <Route path="/admin/clients" element={<AdminClients />} />
          <Route path="/admin/clients/:id" element={<AdminClientDetails />} />
          <Route path="/admin/workers" element={<AdminWorkers />} />
          <Route path="/admin/workers/new" element={<AdminWorkerForm />} />
          <Route path="/admin/workers/:id" element={<AdminWorkerDetails />} />
          <Route path="/admin/support-users" element={<AdminSupportUsers />} />
          <Route path="/admin/support-users/new" element={<AdminSupportUserForm />} />
          <Route path="/admin/support-users/:id" element={<AdminSupportUserDetails />} />
          <Route path="/admin/support-users/:id/edit" element={<AdminSupportUserForm />} />
          <Route path="/admin/orders" element={<AdminOrders />} />
          <Route path="/admin/orders/:id" element={<AdminOrderDetails />} />
          <Route path="/admin/reviews" element={<AdminReviews />} />
          <Route path="/admin/analytics" element={<AdminAnalytics />} />
          <Route path="/admin/ai-insights" element={<AdminAIInsights />} />
          <Route path="/admin/settings" element={<AdminSettings />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["support"]} />}>
        <Route element={<SupportLayout />}>
          <Route path="/support/dashboard" element={<SupportDashboard />} />
          <Route path="/support/orders" element={<SupportOrders />} />
          <Route path="/support/orders/:id" element={<SupportOrderDetails />} />
          <Route path="/support/workers" element={<SupportWorkers />} />
          <Route path="/support/workers/:id" element={<SupportWorkerDetails />} />
          <Route path="/support/reviews" element={<SupportReviews />} />
          <Route path="/support/tools/whatsapp-templates" element={<SupportWhatsAppTemplates />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
