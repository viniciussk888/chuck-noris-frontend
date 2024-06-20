"use client"
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import en from "../../../public/locales/en/common.json";
import pt from "../../../public/locales/pt/common.json";

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  translations: Record<string, string>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const languages: Record<string, Record<string, string>> = {
  en,
  pt,
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>("pt");
  const [translations, setTranslations] = useState<Record<string, string>>(
    languages[language]
  );

  useEffect(() => {
    setTranslations(languages[language]);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
