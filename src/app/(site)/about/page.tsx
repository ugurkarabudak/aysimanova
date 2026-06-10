import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section: Identity & Impact */}
      <section className="relative bg-primary-container py-24 overflow-hidden">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center relative z-10">
          <div className="space-y-stack-md">
            <span className="text-secondary-fixed font-label-lg text-label-lg uppercase tracking-widest">
              Bridging Global Markets
            </span>
            <h1 className="text-on-primary font-headline-xl text-headline-xl">
              Aysima Nova Life Sciences
            </h1>
            <p className="text-on-primary-container font-body-lg text-body-lg opacity-90 max-w-xl">
              A global sourcing and trading powerhouse operating at the
              intersection of cosmetics, personal care, chemicals,
              pharmaceutical raw materials and API&apos;s.
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
                Our Identity
              </span>
              <h2 className="font-headline-lg text-headline-lg mb-2 text-primary">
                About Us
              </h2>
              <p className="font-body-lg text-body-lg text-secondary mb-6">
                We add value with our experiences.
              </p>
              <div className="space-y-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                <p>
                  Aysima Nova Life Sciences — beyond sourcing and trading, we
                  offer technical consultancy based on 20+ years in
                  pharmaceutical sector experiences; helping businesses create
                  innovative and high-quality products.
                </p>
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
                <span className="material-symbols-outlined text-4xl block mb-2">
                  workspace_premium
                </span>
                <p className="font-label-lg text-label-lg">
                  Certified Global Standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-section-padding bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="max-w-3xl mx-auto text-center space-y-stack-md">
            <span className="material-symbols-outlined text-secondary text-5xl">
              handshake
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Our Mission
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Our mission is to build long-term partnerships based on trust,
              quality, and consistency. We specialize in international
              procurement, import-export operations, and supply chain management,
              ensuring that essential products reach global markets with absolute
              reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story: Asymmetric Layout */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-7 space-y-stack-md">
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Precision in Every Procurement
              </h2>
              <div className="h-1 w-20 bg-secondary rounded-full"></div>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Aysima Nova Life Sciences was founded on the principle of
                scientific precision applied to global logistics. We don&apos;t
                just trade; we curate. Every chemical compound, cosmetic
                ingredient, and pharmaceutical raw material passes through a
                rigorous vetting process.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Our team of industry experts leverages decades of experience in
                supply chain management to navigate the complexities of
                international trade, providing our partners with a seamless path
                from source to destination.
              </p>
              <div className="grid grid-cols-1 gap-stack-md pt-stack-md">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-headline-md text-headline-md text-primary">
                    24/7
                  </p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">
                    Supply Monitoring
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
                  GMP Approved
                </p>
                <p className="text-on-primary-container text-label-sm">
                  Manufacturers
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values: Bento Grid */}
      <section className="py-section-padding bg-surface-container-low">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary">
Aysima Nova Life Sciences
            </h2>
            <p className="text-on-surface-variant font-body-md text-body-md">
              The principles that guide our global operations in the life sciences sector.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span className="material-symbols-outlined text-secondary">
                  verified_user
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Unwavering Quality
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We ensure all pharmaceutical and chemical raw materials meet
                strict international regulatory standards without compromise.
              </p>
            </div>
            <div className="bg-primary-container p-gutter rounded-xl md:col-span-1 md:row-span-2 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-stack-md">
                  <span className="material-symbols-outlined text-secondary-fixed">
                    language
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-primary mb-4">
                  Global Reach, Local Depth
                </h3>
                <p className="font-body-md text-body-md text-on-primary-container">
                  Our network spans continents, but our knowledge of local
                  regulations and logistics allows for surgical precision in
                  supply chain execution.
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
                <span className="material-symbols-outlined text-secondary">
                  groups
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Human Partnership
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Technology drives our efficiency, but trust drives our business.
                We value the long-term relationships we build with every client.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span className="material-symbols-outlined text-secondary">
                  eco
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Sustainability
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Committed to ethical sourcing and sustainable logistics to
                minimize environmental impact across the life sciences sector.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-gutter rounded-xl border border-outline-variant hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-success-muted rounded-lg flex items-center justify-center mb-stack-md">
                <span className="material-symbols-outlined text-secondary">
                  insights
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Market Intelligence
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Providing our partners with actionable data and market trends to
                navigate the volatile global trading landscape.
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
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-stack-lg">
              Connect with our experts today to discuss your procurement needs
              and how Aysima Nova can streamline your global operations.
            </p>
            <div className="flex flex-col md:flex-row gap-stack-md">
              <Link
                href="/contact"
                className="bg-secondary hover:bg-secondary-container text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg transition-all shadow-md"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/products"
                className="border border-primary text-primary hover:bg-primary hover:text-on-primary px-8 py-4 rounded-lg font-label-lg text-label-lg transition-all"
              >
                View Product Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
