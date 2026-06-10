import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./settings";
import en from "../../public/locales/en/common.json";
import tr from "../../public/locales/tr/common.json";

const resources = {
  en: { common: en },
  tr: { common: tr },
};

const initI18next = async (lng: string, ns: string | string[]) => {
  const i18nInstance = createInstance();
  await i18nInstance.use(initReactI18next).init({
    ...getOptions(lng, ns),
    resources,
  });
  return i18nInstance;
};

export async function getTranslation(
  lng: string,
  ns: string | string[] = "common"
) {
  const i18nextInstance = await initI18next(lng, ns);
  return {
    t: i18nextInstance.getFixedT(lng, Array.isArray(ns) ? ns[0] : ns),
    i18n: i18nextInstance,
  };
}
