import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { useAuthStore } from "../../store/authStore";

export const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const { login, loading } = useAuthStore();
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async (e) => {
    e.preventDefault();
    const user = await login(form);
    const destination =
      user.role === "admin" ? "/admin/dashboard" : user.role === "support" ? "/support/dashboard" : "/client/dashboard";
    navigate(destination);
  };

  return (
    <form className="space-y-4" onSubmit={submit}>
      <h2 className="text-2xl font-bold text-slate-900">{t("auth.loginTitle")}</h2>
      <Input
        label={t("forms.email")}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        type="email"
      />
      <Input
        label={t("forms.password")}
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        type="password"
      />
      <div className="flex items-center justify-between text-sm">
        <Link to="/auth/forgot-password" className="text-user-primary hover:underline">
          {t("auth.forgotLink")}
        </Link>
      </div>
      <Button type="submit" disabled={loading} className="w-full">
        {t("auth.ctaLogin")}
      </Button>
      <p className="text-sm text-slate-600">
        {t("auth.noAccount")}{" "}
        <Link className="text-user-primary" to="/auth/register">
          {t("auth.ctaRegister")}
        </Link>
      </p>
      {from && from !== "/" && (
        <p className="text-xs text-slate-500">{t("auth.redirectNote", { path: from })}</p>
      )}
    </form>
  );
};
