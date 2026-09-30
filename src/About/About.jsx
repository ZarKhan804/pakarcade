
import React from "react";
import { Helmet } from "react-helmet-async";

import Hero from "./Hero";
import Article from "./Article";
import Keyword from "./Keyword";

const About = () => {
  const title = "About Pak Arcade – Gaming Platform & Game Information";

  const description =
    "Learn about Pak Arcade, its gaming platform, mobile experience, game information, download resources and helpful guides for players.";

  const canonicalUrl = "https://www.pakarcades.com/about";

  const socialImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10";

  return (
    <>
      <Helmet>
        <html lang="en" />

        <title>{title}</title>

        <meta name="description" content={description} />

        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <meta name="author" content="Pak Arcade" />

        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Pak Arcade" />
        <meta property="og:image" content={socialImage} />
        <meta property="og:image:alt" content="Pak Arcade Gaming Platform" />

        {/* X / Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta
          name="twitter:image:alt"
          content="Pak Arcade Gaming Platform"
        />
      </Helmet>

      <main id="main-content" className="bg-gray-200 text-gray-900">
        <Hero />
        <Article />
        <Keyword />
      </main>
    </>
  );
};

export default About;

