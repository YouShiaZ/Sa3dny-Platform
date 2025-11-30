import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "../../components/common/Card";
import { FileUpload } from "../../components/common/FileUpload";
import { Button } from "../../components/common/Button";

export const ClientIDVerification = () => {
  const { t } = useTranslation();
  const [front, setFront] = useState(null);
  const [back, setBack] = useState(null);

  return (
    <Card className="space-y-4">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">{t("client.idVerificationTitle")}</h2>
        <p className="text-sm text-slate-600">{t("client.idRequirement")}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <FileUpload label={t("forms.idFront")} onChange={(_, preview) => setFront(preview)} />
        <FileUpload label={t("forms.idBack")} onChange={(_, preview) => setBack(preview)} />
      </div>
      <Button disabled={!front || !back}>{t("actions.submit")}</Button>
    </Card>
  );
};
