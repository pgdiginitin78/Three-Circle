import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "3 Ciircles | Premier Infrastructure & Construction Solutions";
const DEFAULT_DESCRIPTION =
  "3 Ciircles is a premier engineering, infrastructure, mining, excavation, and industrial construction contracting company delivering landmark infrastructure projects with precision and excellence.";
const DEFAULT_KEYWORDS =
  "3 Ciircles, Three Circles, infrastructure contractor, civil engineering, industrial construction, excavation, mining services, plant and machinery, heavy construction, India, UAE";

export default function SEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  type = "website",
  image = "/images/favicon/android-chrome-512x512.png",
}) {
  const pageTitle = title
    ? title.includes("3 Ciircles")
      ? title
      : `${title} | 3 Ciircles`
    : DEFAULT_TITLE;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="3 Ciircles" />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
}
