import { languages } from "@/i18n/settings";
import LanguageSync from "@/components/LanguageSync";

export function generateStaticParams() {
  return languages.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return (
    <>
      <LanguageSync locale={locale} />
      {children}
    </>
  );
}
