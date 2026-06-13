import HeroSlider from "@/components/HeroSlider";
import Link from "next/link";
import { getTranslation } from "@/i18n/server";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { t } = await getTranslation(locale);

  return (
    <>
      <HeroSlider lng={locale} />

      {/* Services */}
      <section className="py-section-padding bg-surface-light" id="services">
        <div className="max-w-container-max mx-auto px-8">
          <div className="text-center mb-16">
            <span className="text-secondary font-label-lg text-label-lg uppercase tracking-widest mb-4 block">
              {t("home.services.label")}
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              {t("home.services.title")}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-2xl mx-auto">
              {t("home.services.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-gutter">
            <div className="md:col-span-3 lg:col-span-4 bg-background-pure p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted flex items-center justify-center rounded-lg mb-6">
                <span translate="no" className="material-symbols-outlined text-secondary">inventory_2</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">
                {t("home.services.sourcing.title")}
              </h3>
              <ul className="space-y-3 text-on-surface-variant font-label-lg">
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.sourcing.item1")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.sourcing.item2")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.sourcing.item3")}
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 lg:col-span-4 bg-background-pure p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted flex items-center justify-center rounded-lg mb-6">
                <span translate="no" className="material-symbols-outlined text-secondary">import_export</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">
                {t("home.services.importExport.title")}
              </h3>
              <ul className="space-y-3 text-on-surface-variant font-label-lg">
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.importExport.item1")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.importExport.item2")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.importExport.item3")}
                </li>
              </ul>
            </div>
            <div className="md:col-span-3 lg:col-span-4 bg-background-pure p-8 rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted flex items-center justify-center rounded-lg mb-6">
                <span translate="no" className="material-symbols-outlined text-secondary">hub</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-primary">
                {t("home.services.consultancy.title")}
              </h3>
              <ul className="space-y-3 text-on-surface-variant font-label-lg">
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.consultancy.item1")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.consultancy.item2")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.consultancy.item3")}
                </li>
                <li className="flex items-center gap-2">
                  <span translate="no" className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                  {t("home.services.consultancy.item4")}
                </li>
              </ul>
            </div>
            <div className="md:col-span-6 lg:col-span-12 bg-primary-container p-8 rounded-xl flex flex-col md:flex-row items-center gap-8 text-on-primary">
              <div className="w-20 h-20 bg-primary flex items-center justify-center rounded-2xl shrink-0">
                <span translate="no" className="material-symbols-outlined text-secondary text-5xl">biotech</span>
              </div>
              <div className="flex-grow">
                <h3 className="font-headline-md text-headline-md mb-2">
                  {t("home.services.formulation.title")}
                </h3>
                <p className="font-body-md opacity-80 mb-4">
                  {t("home.services.formulation.description")}
                </p>
                <div className="flex flex-wrap gap-6">
                  {(["item1", "item2", "item3", "item4"] as const).map((key) => (
                    <span key={key} className="flex items-center gap-2">
                      <span translate="no" className="material-symbols-outlined text-secondary">done</span>
                      {t(`home.services.formulation.${key}`)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-section-padding" id="industries">
        <div className="max-w-container-max mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div className="max-w-xl">
              <span className="text-secondary font-label-lg text-label-lg uppercase tracking-widest mb-4 block">
                {t("home.industries.label")}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                {t("home.industries.title")}
              </h2>
              <p className="text-on-surface-variant mt-4">
                {t("home.industries.description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {(
              [
                { key: "cosmetics", icon: "spa", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBEiDnwlr5-5BhucPDq0-kxveD2-AH6rfzynedUDTkR6WZnnRGwnyY9jOg3S2JvKJ0ryXnWYdKCW_l_VTwzUIR9BH9r-pGzn1XSmg_M-ru3y4QBRBVJi1BNJPrhPa2xlKGIDBbg1otDDp0XgRLcLaTrgNFDmN3vhxl8BZztRcwunoZ-uSctpQ1AbAgmKUDxqEag-JuN4DHyzzBuS8zcbFasp5BJ87wtGh5zmjPW_yjWVm2qBbfN4vMayXGZL64bXOLzVCFv16ItdVw" },
                { key: "chemicals", icon: "science", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuChlGWT-pYLpLjQjm_YjTi9ko4Kac3azPq-z6GIcqNjkwEYjlSA2xQqJ149UCtxwSOYiDWpdSHWoAGFXAjMMY99xLUkkyFhEDKm4ybXbzvqVMQiorcjovC9PAcVD5puBMtYpapLdzzplwhVxZonsfQKJGZi8Jf78dvzCFpRqqlcIJxOzF5Vcs_bXtOeiM9p7L7U-dRWOuw0shmfdXEg7cpqpOxEwdzjCRSzox_SBqogSSFAT3pqs03WKuEIesqnZuZ6FPU0j4wV6EM" },
                { key: "pharma", icon: "pill", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDL8aukSu7Ao3DDReAnALidRvN-Y7nWB6EOsTHPQGvNgVTT-9tU1W9sgl06jLCtlv-GERhAmG3S8JEUtDuGSis4ZPbFkAhlxshBmFRCNl98tWGL2Pr_8BJ2tN9KKDJ6Dt62gKaAmeo9_MKIl9jzq5jorz24zvKpA0vBCafQJXPr71HwcgZouIrtkxjpO8NTJp7XQ85PcpXlUZohXmeb0ptI1RLJJ1tfKvK-EuiH8k8TINY-i9jevAhkA03hnevdP8Y9z4zh0yfw21w" },
                { key: "food", icon: "nutrition", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBs5rKf9Pr-tHjoRWTTk3ZJNQCVD0N7o0o5FeCFwbWlX12QG8Lw0ec1EjrbQFLM-0HMgsocIXKd7OTcKEBOWU3Yx7LvrGZiQf21YGv1kBv4aVSVLEC11DEo7-hewyYgqjoZe72oj4SApHEzpgAauaLGD_BqR5AMRUer58-_mG_3jt0yGH7-y1TPNsuHVc5HqeoaoGiNgUzLW7Wa5NBGg4TL0AITKO0Burt-OzT8AxP06WpJDtmpne9t-ElU-_cjjeRmgIMC0WmZCYk" },
                { key: "medical", icon: "medical_services", src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDtDN2caPqfbu-FIcUzcgC-AN0mHImfu8IueyoMws6LT_mGcIMA_Q_iNt3QU8eY9Pilf6X7kT1Sdr36Es3dbOiAtX0tGLO7T26PjtD41hmeAGxKRtenCmXVMM4sLJfDbyiHxuKsztujmdmDYHfvVReIA_I7C2ouFutYNTNj5UWST5xg3kgUJZXYxX1-zgoBWsPjQ8TqMmhns1aF2To035xkpx2C342PXmVLYldqwkEpIqZElHDUMli7q4DX3SU5eVbG3UFCILrHZ4" },
              ] as const
            ).map(({ key, icon, src }) => (
              <div key={key} className="group relative overflow-hidden rounded-xl aspect-[3/4] cursor-pointer">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  alt={t(`home.industries.${key}`)}
                  src={src}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent flex flex-col justify-end p-6">
                  <span translate="no" className="material-symbols-outlined text-on-primary mb-2">{icon}</span>
                  <h4 className="font-label-lg text-label-lg text-on-primary">
                    {t(`home.industries.${key}`)}
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href={`/${locale}/products`}
              className="inline-flex items-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:brightness-90 transition-all"
            >
              {t("home.industries.cta")}
              <span translate="no" className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-section-padding bg-surface-container" id="contact">
        <div className="max-w-container-max mx-auto px-8">
          <div className="bg-background-pure rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-12 lg:p-16">
              <span className="text-secondary font-label-lg text-label-lg uppercase tracking-widest mb-4 block">
                {t("home.contact.label")}
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-8 text-primary">
                {t("home.contact.title")}
              </h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span translate="no" className="material-symbols-outlined text-secondary">person</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-outline uppercase tracking-wider mb-1">
                      {t("home.contact.founderTitle")}
                    </h4>
                    <p className="font-headline-md text-headline-md text-primary">
                      Uğur Karabudak
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span translate="no" className="material-symbols-outlined text-secondary">mail</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-outline uppercase tracking-wider mb-1">
                      {t("home.contact.emailLabel")}
                    </h4>
                    <a
                      className="font-body-lg text-primary hover:text-secondary transition-colors block"
                      href="mailto:ugurkarabudak@aysimanova.com"
                    >
                      ugurkarabudak@aysimanova.com
                    </a>
                    <a
                      className="font-body-md text-primary hover:text-secondary transition-colors"
                      href="mailto:info@aysimanova.com"
                    >
                      info@aysimanova.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span translate="no" className="material-symbols-outlined text-secondary">location_on</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-outline uppercase tracking-wider mb-1">
                      {t("home.contact.locationLabel")}
                    </h4>
                    <p className="font-body-lg text-primary">
                      {t("home.contact.locationValue")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-surface flex items-center justify-center rounded-full shrink-0">
                    <span translate="no" className="material-symbols-outlined text-secondary">language</span>
                  </div>
                  <div>
                    <h4 className="font-label-lg text-label-lg text-outline uppercase tracking-wider mb-1">
                      {t("home.contact.websiteLabel")}
                    </h4>
                    <a
                      className="font-body-lg text-primary hover:text-secondary transition-colors"
                      href="http://www.aysimanova.com"
                    >
                      www.aysimanova.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-primary-container">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(#3a6a00 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}
              ></div>
              <div
                className="h-full min-h-[400px] w-full bg-cover bg-center grayscale contrast-125 opacity-40"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4uXx9YwjN-iT4XXu3jfheccMOX_WtCBUTMBr7IlvMJv6O2rTGIWAZ1PPJ8Y3Di3Ju7L2BkpOgOS_fM2Lu8z9abDKzupqsG58QhmJCQ8OmmjoxVaKQQBQREWYEAe0dvUNeotQIe2EG64fedjszRG4p1n0VHq30cvqBsX_SP8xZXBuzW5kwZYNieAn3cdTr17t_v_G1-wzViF1-33T3DMCDOQSrhUQH6ZJ1K9EZyQ5EyOfsSmAe-0IRw11uBjySbMGIs2OLoqPO0nM')",
                }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-background-pure p-6 rounded-xl shadow-2xl border border-secondary/20 max-w-sm text-center">
                  <span translate="no" className="material-symbols-outlined text-secondary text-5xl mb-4">
                    location_searching
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-2">
                    {t("home.contact.globalOps")}
                  </h3>
                  <p className="font-body-md text-on-surface-variant">
                    {t("home.contact.globalOpsDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
