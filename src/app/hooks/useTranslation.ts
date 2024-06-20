import { useLanguage } from '../context/LanguageContext';

const useTranslation = () => {
  const { translations, setLanguage, language } = useLanguage();

  const t = (key: string) => {
    return translations[key] || key;
  };

  return {
    t,
    setLanguage,
    language,
  };
};

export default useTranslation;
