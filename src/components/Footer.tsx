import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-container text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-section-padding py-stack-lg max-w-container-max mx-auto">
        <div className="col-span-1 md:col-span-1">
          <span className="font-headline-md text-headline-md font-bold text-background-pure block mb-6">
            Aysima Nova
          </span>
          <p className="font-body-md text-surface-variant mb-6">
            Your trusted partner in life sciences, providing high-quality raw
            materials and global trading solutions.
          </p>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg font-bold mb-6 text-on-primary uppercase tracking-widest">
            Quick Links
          </h4>
          <ul className="space-y-4">
            <li>
              <Link
                href="/about"
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                Industries
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/global-trade"
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                Global Trade
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-surface-variant hover:text-secondary-fixed transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg font-bold mb-6 text-on-primary uppercase tracking-widest">
            Services
          </h4>
          <ul className="space-y-4">
            <li className="text-surface-variant">Global Sourcing</li>
            <li className="text-surface-variant">Import &amp; Export</li>
            <li className="text-surface-variant">Technical Support</li>
            <li className="text-surface-variant">R&amp;D Consulting</li>
          </ul>
        </div>

        <div>
          <h4 className="font-label-lg text-label-lg font-bold mb-6 text-on-primary uppercase tracking-widest">
            Contact Us
          </h4>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-surface-variant">
              <span className="material-symbols-outlined text-label-lg">
                mail
              </span>
              <span className="font-body-md">ugurkarabudak@aysimanova.com</span>
            </div>
            <div className="flex items-center gap-2 text-surface-variant">
              <span className="material-symbols-outlined text-label-lg">
                location_on
              </span>
              <span className="font-body-md">Tuzla / İstanbul, Turkey</span>
            </div>
            <div className="flex items-center gap-2 text-surface-variant">
              <span className="material-symbols-outlined text-label-lg">
                language
              </span>
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
              &copy; AYSİMA NOVA LİFE SCİENCES KİMYA VE DIŞ TİCARET LİMİTED ŞİRKETİ. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-2 font-label-sm text-label-sm text-surface-variant">
            <span className="material-symbols-outlined text-xs">public</span>
            Global Excellence in Sourcing
          </div>
        </div>
      </div>
    </footer>
  );
}
