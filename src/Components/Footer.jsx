
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const downloadUrl =
    "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  return (
    <footer className="border-t border-white/10 bg-[#06150f] text-white">

      {/* ================= FOOTER MAIN ================= */}
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 lg:px-12">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">

          {/* ================= BRAND ================= */}
          <div className="flex flex-col">

            <Link
              to="/"
              className="flex w-fit items-center gap-3"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10"
                alt="Pak Arcade Logo"
                className="h-14 w-14 rounded-xl object-cover"
              />

              <div>
                <h2 className="text-xl font-black tracking-wide sm:text-2xl">
                  PAK
                  <span className="text-yellow-400">
                    ARCADE
                  </span>
                </h2>

                <p className="mt-1 text-[9px] font-semibold uppercase tracking-[3px] text-white/40">
                  Gaming & Entertainment
                </p>
              </div>
            </Link>

            {/* Small Line */}
            <div className="mt-6 h-[2px] w-12 bg-yellow-400" />

            {/* 50 Words Article */}
            <p className="mt-5 max-w-md text-sm leading-7 text-white/50">
              Pak Arcade is a gaming destination built for players who love
              fun, adventure and exciting arcade experiences. Discover games,
              explore fresh content and stay connected with the world of
              gaming. Step into the arcade, choose your adventure and enjoy
              every moment.
            </p>

          </div>

          {/* ================= QUICK LINKS ================= */}
          <div className="md:pl-8 lg:pl-12">

            <h3 className="text-lg font-bold tracking-wide">
              Quick Links
            </h3>

            <div className="mt-3 h-[2px] w-10 bg-yellow-400" />

            <nav className="mt-7 flex flex-col gap-4">

              <Link
                to="/"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
              >
                About Us
              </Link>

              <Link
                to="/blog"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
              >
                Blog
              </Link>

              <Link
                to="/download"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
              >
                Download
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-white/50 transition-all duration-300 hover:translate-x-1 hover:text-yellow-400"
              >
                Contact
              </Link>

            </nav>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-lg font-bold tracking-wide">
              Get In Touch
            </h3>

            <div className="mt-3 h-[2px] w-10 bg-yellow-400" />

            <div className="mt-7 space-y-4">

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                  Email
                </p>

                <p className="mt-1 text-sm text-white/60">
                  info@pakarcade.com
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">
                  Gaming
                </p>

                <p className="mt-1 text-sm text-white/60">
                  Games • Fun • Entertainment
                </p>
              </div>

            </div>

            {/* ================= DIRECT DOWNLOAD ================= */}
            <a
              href={downloadUrl}
              className="mt-7 inline-flex rounded-full bg-yellow-400 px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#06150f] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_8px_30px_rgba(250,204,21,0.18)]"
            >
              Download Now
            </a>

          </div>

        </div>

       

      </div>

    </footer>
  );
};

export default Footer;

