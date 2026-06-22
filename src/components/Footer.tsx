import Link from "next/link";
import { getTranslation } from "@/i18n/server";

export default async function Footer({ lng }: { lng: string }) {
  const { t } = await getTranslation(lng);

  return (
    <footer className="bg-primary-container text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-section-padding py-stack-lg max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="font-headline-md text-headline-md font-bold text-background-pure block mb-6">
            {t("footer.brand")}
          </span>
          <p className="font-body-md text-surface-variant mb-6">
            {t("footer.description")}
          </p>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg font-bold mb-6 text-on-primary uppercase tracking-widest">
            {t("footer.quickLinks.title")}
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href={`/${lng}/about`}
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                {t("footer.quickLinks.about")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lng}/industries`}
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                {t("footer.quickLinks.industries")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lng}/products`}
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                {t("footer.quickLinks.products")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lng}/global-trade`}
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                {t("footer.quickLinks.globalTrade")}
              </Link>
            </li>
            <li>
              <Link
                href={`/${lng}/contact`}
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                {t("footer.quickLinks.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg font-bold mb-6 text-on-primary uppercase tracking-widest">
            {t("footer.services.title")}
          </h4>
          <ul className="space-y-4">
            <li className="text-surface-variant">{t("footer.services.sourcing")}</li>
            <li className="text-surface-variant">{t("footer.services.importExport")}</li>
            <li className="text-surface-variant">{t("footer.services.techSupport")}</li>
            <li className="text-surface-variant">{t("footer.services.rdConsulting")}</li>
            <li className="text-surface-variant">{t("footer.services.sciTechAdvisory")}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg font-bold mb-6 text-on-primary uppercase tracking-widest">
            {t("footer.contact.title")}
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-surface-variant">
              <span translate="no" className="material-symbols-outlined text-label-lg">mail</span>
              <span className="font-body-md">ugurkarabudak@aysimanova.com</span>
            </div>
            <div className="flex items-center gap-2 text-surface-variant">
              <span translate="no" className="material-symbols-outlined text-label-lg">location_on</span>
              <span className="font-body-md">{t("footer.contact.location")}</span>
            </div>
            <div className="flex items-center gap-2 text-surface-variant">
              <span translate="no" className="material-symbols-outlined text-label-lg">language</span>
              <a
                href="https://www.aysimanova.com"
                className="font-body-md hover:text-secondary-fixed transition-colors"
              >
                www.aysimanova.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-8 pt-8 border-t border-outline/20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pb-8">
          <div className="flex flex-col gap-1">
            <p className="font-label-sm text-label-sm text-surface-variant">
              {t("footer.copyright")}
            </p>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-surface-variant">
            <span translate="no" className="material-symbols-outlined text-xs">public</span>
            {t("footer.tagline")}
          </div>
        </div>
      </div>
    </footer>
  );
}
