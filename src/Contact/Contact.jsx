
import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "./Hero";
import Contactform from "./Contactform";
import Keyword from "./Keyword";

const Contact = () => {
  const title = "Contact Pak Arcade – Gaming Support & Information";
  const description =
    "Contact Pak Arcade for gaming information, Pak Arcade Game updates, download guidance, mobile access questions and general platform support.";

  const canonicalUrl = "https://www.pakarcades.com/contact";

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
        <meta property="og:image:alt" content="Pak Arcade Gaming" />

        {/* X / Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
        <meta name="twitter:image:alt" content="Pak Arcade Gaming" />
      </Helmet>

      <main className="bg-gray-200 text-gray-900">
        <Hero />
        <Contactform />
        <Keyword />
      </main>
    </>
  );
};

export default Contact;

