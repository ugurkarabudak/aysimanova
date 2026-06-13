import Link from "next/link";
import { getTranslation } from "@/i18n/server";

export default async function GlobalTradePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await getTranslation(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-container text-on-primary min-h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Container port at dusk"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdhIBxdkyzJnFJP8djT-kFDjNi7l_00YIW5PzARHZRqcxgGJPVlIWTfgihQMQNIkl8FVwMRRPEuerFqmatpd9Gq_34loFmfI_qw7_5Vliwxtl_r9p7vcJz8On72vxA2iuSv9eNhmNWc3AN-bQVpBYPJiXNsPGjJWbg_Jnv5XZVoKWWOgZj0VquAyulhXUbUNyCFC1CHl4nsaoh1D19JsYvaA2JhBiKbdvzilTi7rKv-ra51TuFt8_GQCA17vbvT2uXsb3gMpiQndg"
          />
        </div>
        <div className="relative w-full max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div className="space-y-stack-md">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-wider">
              {t("globalTrade.hero.label")}
            </span>
            <h1 className="font-headline-xl text-headline-xl leading-tight">
              {t("globalTrade.hero.title")}
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-lg">
              {t("globalTrade.hero.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Global Network Bento Grid */}
      <section className="py-section-padding bg-surface-light">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              {t("globalTrade.network.title")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              {t("globalTrade.network.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 h-auto md:h-[600px]">
            <div className="md:col-span-8 md:row-span-2 bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden relative group">
              <div className="absolute inset-0 z-0 bg-surface-container-low">
                <img
                  className="w-full h-full object-cover opacity-30 grayscale"
                  alt="Global shipping network map"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsTNG9QYO_6XRuZBRlylvSYT5XCuVPzwXZP78V8BQBSCMfzVoVvFyGKOdSF74qsxFRVarCYHuFoshlFzo09Ob_pggpzvIyDmadebjQbRBJN9qsmY4SxhXR1HNai7dmtUMHy84QO9WWa0wulwb537Gjk4GfOAE6JLWw4XoitIsaZjJHVNA3dUFpgd3cg_448FquPGiu6pvB3tPm7xh3yqvjq8zCQmLQ7hWts7i5UEUWDemEvcDLFROXA_noBMwYyhdc1Xu79nQLcRs"
                />
              </div>
              <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-lg max-w-sm border border-outline-variant">
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">
                    {t("globalTrade.network.hubs")}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {t("globalTrade.network.hubsDesc")}
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <span translate="no" className="material-symbols-outlined text-secondary text-3xl">inventory_2</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">
                  {t("globalTrade.network.warehousing")}
                </h3>
                <p className="font-body-md text-body-md opacity-80">
                  {t("globalTrade.network.warehousingDesc")}
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary-container text-on-secondary-container rounded-xl p-8 flex flex-col justify-between border border-secondary/20">
              <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center">
                <span translate="no" className="material-symbols-outlined text-secondary text-3xl">verified_user</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">
                  {t("globalTrade.network.compliance")}
                </h3>
                <p className="font-body-md text-body-md opacity-80">
                  {t("globalTrade.network.complianceDesc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-section-padding bg-background-pure">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row gap-stack-lg items-end justify-between mb-12">
            <div className="max-w-xl">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                {t("globalTrade.services.title")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("globalTrade.services.description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {(
              [
                {
                  key: "importExport",
                  icon: "package_2",
                  items: ["item1", "item2", "item3"],
                },
                {
                  key: "sourcing",
                  icon: "handshake",
                  items: ["item1", "item2", "item3"],
                },
                {
                  key: "documentation",
                  icon: "description",
                  items: ["item1", "item2", "item3"],
                },
              ] as const
            ).map(({ key, icon, items }) => (
              <div
                key={key}
                className="group bg-white p-8 border border-outline-variant rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <span translate="no" className="material-symbols-outlined text-4xl text-secondary mb-6">{icon}</span>
                <h4 className="font-headline-md text-headline-md text-primary mb-3">
                  {t(`globalTrade.services.${key}.title`)}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {t(`globalTrade.services.${key}.description`)}
                </p>
                <ul className="space-y-3 mb-8">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                      <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                      {t(`globalTrade.services.${key}.${item}`)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-section-padding px-gutter">
        <div className="max-w-container-max mx-auto bg-primary rounded-3xl overflow-hidden relative">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none">
            <img
              className="w-full h-full object-cover"
              alt="Light trails at logistics port at night"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfTDHUAi6DxzYeXv_5l3LGdMwu4z-7_KmM9qpAcPY1KhXN4dpuVwT79pEycrsytENS6O3L2tCcK4r1vOizI8LhMKLwC65LSacS9xqIaC3aP0UulScxPt9GgVq91AXXCRYAk7anFsqcEKUQe-8oKU_CSyJgA7daoVZr-Bd5raZ2eB1707j3aS2pK0L7NFFKXhCXpAjOWA30iCD1-wPVXc7Z47YzAq7S8sqeOKLiFWsji3X8M4VmhwzVxpstqSNo4iTsUHRzaZW5_Ro"
            />
          </div>
          <div className="relative z-10 p-12 md:p-20 md:w-3/5 text-on-primary">
            <h2 className="font-headline-xl text-headline-xl mb-6">
              {t("globalTrade.cta.title")}
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/70 mb-10">
              {t("globalTrade.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/${locale}/contact`}
                className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:bg-secondary/90 shadow-lg shadow-secondary/20"
              >
                {t("globalTrade.cta.button")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
