"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { SanityProduct, SanityCategory } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

const BADGE_STYLES: Record<string, { bg: string; text: string; label: string }> = {
  "in-stock": { bg: "bg-secondary", text: "text-on-secondary", label: "In Stock" },
  "new-arrival": { bg: "bg-primary", text: "text-on-primary", label: "New Arrival" },
  "best-seller": { bg: "bg-tertiary-container", text: "text-on-tertiary-container", label: "Best Seller" },
};

export default function ProductsGrid({
  products,
  categories,
}: {
  products: SanityProduct[];
  categories: SanityCategory[];
}) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let result = products;

    if (activeCategory) {
      result = result.filter((p) => p.category?._id === activeCategory);
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description?.toLowerCase().includes(q) ||
          p.tags?.some((t) => t.toLowerCase().includes(q)) ||
          p.category?.name?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [products, search, activeCategory]);

  return (
    <>
      {/* Search + filters */}
      <div className="mb-10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        {/* Search input */}
        <div className="relative w-full md:max-w-md">
          <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]">
            search
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-outline-variant bg-white font-body-md text-body-md text-on-surface focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          )}
        </div>

        {/* Category pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-lg font-label-lg text-label-lg transition-all ${
              !activeCategory
                ? "bg-primary text-on-primary shadow-sm"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat._id}
              onClick={() => setActiveCategory(cat._id)}
              className={`px-4 py-2 rounded-lg font-label-lg text-label-lg transition-all ${
                activeCategory === cat._id
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p className="font-label-sm text-label-sm text-outline mb-6">
        {filtered.length} product{filtered.length !== 1 ? "s" : ""} found
        {activeCategory && ` in ${categories.find((c) => c._id === activeCategory)?.name}`}
        {search && ` matching "${search}"`}
      </p>

      {/* Product grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-surface-container-low rounded-2xl">
          <span className="material-symbols-outlined text-6xl text-outline/40 mb-4 block">
            inventory_2
          </span>
          <h3 className="font-headline-md text-headline-md text-primary mb-2">
            No products found
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Try adjusting your search or filter criteria.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setActiveCategory(null);
            }}
            className="text-secondary font-label-lg text-label-lg hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {/* CTA */}
      <div className="mt-16 text-center">
        <p className="font-body-md text-body-md text-on-surface-variant mb-6">
          Don&apos;t see what you&apos;re looking for? We offer custom sourcing
          and manufacturing services.
        </p>
        <Link
          href="/contact"
          className="bg-secondary text-on-secondary px-10 py-4 rounded-lg font-label-lg text-label-lg hover:opacity-90 transition-all shadow-md inline-block"
        >
          Contact Procurement Team
        </Link>
      </div>
    </>
  );
}

function ProductCard({ product }: { product: SanityProduct }) {
  const badge = product.badge ? BADGE_STYLES[product.badge] : null;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-outline-variant hover:shadow-xl transition-shadow duration-300 flex flex-col">
      {/* Image */}
      <div className="h-56 overflow-hidden relative bg-surface-container-low">
        {product.image ? (
          <img
            className="w-full h-full object-cover"
            alt={product.name}
            src={urlFor(product.image).width(600).height(400).url()}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-outline/30">
              science
            </span>
          </div>
        )}
        {badge && (
          <span
            className={`absolute top-4 right-4 ${badge.bg} ${badge.text} text-label-sm font-label-sm px-3 py-1 rounded-full`}
          >
            {badge.label}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2 gap-2">
          <h4 className="font-headline-md text-headline-md text-primary leading-tight">
            {product.name}
          </h4>
          {product.category && (
            <span className="text-secondary font-label-lg text-label-lg shrink-0">
              {product.category.name}
            </span>
          )}
        </div>

        {product.description && (
          <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">
            {product.description}
          </p>
        )}

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full bg-success-muted text-secondary font-label-sm text-label-sm border border-secondary/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Specs */}
        {product.specs && product.specs.length > 0 && (
          <div className="border-t border-outline-variant pt-4 mb-4 mt-auto">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex justify-between text-label-sm font-label-sm text-on-surface-variant mb-1.5 last:mb-0"
              >
                <span>{spec.label}</span>
                <span className="text-primary font-bold">{spec.value}</span>
              </div>
            ))}
          </div>
        )}

        <Link
          href="/contact"
          className="w-full mt-auto bg-white border-2 border-primary text-primary py-3 rounded-lg font-label-lg text-label-lg hover:bg-primary hover:text-on-primary transition-all active:scale-95 text-center block"
        >
          Request Quote
        </Link>
      </div>
    </div>
  );
}
