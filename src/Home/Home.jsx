import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

const SITE_URL = "https://www.pakarcades.com";
const PAGE_URL = `${SITE_URL}/`;

const TITLE = "Pak Arcade Game – Online Gaming & Download";
const DESCRIPTION =
  "Explore Pak Arcade Game information, mobile gaming access, download guidance, arcade entertainment, gaming features and useful Pak Arcade resources.";

const SOCIAL_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10";

const Home = () => {
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
        <meta property="og:image:alt" content="Pak Arcade Game" />

        {/* X / Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={SOCIAL_IMAGE} />
        <meta name="twitter:image:alt" content="Pak Arcade Game" />
      </Helmet>

      <main className="bg-gray-200 text-gray-900">
        <Hero />
        <Article />
        <Keyword />
      </main>
    </>
  );
};

export default Home;