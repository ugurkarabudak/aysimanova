import { client } from "./client";

export interface SanityCategory {
  _id: string;
  name: string;
  slug: { current: string };
  description?: string;
}

export interface SanitySpec {
  label: string;
  value: string;
}

export interface SanityProduct {
  _id: string;
  name: string;
  slug: { current: string };
  category: SanityCategory;
  description?: string;
  image?: { asset: { _ref: string } };
  specs?: SanitySpec[];
  tags?: string[];
  badge?: string;
}

export async function getCategories(): Promise<SanityCategory[]> {
  return client.fetch(
    `*[_type == "category"] | order(order asc) { _id, name, slug, description }`
  );
}

export async function getProducts(): Promise<SanityProduct[]> {
  return client.fetch(
    `*[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      slug,
      category->{ _id, name, slug, description },
      description,
      image,
      specs,
      tags,
      badge
    }`
  );
}
