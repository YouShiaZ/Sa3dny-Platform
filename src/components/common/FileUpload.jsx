import { useState } from "react";
import { Upload } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";

export const FileUpload = ({ label, onChange }) => {
  const [preview, setPreview] = useState(null);
  const { t } = useTranslation();

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      onChange?.(file, reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-2">
      {label && <span className="text-sm font-semibold text-slate-800">{label}</span>}
      <label className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-white/70 px-4 py-6 text-center text-sm text-slate-500 hover:border-user-primary/50">
        <Upload className="text-user-primary" size={20} />
        <span>{t("forms.uploadPrompt")}</span>
        <input type="file" className="hidden" onChange={handleFile} />
      </label>
      {preview && (
        <div className="rounded-xl border border-slate-100 bg-white p-2 shadow-inner">
          <img src={preview} alt="Uploaded preview" className="h-32 w-full object-cover rounded-lg" />
        </div>
      )}
      <Button variant="ghost" type="button" onClick={() => setPreview(null)}>
        {t("actions.clear")}
      </Button>
    </div>
  );
};
