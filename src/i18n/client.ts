"use client";

import i18next from "i18next";
import { initReactI18next, useTranslation as useTranslationOrg } from "react-i18next";
import { useEffect, useState } from "react";
import { fallbackLng, getOptions } from "./settings";
import en from "../../public/locales/en/common.json";
import tr from "../../public/locales/tr/common.json";

const resources = {
  en: { common: en },
  tr: { common: tr },
};

i18next.use(initReactI18next).init({
  ...getOptions(),
  lng: fallbackLng,
  resources,
});

export function useTranslation(
  lng: string,
  ns?: string,
  options?: { keyPrefix?: string }
) {
  const ret = useTranslationOrg(ns, options);
  const { i18n } = ret;
  const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);

  useEffect(() => {
    if (activeLng === lng) return;
    setActiveLng(lng);
  }, [activeLng, lng]);

  useEffect(() => {
    if (!lng || i18n.resolvedLanguage === lng) return;
    i18n.changeLanguage(lng);
  }, [lng, i18n]);

  return ret;
}
