import Link from "next/link";

export default function GlobalTradePage() {
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
              Strategic Sourcing
            </span>
            <h1 className="font-headline-xl text-headline-xl leading-tight">
              Mastering the Flow of Global Commerce
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary-container max-w-lg">
              Aysima Nova bridges continents, connecting high-demand markets with
              reliable supply chains through precision documentation and expert
              customs handling.
            </p>
          </div>
        </div>
      </section>

      {/* Global Network Bento Grid */}
      <section className="py-section-padding bg-surface-light">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
              Our Global Reach
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
              Operating across 45 countries, we manage complex logistics
              ecosystems to ensure your cargo arrives on time, every time.
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
                    45+ Trading Hubs
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Strategic presence in key economic zones across Asia, Europe,
                    and the Americas.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  inventory_2
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">
                  Warehousing
                </h3>
                <p className="font-body-md text-body-md opacity-80">
                  Temperature-controlled storage solutions for life science
                  products.
                </p>
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary-container text-on-secondary-container rounded-xl p-8 flex flex-col justify-between border border-secondary/20">
              <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-3xl">
                  verified_user
                </span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">
                  Compliance
                </h3>
                <p className="font-body-md text-body-md opacity-80">
                  Full documentation and customs clearance for frictionless
                  trade.
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
                End-to-End Trade Services
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We don&apos;t just move goods; we engineer commercial success
                through precision-focused supply chain management.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="group bg-white p-8 border border-outline-variant rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                package_2
              </span>
              <h4 className="font-headline-md text-headline-md text-primary mb-3">
                Import & Export
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Navigating international borders with a specialized focus on
                pharmaceuticals and high-tech biological materials.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  End-to-end management
                </li>
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Duty optimization
                </li>
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Door-to-door delivery
                </li>
              </ul>
            </div>
            <div className="group bg-white p-8 border border-outline-variant rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                handshake
              </span>
              <h4 className="font-headline-md text-headline-md text-primary mb-3">
                Global Sourcing
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Leveraging our verified network of international suppliers to
                secure competitive pricing for critical ingredients.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Quality assurance audits
                </li>
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Pricing negotiation
                </li>
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Ethical vetting
                </li>
              </ul>
            </div>
            <div className="group bg-white p-8 border border-outline-variant rounded-xl hover:shadow-lg transition-all duration-300">
              <span className="material-symbols-outlined text-4xl text-secondary mb-6">
                description
              </span>
              <h4 className="font-headline-md text-headline-md text-primary mb-3">
                Trade Documentation
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Managing the complex web of certificates, licenses, and permits
                required for high-compliance international trade.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Certificate of Origin
                </li>
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Phyto-sanitary papers
                </li>
                <li className="flex items-center gap-2 font-label-lg text-label-lg text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-sm">
                    check_circle
                  </span>{" "}
                  Customs declarations
                </li>
              </ul>
            </div>
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
              Ready to scale your global operations?
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary/70 mb-10">
              Partner with Aysima Nova to eliminate the friction from your
              international supply chain. Our experts are ready to audit your
              current trade flows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-secondary text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg hover:bg-secondary/90 shadow-lg shadow-secondary/20"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
