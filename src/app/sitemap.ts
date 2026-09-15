import type { MetadataRoute } from "next";

const baseUrl = "https://projectguardian.example";

const routes = [
  "",
  "/problem",
  "/solution",
  "/technology",
  "/product",
  "/safety-system",
  "/business",
  "/market",
  "/competition",
  "/roadmap",
  "/funding",
  "/about",
  "/faq",
  "/contact",
  "/early-access",
  "/investor-deck",
  "/privacy-notice",
  "/legal-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
