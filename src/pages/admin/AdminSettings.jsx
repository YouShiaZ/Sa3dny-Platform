import { useTranslation } from "react-i18next";
import { Card } from "../../components/common/Card";
import { Input, TextArea } from "../../components/common/Input";
import { Button } from "../../components/common/Button";

export const AdminSettings = () => {
  const { t } = useTranslation();
  return (
    <Card className="space-y-4">
      <h1 className="text-2xl font-bold text-slate-900">{t("admin.settingsTitle")}</h1>
      <div className="grid gap-3 md:grid-cols-2">
        <Input label={t("settings.platformEmail")} placeholder="ops@sa3dny.com" />
        <Input label={t("settings.supportHotline")} placeholder="+20 120 000 1020" />
        <TextArea className="md:col-span-2" label={t("settings.serviceTerms")} placeholder={t("settings.policyHint")} />
      </div>
      <Button tone="admin">{t("actions.save")}</Button>
    </Card>
  );
};
