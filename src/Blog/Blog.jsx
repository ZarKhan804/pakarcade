
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

const SITE_URL = "https://www.pakarcades.com";
const PAGE_URL = `${SITE_URL}/blog`;

const TITLE = "Pak Arcade Blog – Gaming News, Guides & Updates";

const DESCRIPTION =
  "Explore the Pak Arcade Blog for gaming news, game updates, useful guides, mobile gaming information, Pak Arcade Game resources and helpful gaming tips.";

const SOCIAL_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10";

const Blog = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Pak Arcade Blog",
    description: DESCRIPTION,
    url: PAGE_URL,
    publisher: {
      "@type": "Organization",
      name: "Pak Arcade",
      url: SITE_URL,
    },
  };

  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>{TITLE}</title>

        <meta name="description" content={DESCRIPTION} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="Pak Arcade" />

        <link rel="canonical" href={PAGE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content="Pak Arcade" />
        <meta property="og:image" content={SOCIAL_IMAGE} />
        <meta property="og:image:alt" content="Pak Arcade Gaming Blog" />

        {/* X / Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta
          name="twitter:image:alt"
          content="Pak Arcade Gaming Blog"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <main
        id="main-content"
        className="bg-gray-200 text-gray-900"
      >
        <Hero />
        <Article />
        <Keyword />
      </main>
    </>
  );
};

export default Blog;

