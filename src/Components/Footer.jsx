
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const downloadUrl =
    "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  const navigationLinks = [
    { name: "Pak Arcade Home", path: "/" },
    { name: "About Pak Arcade", path: "/about" },
    { name: "Pak Arcade Blog", path: "/blog" },
    { name: "Contact Pak Arcade", path: "/contact" },
  ];

  const resourceLinks = [
    { name: "Pak Arcade Game", path: "/" },
    { name: "Pak Arcade Information", path: "/about" },
    { name: "Pak Arcade Gaming Blog", path: "/blog" },
    { name: "Pak Arcade Contact", path: "/contact" },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#06150f] text-white">

      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">

        {/* ================= FOOTER COLUMNS ================= */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">

          {/* ================= BRAND ================= */}
          <div className="flex flex-col">

            <Link
              to="/"
              end="true"
              aria-label="Pak Arcade Game Home"
              title="Pak Arcade Game Home"
              className="flex w-fit items-center gap-3"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10"
                alt="Pak Arcade Game Logo"
                width="56"
                height="56"
                loading="lazy"
                decoding="async"
                className="h-14 w-14 rounded-xl object-cover"
              />

              <div>
                <div className="text-xl font-black tracking-wide sm:text-2xl">
                  PAK
                  <span className="text-yellow-400"> ARCADE</span>
                </div>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[3px] text-white/40">
                  Gaming &amp; Entertainment
                </p>
              </div>
            </Link>

            <div className="mt-6 h-[2px] w-12 bg-yellow-400" />

            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Pak Arcade is a gaming information and entertainment platform
              covering arcade games, gaming guides, platform information,
              mobile access, downloads and useful gaming resources for
              players looking to explore new gaming experiences.
            </p>

          </div>

          {/* ================= MAIN PAGES ================= */}
          <nav
            aria-label="Pak Arcade main pages"
            className="md:pl-4"
          >
            <h2 className="text-lg font-bold tracking-wide">
              Main Pages
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-yellow-400" />

            <ul className="mt-7 flex flex-col gap-4">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    title={link.name}
                    className="inline-block text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= DISCOVER ================= */}
          <nav
            aria-label="Pak Arcade resources"
            className="md:pl-4"
          >
            <h2 className="text-lg font-bold tracking-wide">
              Discover
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-yellow-400" />

            <ul className="mt-7 flex flex-col gap-4">
              {resourceLinks.map((link, index) => (
                <li key={`${link.path}-${index}`}>
                  <Link
                    to={link.path}
                    title={link.name}
                    className="inline-block text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ================= DOWNLOAD ================= */}
          <div>

            <h2 className="text-lg font-bold tracking-wide">
              Pak Arcade Game
            </h2>

            <div className="mt-3 h-[2px] w-10 bg-yellow-400" />

            <p className="mt-7 text-sm leading-7 text-white/50">
              Explore Pak Arcade gaming information, arcade content,
              platform resources and download guidance. Visit our main
              pages to learn more about the platform and available gaming
              resources.
            </p>

            <a
              href={downloadUrl}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              aria-label="Download Pak Arcade Game"
              title="Download Pak Arcade Game"
              className="mt-7 inline-flex rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#06150f] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_8px_30px_rgba(250,204,21,0.18)]"
            >
              Download Now
            </a>

          </div>

        </div>

        {/* ================= INTERNAL LINK HUB ================= */}
        <nav
          aria-label="Pak Arcade internal links"
          className="mt-14 border-t border-white/10 pt-8"
        >
          <h2 className="text-base font-bold text-white">
            Explore Pak Arcade
          </h2>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">

            <Link
              to="/"
              title="Pak Arcade Game"
              className="text-sm text-white/50 transition-colors hover:text-yellow-400"
            >
              Pak Arcade Game
            </Link>

            <Link
              to="/about"
              title="About Pak Arcade"
              className="text-sm text-white/50 transition-colors hover:text-yellow-400"
            >
              About Pak Arcade
            </Link>

            <Link
              to="/blog"
              title="Pak Arcade Gaming Blog"
              className="text-sm text-white/50 transition-colors hover:text-yellow-400"
            >
              Pak Arcade Gaming Blog
            </Link>

            <Link
              to="/contact"
              title="Contact Pak Arcade"
              className="text-sm text-white/50 transition-colors hover:text-yellow-400"
            >
              Contact Pak Arcade
            </Link>

          </div>
        </nav>

        {/* ================= BOTTOM ================= */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs leading-5 text-white/35">
            © {new Date().getFullYear()} Pak Arcade. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-2">

            <Link
              to="/about"
              title="About Pak Arcade"
              className="text-xs text-white/35 transition-colors hover:text-yellow-400"
            >
              About
            </Link>

            <Link
              to="/blog"
              title="Pak Arcade Blog"
              className="text-xs text-white/35 transition-colors hover:text-yellow-400"
            >
              Blog
            </Link>

            <Link
              to="/contact"
              title="Contact Pak Arcade"
              className="text-xs text-white/35 transition-colors hover:text-yellow-400"
            >
              Contact
            </Link>

            <Link
              to="/"
              title="Pak Arcade Home"
              className="text-xs text-white/35 transition-colors hover:text-yellow-400"
            >
              Home
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;

