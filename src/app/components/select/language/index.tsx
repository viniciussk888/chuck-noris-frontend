import useTranslation from "@/app/hooks/useTranslation";
import { request } from "../../../api/request";

export const LanguageSelect = () => {
  const { setLanguage, language } = useTranslation();
  const onChange = (value: string) => {
    setLanguage(value);
    request.defaults.headers["Accept-Language"] = value;
  };
  return (
    <div className="flex">
      <label htmlFor="states" className="sr-only">
        Selecione o idioma
      </label>
      <select
        value={language}
        onChange={(e) => onChange(e.target.value)}
        defaultValue="pt"
        id="states"
        className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="pt">🇧🇷 Brasil</option>
        <option value="en">🇺🇸 USA</option>
      </select>
    </div>
  );
};
