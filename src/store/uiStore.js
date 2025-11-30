import { create } from "zustand";
import i18n from "../i18n";

const storedLang = localStorage.getItem("sa3dny-lang") || "en";
i18n.changeLanguage(storedLang);
document.documentElement.dir = storedLang === "ar" ? "rtl" : "ltr";
document.documentElement.lang = storedLang;

export const useUIStore = create((set) => ({
  language: storedLang,
  theme: "user",
  setLanguage: (language) => {
    i18n.changeLanguage(language);
    localStorage.setItem("sa3dny-lang", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
    set({ language });
  },
  setTheme: (theme) => set({ theme }),
}));
