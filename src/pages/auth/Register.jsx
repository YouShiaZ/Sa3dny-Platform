import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { authApi } from "../../api/authApi";

export const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [saved, setSaved] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await authApi.register(form);
    setSaved(true);
    setTimeout(() => navigate("/auth/login"), 500);
  };

  return (
    <form className="space-y-4" onSubmit={submit}>
      <h2 className="text-2xl font-bold text-slate-900">{t("auth.registerTitle")}</h2>
      <Input label={t("forms.name")} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <Input label={t("forms.email")} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <Input
        label={t("forms.password")}
        type="password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />
      <Button type="submit" className="w-full">
        {t("auth.ctaRegister")}
      </Button>
      {saved && <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">{t("actions.save")} ✓</div>}
      <p className="text-sm text-slate-600">
        {t("auth.hasAccount")}{" "}
        <Link className="text-user-primary" to="/auth/login">
          {t("auth.ctaLogin")}
        </Link>
      </p>
    </form>
  );
};
