export default function Founder() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-container py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(#afc8f0 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative max-w-container-max mx-auto px-8">
          <span className="text-secondary-fixed font-label-lg text-label-lg uppercase tracking-widest mb-4 block">
            Leadership
          </span>
          <h1 className="font-headline-xl text-headline-xl text-on-primary max-w-2xl">
            Meet Our Founder
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary-container mt-4 max-w-xl">
            A chemist and executive who built Aysima Nova on decades of pharmaceutical industry leadership.
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
                  <span className="material-symbols-outlined text-4xl text-secondary-fixed">person</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-primary mb-1">Founder</h2>
                <p className="font-label-lg text-label-lg text-secondary mb-6">Aysima Nova Life Sciences</p>

                <div className="space-y-4 border-t border-outline-variant pt-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">school</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-0.5">Education</p>
                      <p className="font-body-md text-body-md text-on-surface">Chemistry, Sakarya University (2003)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">business_center</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-0.5">Founded</p>
                      <p className="font-body-md text-body-md text-on-surface">Aysima Nova Life Sciences, May 2026</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">science</span>
                    <div>
                      <p className="font-label-sm text-label-sm text-outline uppercase tracking-wider mb-0.5">Expertise</p>
                      <p className="font-body-md text-body-md text-on-surface">Pharmaceutical R&D, CMC, Quality</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["R&D Management", "Analytical Chemistry", "Method Validation", "Stability Studies", "CMC Affairs", "Quality Control"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-success-muted text-secondary rounded-full font-label-sm text-label-sm border border-secondary/20">
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
                  <h2 className="font-headline-lg text-headline-lg text-primary">Founder Profile</h2>
                </div>
                <div className="space-y-5 text-on-surface-variant font-body-md text-body-md leading-relaxed">
                  <p>
                    Graduated from the Chemistry Department of the Faculty of Science and Letters at Sakarya University in 2003, the founder began her professional career within the R&D departments of leading global and domestic pharmaceutical companies.
                  </p>
                  <p>
                    Throughout her career, she specialized in analytical method development, method validation, stability studies, R&D management, and CMC regulatory affairs. Over the years, she held senior leadership positions including R&D Manager, R&D & Quality Control Manager, Qualified Person, and Factory Manager.
                  </p>
                  <p>
                    With extensive experience in the pharmaceutical and chemical industries, she established Aysima Nova in May 2026 to combine scientific excellence, quality-driven management, and a sustainable business vision under her own corporate philosophy.
                  </p>
                  <p>
                    Today, the company operates with a strong commitment to quality, reliability, innovation, and scientific integrity.
                  </p>
                </div>
              </div>

              {/* Career highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: "biotech", label: "R&D Manager" },
                  { icon: "verified_user", label: "Qualified Person" },
                  { icon: "factory", label: "Factory Manager" },
                  { icon: "science", label: "QC Manager" },
                ].map((role) => (
                  <div key={role.label} className="bg-surface-container-low rounded-xl p-5 border border-outline-variant text-center">
                    <span className="material-symbols-outlined text-secondary text-3xl mb-2 block">{role.icon}</span>
                    <p className="font-label-lg text-label-lg text-primary">{role.label}</p>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div className="bg-primary-container rounded-2xl p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 opacity-5"
                  style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-secondary rounded-full" />
                  <h2 className="font-headline-lg text-headline-lg text-on-primary">Founder&apos;s Message</h2>
                </div>
                <blockquote className="space-y-5 text-on-primary-container font-body-md text-body-md leading-relaxed relative">
                  <span className="absolute -top-4 -left-2 text-7xl text-secondary/30 font-serif leading-none select-none">&ldquo;</span>
                  <p className="pl-6">
                    At Aysima Nova, we believe that science is not only a discipline, but also a responsibility.
                  </p>
                  <p className="pl-6">
                    After many years of experience within the pharmaceutical and chemical industries — from laboratory operations to executive management — I founded this company with a clear vision: to build a structure grounded in quality, trust, sustainability, and scientific integrity.
                  </p>
                  <p className="pl-6">
                    Our goal is to create long-term value through reliable products, strong business partnerships, and a continuous commitment to innovation.
                  </p>
                  <p className="pl-6">
                    We are dedicated to contributing to the industry with professionalism, ethical standards, and a passion for science.
                  </p>
                  <p className="pl-6 font-semibold text-on-primary">
                    Thank you for being part of our journey.
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
