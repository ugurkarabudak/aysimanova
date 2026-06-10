export const projectId =
  (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "88ivh9tp").trim();
export const dataset =
  (process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production").trim().toLowerCase();
export const apiVersion =
  (process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01").trim();
