import { useEffect } from "react";

const setMeta = (attr, key, content) => {
  if (!content) return;

  let meta = document.querySelector(`meta[${attr}="${key}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute(attr, key);
    document.head.appendChild(meta);
  }

  meta.setAttribute("content", content);
};

const useSEO = ({
  // Basic
  title = "Organic & Fairtrade Spices Coconut Producer | Bio Foods | Sri Lanka",
  description = "Premium organic spices & coconut products from Sri Lanka. Certified fair-trade exporter with sustainable farming practices.",
  keywords = ["biofoods, biofoods pvt ltd, bio foods, bio foods sri lanka, bio food, agroventures, biofoodslk, biofoods sri lanka, biofoodsagro, biofoods agroventures, organic food Sri Lanka, organic spices exporter, coconut products Sri Lanka"],

  // Open Graph
  locale = "en_US",
  type = "website",
  url,
  site_name = "BioFoodsLK",
  image = "https://www.biofoodsagro.com/logo.png",
  image_secure_url = "https://www.biofoodsagro.com/logo.png",
  image_width = "1200",
  image_height = "630",
  image_alt,
  image_type = "image/png",

  // Twitter
  twitter_card = "summary_large_image",
  twitter_title,
  twitter_description,
  twitter_image,
}) => {
  useEffect(() => {
    // Title
    if (title) document.title = title;

    // Meta description
    if (description) {
      setMeta("name", "description", description);
    }

    // 2. Meta Keywords logic
    if (keywords) {
      // Check if keywords is an array, if so, join with commas
      const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : keywords;
      setMeta("name", "keywords", keywordsString);
    }

    // Open Graph
    setMeta("property", "og:locale", locale);
    setMeta("property", "og:type", type);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:site_name", site_name);
    setMeta("property", "og:image", image);
    setMeta("property", "og:image:secure_url", image_secure_url || image);
    setMeta("property", "og:image:width", image_width);
    setMeta("property", "og:image:height", image_height);
    setMeta("property", "og:image:alt", image_alt);
    setMeta("property", "og:image:type", image_type);

    // Twitter
    setMeta("name", "twitter:card", twitter_card);
    setMeta("name", "twitter:title", twitter_title || title);
    setMeta("name", "twitter:description", twitter_description || description);
    setMeta("name", "twitter:image", twitter_image || image);
  }, [
    title,
    description,
    keywords,
    locale,
    type,
    url,
    site_name,
    image,
    image_secure_url,
    image_width,
    image_height,
    image_alt,
    image_type,
    twitter_card,
    twitter_title,
    twitter_description,
    twitter_image,
  ]);
};

export default useSEO;