import { getTranslation } from "@/i18n/server";

export default async function Founder({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await getTranslation(locale);

  const tags = t("founder.sidebar.tags", { returnObjects: true }) as string[];

  const careerRoles = [
    { icon: "biotech", key: "rdManager" },
    { icon: "verified_user", key: "qualifiedPerson" },
    { icon: "factory", key: "factoryManager" },
    { icon: "science", key: "qcManager" },
  ] as const;

  return (
    <>
      {/* Hero */}
      <section className="bg-primary-container py-20 overflow-hidden relative">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#afc8f0 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative max-w-container-max mx-auto px-8">
          <span className="text-secondary-fixed font-label-lg text-label-lg uppercase tracking-widest mb-4 block">
            {t("founder.hero.label")}
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary max-w-2xl">
            {t("founder.hero.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container mt-4 max-w-xl">
            {t("founder.hero.description")}
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-section-padding">
        <div className="max-w-container-max mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* Sidebar card */}
            <div className="lg:col-span-4">
              <div className="bg-surface-container-low rounded-2xl p-8 border border-outline-variant sticky top-28">
                <div className="w-20 h-20 bg-primary-container rounded-2xl flex items-center justify-center mb-6">
                  <span translate="no" className="material-symbols-outlined text-4xl text-secondary-fixed">person</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-1">
                  {t("founder.sidebar.role")}
                </h2>
                <p className="font-label-lg text-label-lg text-secondary mb-6">
                  {t("founder.sidebar.company")}
                </p>

                <div className="space-y-4 border-t border-outline-variant pt-6">
                  <div className="flex items-start gap-3">
                    <span translate="no" className="material-symbols-outlined text-secondary text-[20px] mt-0.5">school</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-0.5">
                        {t("founder.sidebar.educationLabel")}
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        {t("founder.sidebar.educationValue")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span translate="no" className="material-symbols-outlined text-secondary text-[20px] mt-0.5">business_center</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-0.5">
                        {t("founder.sidebar.foundedLabel")}
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        {t("founder.sidebar.foundedValue")}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span translate="no" className="material-symbols-outlined text-secondary text-[20px] mt-0.5">science</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-0.5">
                        {t("founder.sidebar.expertiseLabel")}
                      </p>
                      <p className="font-body-md text-body-md text-on-surface">
                        {t("founder.sidebar.expertiseValue")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-success-muted text-secondary rounded-full font-label-sm text-label-sm border border-secondary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-8 space-y-12">

              {/* Profile */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-secondary rounded-full" />
                  <h2 className="font-headline-lg text-headline-lg text-primary">
                    {t("founder.profile.title")}
                  </h2>
                </div>
                <div className="space-y-5 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>{t("founder.profile.p1")}</p>
                  <p>{t("founder.profile.p2")}</p>
                  <p>{t("founder.profile.p3")}</p>
                  <p>{t("founder.profile.p4")}</p>
                </div>
              </div>

              {/* Career highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {careerRoles.map((role) => (
                  <div
                    key={role.key}
                    className="bg-surface-container-low rounded-xl p-5 border border-outline-variant text-center"
                  >
                    <span translate="no" className="material-symbols-outlined text-secondary text-3xl mb-2 block">
                      {role.icon}
                    </span>
                    <p className="font-label-lg text-label-lg text-primary">
                      {t(`founder.career.${role.key}`)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="bg-primary-container rounded-2xl p-10 relative overflow-hidden">
                <div
                  className="absolute top-0 right-0 w-48 h-48 opacity-5"
                  style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-secondary rounded-full" />
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">
                    {t("founder.message.title")}
                  </h2>
                </div>
                <blockquote className="space-y-5 text-on-primary-container font-body-md text-body-md leading-relaxed relative">
                  <span className="absolute -top-4 -left-2 text-7xl text-secondary/30 font-serif leading-none select-none">&ldquo;</span>
                  <p className="pl-6">{t("founder.message.p1")}</p>
                  <p className="pl-6">{t("founder.message.p2")}</p>
                  <p className="pl-6">{t("founder.message.p3")}</p>
                  <p className="pl-6">{t("founder.message.p4")}</p>
                  <p className="pl-6 font-semibold text-on-primary">
                    {t("founder.message.p5")}
                  </p>
                </blockquote>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
