import { getTranslation } from "@/i18n/server";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await getTranslation(locale);

  return (
    <>
      {/* Hero Header */}
      <section className="bg-surface-container-low py-16 px-gutter border-b border-outline-variant/30">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-4">
            {t("contact.hero.title")}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            {t("contact.hero.description")}
          </p>
        </div>
      </section>

      {/* Contact Details */}
      <section className="max-w-container-max mx-auto py-section-padding px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Direct Email CTA */}
          <div className="flex flex-col gap-stack-lg">
            <div className="bg-background-pure p-stack-lg rounded-xl shadow-sm border border-outline-variant/50">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
                {t("contact.getInTouch.title")}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-8">
                {t("contact.getInTouch.description")}
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:ugurkarabudak@aysimanova.com"
                  className="flex items-center gap-3 bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-secondary/10 w-full justify-center"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  ugurkarabudak@aysimanova.com
                </a>
                <a
                  href="mailto:info@aysimanova.com"
                  className="flex items-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary active:scale-95 transition-all w-full justify-center"
                >
                  <span className="material-symbols-outlined text-[20px]">mail</span>
                  info@aysimanova.com
                </a>
              </div>
            </div>

            <div className="bg-background-pure p-stack-lg rounded-xl shadow-sm border border-outline-variant/50">
              <h3 className="font-headline-md text-headline-md text-primary mb-4">
                {t("contact.otherWays.title")}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.aysimanova.com"
                  target="_blank"
                  className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span className="material-symbols-outlined text-secondary">language</span>
                  </div>
                  <span className="font-body-md text-body-md">www.aysimanova.com</span>
                </a>
                <a
                  href="tel:+905417136681"
                  className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span className="material-symbols-outlined text-secondary">phone</span>
                  </div>
                  <span className="font-body-md text-body-md">+90 541 713 66 81</span>
                </a>
                <div className="flex items-center gap-3 text-on-surface-variant">
                  <div className="w-10 h-10 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span className="material-symbols-outlined text-secondary">location_on</span>
                  </div>
                  <span className="font-body-md text-body-md">{t("contact.location")}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Contact Details & Management */}
          <div className="flex flex-col gap-stack-lg">
            {/* Profile Card */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start p-stack-md bg-surface-container rounded-xl border border-outline-variant/30">
              <img
                alt="Uğur Karabudak"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-lg shadow-md border-2 border-background-pure"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbne_X0fhIIkXiLs5wL8On3EKRb0iKTtUMIWjssmx_KqBJU7KUHDAvjssbNfcNYleSssO0n17oOPX3y0N2t5CIC_JgsU5HDtLzU6_Rv_2W1dzGzygKiA78XOcS1ZdhmixqUnqgoJTIcxeRN1QeA98EZWVwRz7Mmz8b1fYenRamsdIDAps-sr8etrSQB7kCWsaBpi2D_eQu5CVofDUQfQ6tnokMiFaGIe2XVrQYIULE_WHfiKdIyCllBo4WxJQiYyDA4y4aBd88PUY"
              />
              <div className="text-center md:text-left pt-2">
                <h3 className="font-headline-md text-headline-md text-primary">
                  Uğur Karabudak
                </h3>
                <p className="font-label-lg text-label-lg text-secondary mb-4">
                  {t("contact.profile.title")}
                </p>
                <div className="space-y-2">
                  <a
                    className="flex items-center justify-center md:justify-start gap-2 text-on-surface-variant hover:text-primary transition-colors"
                    href="mailto:ugurkarabudak@aysimanova.com"
                  >
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                    <span className="font-body-md text-body-md">ugurkarabudak@aysimanova.com</span>
                  </a>
                  <a
                    className="flex items-center justify-center md:justify-start gap-2 text-on-surface-variant hover:text-primary transition-colors"
                    href="https://www.aysimanova.com"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[18px]">language</span>
                    <span className="font-body-md text-body-md">www.aysimanova.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Map */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 px-2">
                <span className="material-symbols-outlined text-secondary text-[24px] mt-1">
                  location_on
                </span>
                <div>
                  <h4 className="font-label-lg text-label-lg text-primary">
                    {t("contact.headquarters")}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {t("contact.location")}
                  </p>
                </div>
              </div>
              <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-inner border border-outline-variant bg-surface-dim group">
                <img
                  alt="Map of Tuzla, Istanbul"
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Pq34qfJY30J5KOrmAU7wYqPLOc32xRyIuq5WxmyvVGDzivVS9VG5vbxmQA7oE4bn_Wu73_NC2TabWLkzqHD66RF2blMVvFctuJ5igUwuGg66HKCyFH6kECE8hZO3-3mf851hZHQb05Irh36YHBThpxHAIoKYg7CnGuqmRHr9Gt1DCfBQ37y4fsdeluqLsn8Oo5XfaGQ2bbo61E8a4sOoEHYP-cnByjKMzDcjwPWezGfOY0KuJn5VzPE169xkixUt2mxbQl8I7Y0"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-primary/10 pointer-events-none">
                  <div className="bg-background-pure p-3 rounded-full shadow-xl">
                    <span
                      className="material-symbols-outlined text-secondary text-[32px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      push_pin
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
