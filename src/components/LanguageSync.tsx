"use client";

import { useEffect } from "react";

export default function LanguageSync({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
