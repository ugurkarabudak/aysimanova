import Link from "next/link";
import { getTranslation } from "@/i18n/server";

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await getTranslation(locale);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-primary-container py-section-padding overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            className="w-full h-full object-cover"
            alt="Laboratory and logistics hub"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvAb59q6dSyCcbHnBa5BsXCkvovVwqdldKC030c2IsWr1f_vLA5JpAvyS_PFAFqw5JhqqEnxzdXa1wYPgb-Ji3O0-25nkxFVdaogohduvs3Gg6N7AhoC3YlsSRBg-0UehZxdZleBYfkmxAjLOTdBvZ75GUCV9P4Io_hXGDzRVF6STTClLyLZ-8nGzmTxw8ZEBvGB539qN6DAeweSTFNLkMTUInd8dA22l4Xjg2Rolzg-fwAtDEfIhvWdSQdyytFaXbdT3xw15TbRY"
          />
        </div>
        <div className="relative z-10 max-w-container-max mx-auto px-gutter text-center">
          <h1 className="font-headline-xl text-headline-xl text-white mb-stack-md">
            {t("industries.hero.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl mx-auto">
            {t("industries.hero.description")}
          </p>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-section-padding px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Cosmetics & Personal Care (Large) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-lg transition-all duration-300">
            <div className="h-64 md:h-96 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Luxury cosmetic serums and botanical extracts"
                src="/cosmetics-lab.png"
              />
            </div>
            <div className="p-stack-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary">brush</span>
                <h3 className="font-headline-lg text-headline-lg text-text-primary">
                  {t("industries.cosmetics.title")}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant mb-stack-md">
                {t("industries.cosmetics.description")}
              </p>
            </div>
          </div>

          {/* Chemical Raw Materials */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-lg transition-all duration-300">
            <div className="h-48 md:h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Chemical solutions in laboratory test tubes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzDHOSkBz6TIho7q749_tD9n5zDCfdF6VvFZPsdZ_uPOPAKYNLC15A92UewyOiwLJ0RgJ9Ko3SnuUKldZrtwAIXq9cZtfCG3fkNaT4Qb1g_o_rIQoHInZkD6wH3iULHIzZpkP7OmFOl7DBaA_eXbvy2I8NC2Z8NytyOmI_tD8ryAD9VuGovdYg4LDoJ8U1GHsU99YEq7mFGJWbUTpeNb4q_2_6tOkAVXfcMMZZxmd41sqO2OLVgFaAXrxuUCDi2Qft-f-4V1SUA5Y"
              />
            </div>
            <div className="p-stack-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary">science</span>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  {t("industries.chemicals.title")}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("industries.chemicals.description")}
              </p>
            </div>
          </div>

          {/* Pharmaceutical Ingredients */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-lg transition-all duration-300">
            <div className="h-48 md:h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Pharmaceutical capsules and tablets"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYwPQ9r_r4Nk_xIf6zM6Taou586FqfMYvH8K6JYG3KjHX3riqVwxq0qEK8lGqGGuhmR6eRgyIhLml_jWOlIKByt0wVT9ypbddESxsHEBHX-BmE7IcTLvkHe1k63Iv0oUA2_oOfacvcbkmIqu0HgvPyc7fnA5JGFMFL7J0IDIWtptjCB_qWZm5RWg_rwbDBh4t1BSnhLiQ7gicra3lk1LWUKhbGTMpzaLL3O-EC8Y6iqvjiYEP2e0a09bPzsTvRqvQB45rukGNH4rU"
              />
            </div>
            <div className="p-stack-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary">pill</span>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  {t("industries.pharma.title")}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("industries.pharma.description")}
              </p>
            </div>
          </div>

          {/* Food Supplements */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-lg transition-all duration-300">
            <div className="h-48 md:h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Natural powders, seeds, and vitamins"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcRLilrDuqLObrK3rrIpGBjVtTLv5SDbNQMvsMDJhMkJtdlsr0bLEBsogo0n7orFEKWga6GV9FCXA5PHBpo98JwLWH7NDqCBRy63aQsRo6WoO_oxEaiCPVHgtWQSRMb5NzrUoCS2Nt6fxwN4A-BGaSN6UZN-gG3Q3k9dRYEbcvzWs3ippLO42XTr1PGvPNMk0GTgyk5RlBFYgUCrliRe9g-aeehX1ImGjIld96h7pzjvXkIaS4R9VB1UlNdI5a0CL34B1Sw9y4j1s"
              />
            </div>
            <div className="p-stack-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary">nutrition</span>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  {t("industries.food.title")}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("industries.food.description")}
              </p>
            </div>
          </div>

          {/* Medical Products */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-lowest border border-outline-variant hover:shadow-lg transition-all duration-300">
            <div className="h-48 md:h-64 overflow-hidden">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt="Medical diagnostic equipment"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAleUklVUmZtRdTG0S8hR21zLWtgEOmGLl1jr6n0kvpskVQAOVEdVPmGPTw34AxWd3GqopbIhFEMeS1DYNyon60CMQkDyG41iVJHLw76mTgvVviOQnsftRPwyHb10FlQwufHcrOpFbkMqixjWROf6YjTG_0eOILTkw5jFa2WtVnFgO3N6EzRLbD3ObHF4yah8lxrAAV9DLnMOgOcItYJtOha2FvOc_ZhrhuZTChQwge-byzfweWbbqZ83siktLI5yOM9OvOl5hxUxg"
              />
            </div>
            <div className="p-stack-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="material-symbols-outlined text-secondary">medical_services</span>
                <h3 className="font-headline-md text-headline-md text-text-primary">
                  {t("industries.medical.title")}
                </h3>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {t("industries.medical.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Values */}
      <section className="bg-surface-light py-section-padding">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="font-headline-lg text-headline-lg text-text-primary mb-stack-md">
                {t("industries.compliance.title")}
              </h2>
              <div className="space-y-stack-md">
                <div className="flex gap-4">
                  <div className="bg-secondary-container p-2 rounded-lg h-fit">
                    <span className="material-symbols-outlined text-on-secondary-container">verified_user</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-text-primary">
                      {t("industries.compliance.iso.title")}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {t("industries.compliance.iso.description")}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-secondary-container p-2 rounded-lg h-fit">
                    <span className="material-symbols-outlined text-on-secondary-container">public</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-text-primary">
                      {t("industries.compliance.logistics.title")}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {t("industries.compliance.logistics.description")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-section-padding bg-primary text-white">
        <div className="max-w-container-max mx-auto px-gutter text-center">
          <h2 className="font-headline-lg text-headline-lg mb-stack-md">
            {t("industries.cta.title")}
          </h2>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim max-w-xl mx-auto mb-stack-lg">
            {t("industries.cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={`/${locale}/products`}
              className="border border-white/30 text-white px-8 py-3 rounded-lg font-label-lg text-label-lg hover:bg-white/10 transition-all"
            >
              {t("industries.cta.button")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
