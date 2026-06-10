import Link from "next/link";
import { getProducts, getCategories } from "@/sanity/queries";
import ProductsGrid from "@/components/ProductsGrid";

export const revalidate = 60;

export default async function ProductsPage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const hasProducts = products.length > 0;

  return (
    <>
      {/* Hero Section */}
      <header className="relative bg-surface-container py-section-padding">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
          <div>
            <span className="font-label-lg text-label-lg text-secondary tracking-widest uppercase mb-stack-sm block">
              Global Life Sciences Catalog
            </span>
            <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-md">
              Advanced Solutions for Modern Science
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
              Explore our curated selection of high-purity raw materials,
              API&apos;s and pharma grade products, cosmetical materials and food
              supplements engineered for the highest standards of safety and
              efficacy.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Pharmaceutical capsules and laboratory glassware"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-IeMhTjaxXiptuEd65OHhfY2_5aFvVKlZwCam9XI9HxiwlZc-fzf5IIm5HRfXaK0qlpO0Di98w11vp8guEOJrz3_O3KWs2deKrp6AygsayBGlE2E8v0KiY-xcuhOX2R0ooepmloNSOL1WVx8mYPHjtJfQo5h7hZ6FIVNsmNVlOW4CwCJM3dcIxFxj8QlJ6ZO-nibOxm9bi-790wisPh74QeQuRio5YtRqEVwfzaB41s1IfLJeqBWFoipyNNXEbmmyx6ply9Z-9VE"
            />
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section className="py-section-padding bg-surface-light">
        <div className="max-w-container-max mx-auto px-gutter">
          <div className="mb-8">
            <h2 className="font-headline-lg text-headline-lg text-primary">
              Products
            </h2>
          </div>

          {hasProducts ? (
            <ProductsGrid products={products} categories={categories} />
          ) : (
            <div className="text-center py-20 bg-surface-container-low rounded-2xl">
              <span className="material-symbols-outlined text-6xl text-outline/40 mb-4 block">
                inventory_2
              </span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">
                Products Coming Soon
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Our product catalog is being prepared. Please check back soon or
                contact us for specific inquiries.
              </p>
              <Link
                href="/contact"
                className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all shadow-md inline-block"
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Quality & Compliance Banner */}
      <section className="bg-primary text-on-primary py-section-padding">
        <div className="max-w-container-max mx-auto px-gutter grid grid-cols-1 md:grid-cols-4 gap-stack-lg text-center">
          <div>
            <span className="material-symbols-outlined text-4xl mb-4 text-secondary-fixed">
              verified_user
            </span>
            <h5 className="font-headline-md text-headline-md">ISO 9001:2015</h5>
            <p className="font-label-sm text-label-sm opacity-80 mt-2">
              Quality Management Certified
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-4xl mb-4 text-secondary-fixed">
              public
            </span>
            <h5 className="font-headline-md text-headline-md">Global Reach</h5>
            <p className="font-label-sm text-label-sm opacity-80 mt-2">
              Distribution in 45+ Countries
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-4xl mb-4 text-secondary-fixed">
              biotech
            </span>
            <h5 className="font-headline-md text-headline-md">Lab Tested</h5>
            <p className="font-label-sm text-label-sm opacity-80 mt-2">
              Internal Purity Verification
            </p>
          </div>
          <div>
            <span className="material-symbols-outlined text-4xl mb-4 text-secondary-fixed">
              description
            </span>
            <h5 className="font-headline-md text-headline-md">Full Dossier</h5>
            <p className="font-label-sm text-label-sm opacity-80 mt-2">
              Complete Regulatory Support
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
