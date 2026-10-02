import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const downloadUrl =
    "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10";

  return (
    <section className="relative overflow-hidden bg-gray-200">
      {/* Background Effects */}
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-yellow-300/20 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/50 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-88px)] lg:px-10 lg:py-8">

        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex flex-col items-center text-center lg:hidden">

          {/* Small Heading */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            Pak Arcade Gaming
          </p>

          {/* H1 */}
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">
            Welcome to{" "}
            <span className="text-yellow-500">
              Pak Arcade Game
            </span>
          </h1>

          {/* Image */}
          <div className="mt-8 w-full max-w-[520px]">
            <div className="group rounded-[30px] border border-yellow-400/30 bg-white p-4 shadow-xl shadow-yellow-500/10 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[34px] sm:p-5">
              <div className="overflow-hidden rounded-[22px] sm:rounded-[26px]">
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download Pak Arcade Game"
                >
                  <img
                    src={gameImage}
                    alt="Pak Arcade Game online gaming"
                    width="500"
                    height="570"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
               className="h-[250px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[350px]"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="mt-7">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-xl bg-yellow-400 px-8 py-4 text-base font-extrabold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl"
            >
              Download Game
            </a>
          </div>

          {/* Description */}
          <p className="mt-7 max-w-3xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Explore Pak Arcade Game, discover gaming information, learn about
            mobile access and find useful resources for players interested in
            arcade entertainment and online gaming.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md sm:text-base"
            >
              About Pak Arcade
            </Link>

            <Link
              to="/blog"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md sm:text-base"
            >
              Read Gaming Guides
            </Link>
          </div>

          {/* Features */}
          <div className="mt-8 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-gray-300 bg-white px-4 py-5 shadow-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Easy Access
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Simple gaming information
              </p>
            </div>

            <div className="rounded-xl border border-gray-300 bg-white px-4 py-5 shadow-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Mobile Friendly
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Designed for modern devices
              </p>
            </div>

            <div className="rounded-xl border border-gray-300 bg-white px-4 py-5 shadow-sm">
              <h2 className="text-sm font-extrabold text-gray-900">
                Gaming Guides
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Helpful platform resources
              </p>
            </div>
          </div>

          {/* Internal Links */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-semibold">
            <Link
              to="/about"
              className="text-gray-600 hover:text-yellow-600"
            >
              Learn About Pak Arcade
            </Link>

            <Link
              to="/blog"
              className="text-gray-600 hover:text-yellow-600"
            >
              Explore Gaming Articles
            </Link>

            <Link
              to="/contact"
              className="text-gray-600 hover:text-yellow-600"
            >
              Contact Pak Arcade
            </Link>
          </div>
        </div>


        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid lg:min-h-[calc(100vh-88px)] lg:grid-cols-2 lg:items-center lg:gap-12">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[3px] text-yellow-600">
              Pak Arcade Gaming
            </p>

            {/* H1 */}
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
              Welcome to{" "}
              <span className="text-yellow-500">
                Pak Arcade Game
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
              Explore Pak Arcade Game, discover gaming information, learn about
              mobile access and find useful resources for players interested in
              arcade entertainment and online gaming.
            </p>

            {/* Main Buttons */}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
              >
                Download Game
              </a>

              <Link
                to="/about"
                className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
              >
                About Pak Arcade
              </Link>

              <Link
                to="/blog"
                className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
              >
                Read Gaming Guides
              </Link>
            </div>

            {/* Features */}
            <div className="mt-7 grid grid-cols-3 gap-4">

              <div className="rounded-xl border border-gray-300 bg-white px-4 py-4 shadow-sm">
                <h2 className="text-sm font-extrabold text-gray-900">
                  Easy Access
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Simple gaming information
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white px-4 py-4 shadow-sm">
                <h2 className="text-sm font-extrabold text-gray-900">
                  Mobile Friendly
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Designed for modern devices
                </p>
              </div>

              <div className="rounded-xl border border-gray-300 bg-white px-4 py-4 shadow-sm">
                <h2 className="text-sm font-extrabold text-gray-900">
                  Gaming Guides
                </h2>
                <p className="mt-1 text-xs text-gray-500">
                  Helpful platform resources
                </p>
              </div>

            </div>

            {/* Internal Links */}
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">

              <Link
                to="/about"
                className="text-gray-600 hover:text-yellow-600"
              >
                Learn About Pak Arcade
              </Link>

              <Link
                to="/blog"
                className="text-gray-600 hover:text-yellow-600"
              >
                Explore Gaming Articles
              </Link>

              <Link
                to="/contact"
                className="text-gray-600 hover:text-yellow-600"
              >
                Contact Pak Arcade
              </Link>

            </div>
          </div>


          {/* RIGHT IMAGE */}
          <div className="flex justify-center lg:justify-end">

            <div className="group block w-full max-w-[500px]">

              <div className="rounded-[30px] border border-yellow-400/30 bg-white p-4 shadow-xl shadow-yellow-500/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl sm:rounded-[34px] sm:p-5">

                <div className="overflow-hidden rounded-[22px] sm:rounded-[26px]">

                  <a
                    href={downloadUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Download Pak Arcade Game"
                  >
                    <img
                      src={gameImage}
                      alt="Pak Arcade Game online gaming"
                      width="500"
                      height="570"
                      loading="eager"
                      fetchPriority="high"
                      decoding="async"
                      className="h-[420px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:h-[calc(100vh-190px)] lg:max-h-[570px]"
                    />
                  </a>

                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;