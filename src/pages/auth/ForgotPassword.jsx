import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "../../components/common/Input";
import { Button } from "../../components/common/Button";
import { authApi } from "../../api/authApi";

export const ForgotPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    await authApi.forgotPassword(email);
    setSent(true);
  };

  return (
    <form className="space-y-4" onSubmit={submit}>
      <h2 className="text-2xl font-bold text-slate-900">{t("auth.forgotTitle")}</h2>
      <Input label={t("forms.email")} value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button type="submit" className="w-full">
        {t("auth.ctaSend")}
      </Button>
      {sent && (
        <div className="rounded-xl bg-emerald-50 p-3 text-sm text-emerald-700">
          {t("auth.ctaSend")} ✓
        </div>
      )}
    </form>
  );
};
