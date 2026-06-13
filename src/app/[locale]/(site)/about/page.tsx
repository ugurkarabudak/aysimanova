import Link from "next/link";
import { getTranslation } from "@/i18n/server";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await getTranslation(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-container py-24 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center relative z-10">
          <div className="space-y-stack-md">
            <span className="text-secondary-fixed font-label-lg text-label-lg uppercase tracking-widest">
              {t("about.hero.label")}
            </span>
            <h1 className="text-on-primary font-headline-xl text-headline-xl">
              {t("about.hero.title")}
            </h1>
            <p className="text-on-primary-container font-body-lg text-body-lg opacity-90 max-w-xl">
              {t("about.hero.description")}
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-secondary/20 rounded-xl blur-2xl group-hover:bg-secondary/30 transition-all"></div>
            <img
              className="relative rounded-xl shadow-xl w-full h-[400px] object-cover"
              alt="Modern corporate office atrium"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPiGAf50cOWH9EKzRzlFlqwtBXcBDOfwiM70iJIrdaXE-eOhDehkiFObxIyhYY9bn-Lw7vjJtkE14yzvfKeoFsvsqsF3BniiDvqBwlZ1sUSmo207nqck8P3u4cl2lyiSBLfzWLy67wsjeyDoaT35fti5PGiaH8iFal1XI27NAqVXBE264sGgq3FV9lJXV_7i5dov23AKbOvIhQ0mU6pvkeBQdQK0eSBrAc__B3zC135rzygatrw56cfZqIza14AT5_cw7NnbzE-OM"
            />
          </div>
        </div>
      </section>

      {/* About Us intro */}
      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-secondary font-label-lg text-label-lg uppercase tracking-widest mb-4 block">
                {t("about.identity.label")}
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-2 text-primary">
                {t("about.identity.title")}
              </h2>
              <p className="font-body-lg text-body-lg text-secondary mb-6">
                {t("about.identity.subtitle")}
              </p>
              <div className="space-y-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>{t("about.identity.description")}</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  className="w-full h-full object-cover"
                  alt="A high-tech research facility"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDxXiybfgjJVxO3aeDPuf0Rx3T8245HkQ12aTPXmz8J0mceQkRzCSHLG9WSXCJjtifOExfeWWjR4yTTCMzl-AaTBxNAuvQZ_yixwRAg9mVCsyShN6lXI6Qhpsmz0Q3qyDPeNWFQQ4kroYhzt-NZ_ZI_FE52U8J_gdO9nOL3gKPJT3Q09lAftupn21m8k5mUUcMbqq5K919aS6hXHH6JDZaFOmxY1i-2GXOfjf8P4O8Sv1NljVQ8b5yCQJzBI-426mF3PMTdFKPPxU"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary p-8 rounded-xl text-on-secondary hidden md:block">
                <span translate="no" className="material-symbols-outlined text-4xl block mb-2">workspace_premium</span>
                <p className="font-label-lg text-label-lg">{t("about.identity.badge")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl mx-auto text-center space-y-stack-md">
            <span translate="no" className="material-symbols-outlined text-secondary text-5xl">handshake</span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              {t("about.mission.title")}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {t("about.mission.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 space-y-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {t("about.story.title")}
              </h2>
              <div className="h-1 w-20 bg-secondary rounded-full"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("about.story.paragraph1")}
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("about.story.paragraph2")}
              </p>
              <div className="grid grid-cols-1 gap-stack-md pt-stack-md">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-headline-md text-headline-md text-primary">
                    {t("about.story.stat")}
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    {t("about.story.statLabel")}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 relative mt-12 md:mt-0">
              <img
                className="rounded-xl shadow-lg w-full h-[500px] object-cover"
                alt="Scientist examining equipment in laboratory"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyr8A3V2s7wm1smuPqa92DGPKx9gK9vmUgvZivo3C1Ddw0GmVPiZUFv8UodPt17FJCfNF_BxbW2wmUdwOgjLo66W8W3jQ3Zq2QMA_xZsFMKKia4j7ApkmaF3JT4NE4qUhk8qhcYmujsln2uoSIw1T0zmPH4XP12Vq1zOyLgQpUKK_3wrw4wOR88BOSkWn00GSjxHbFXX9dVx3FwZtQdgA9YdRedwu97X_Pq6UaEJxZlPx7J5zkFMQqRpHXN9NqA9Y9qA60xZfOuzI"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-gutter rounded-lg shadow-2xl hidden md:block">
                <p className="text-on-primary font-headline-md text-headline-md">
                  {t("about.story.badge")}
                </p>
                <p className="text-on-primary-container text-label-sm">
                  {t("about.story.badgeLabel")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              {t("about.values.title")}
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md">
              {t("about.values.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span translate="no" className="material-symbols-outlined text-secondary">verified_user</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {t("about.values.quality.title")}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("about.values.quality.description")}
              </p>
            </div>
            <div className="bg-primary-container p-gutter rounded-xl md:col-span-1 md:row-span-2 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-stack-md">
                  <span translate="no" className="material-symbols-outlined text-secondary-fixed">language</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-4">
                  {t("about.values.global.title")}
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container">
                  {t("about.values.global.description")}
                </p>
              </div>
              <img
                className="rounded-lg mt-stack-lg h-48 object-cover"
                alt="Global logistics network visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa5A05Rt853RJz9xgmgSTyUufkpKsLqqnVPQ_hvl8XR_OB-nN6Zete7779WtXzY6iIxNkhhoW1ksLKBsGaIUPwHV3FaThDT1xFsnb4mM6nrPmL4z-4Kpv9vSCpZ3Jon9RUZVFq_JWrFr5sTdXr1nbV0t2DT1U3m6pgFDgZ9T3FdZm0CZitFktsMKhO95D_tlvz2N3D3mkl8dBlksZc40KBp0pNRd0nARbTMCLElaLJSJYAmK_eTr0Ag7X6HiB8BUH4GV3-wT3_QHQ"
              />
            </div>
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span translate="no" className="material-symbols-outlined text-secondary">groups</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {t("about.values.partnership.title")}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("about.values.partnership.description")}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span translate="no" className="material-symbols-outlined text-secondary">eco</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {t("about.values.sustainability.title")}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("about.values.sustainability.description")}
              </p>
            </div>
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span translate="no" className="material-symbols-outlined text-secondary">insights</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                {t("about.values.intelligence.title")}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("about.values.intelligence.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding bg-surface-container-highest">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <div className="bg-background-pure p-stack-lg md:p-24 rounded-3xl shadow-sm border border-outline-variant flex flex-col items-center">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-stack-md">
              {t("about.cta.title")}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
              {t("about.cta.description")}
            </p>
            <div className="flex flex-col md:flex-row gap-stack-md">
              <Link
                href={`/${locale}/contact`}
                className="bg-secondary hover:bg-secondary-container text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg transition-all shadow-md"
              >
                {t("about.cta.button1")}
              </Link>
              <Link
                href={`/${locale}/products`}
                className="border border-primary text-primary hover:bg-primary hover:text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg transition-all"
              >
                {t("about.cta.button2")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
