import { useUIStore } from "../../store/uiStore";
import { Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useUIStore();
  const { t } = useTranslation();
  const toggle = () => setLanguage(language === "en" ? "ar" : "en");

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm font-semibold text-slate-700 shadow-inner hover:shadow-card"
    >
      <Globe2 size={16} />
      {language === "en" ? t("common.arabic") : t("common.english")}
    </button>
  );
};
