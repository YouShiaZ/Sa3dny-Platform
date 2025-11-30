import { useTranslation } from "react-i18next";
import { Input, TextArea } from "../../components/common/Input";
import { Card } from "../../components/common/Card";
import { Button } from "../../components/common/Button";

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold text-slate-900">{t("contact.title")}</h1>
        <p className="text-slate-700">{t("contact.subtitle")}</p>
        <Card className="space-y-2">
          <div className="text-sm text-slate-600">{t("contact.phone")}: +20 120 000 1020</div>
          <div className="text-sm text-slate-600">{t("contact.whatsapp")}: +20 120 000 1020</div>
          <div className="text-sm text-slate-600">{t("contact.email")}: care@sa3dny.com</div>
        </Card>
      </div>
      <Card className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">{t("contact.formTitle")}</h2>
        <Input label={t("forms.name")} placeholder={t("forms.name")} />
        <Input label={t("forms.email")} placeholder={t("forms.email")} />
        <Input label={t("forms.phone")} placeholder={t("forms.phone")} />
        <TextArea label={t("forms.notes")} placeholder={t("contact.messagePlaceholder")} />
        <Button>{t("actions.submit")}</Button>
      </Card>
    </div>
  );
};
