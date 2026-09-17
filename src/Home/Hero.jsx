import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const downloadUrl =
    "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  const gameImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10";

  return (
    <section className="relative overflow-hidden bg-gray-200">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-0 top-10 h-64 w-64 rounded-full bg-yellow-300/20 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/50 blur-[110px]" />

      {/* ================= MAIN HERO ================= */}
      <div className="relative mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 sm:py-14 lg:min-h-[calc(100vh-88px)] lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-10 lg:py-8">

        {/* =====================================================
            MOBILE HEADING
        ====================================================== */}
        <div className="text-center lg:hidden">

          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl">
            Welcome to
            <br />
            <span className="text-yellow-500">
              Pak Arcade Game
            </span>
          </h1>

        </div>


        {/* =====================================================
            MOBILE IMAGE
        ====================================================== */}
        <div className="flex justify-center lg:hidden">

          <a
            href={downloadUrl}
            className="group block w-full max-w-[500px]"
          >
            <div className="rounded-[28px] border border-yellow-400/30 bg-white p-3 shadow-xl shadow-yellow-500/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl sm:rounded-[34px] sm:p-5">

              <div className="overflow-hidden rounded-[21px] sm:rounded-[26px]">

                <img
                  src={gameImage}
                  alt="Pak Arcade Game"
                  className="h-[300px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[420px]"
                />

              </div>

            </div>
          </a>

        </div>


        {/* =====================================================
            MOBILE BUTTONS
        ====================================================== */}
        <div className="flex flex-wrap justify-center gap-3 lg:hidden">

          {/* Download */}
          <a
            href={downloadUrl}
            className="rounded-xl bg-yellow-400 px-6 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
          >
            Download Now
          </a>

          {/* Learn More */}
          <Link
            to="/about"
            className="rounded-xl border border-gray-300 bg-white px-6 py-3.5 text-sm font-extrabold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
          >
            Learn More
          </Link>

        </div>


        {/* =====================================================
            MOBILE DESCRIPTION
        ====================================================== */}
        <div className="text-center lg:hidden">

          <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Step into the exciting world of Pak Arcade Game. Discover fun
            games, enjoy smooth gameplay, and explore new entertainment
            made for players who love gaming.
          </p>

        </div>


        {/* =====================================================
            LEFT CONTENT - DESKTOP
        ====================================================== */}
        <div className="hidden max-w-2xl lg:block">

          {/* Heading */}
          <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl">
            Welcome to
            <br />
            <span className="text-yellow-500">
              Pak Arcade
            </span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
            Step into the exciting world of Pak Arcade. Discover fun games,
            enjoy smooth gameplay, and find new entertainment made for
            players who love gaming.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-4">

            {/* Download */}
            <a
              href={downloadUrl}
              className="rounded-xl bg-yellow-400 px-7 py-3.5 text-sm font-extrabold text-gray-900 shadow-lg shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-xl sm:px-8 sm:py-4 sm:text-base"
            >
              Download Game
            </a>

            {/* Learn More */}
            <Link
              to="/about"
              className="rounded-xl border border-gray-300 bg-white px-7 py-3.5 text-sm font-extrabold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:text-yellow-600 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
            >
              Explore Pak Arcade
            </Link>

          </div>

          {/* Features */}
          <div className="mt-7 grid grid-cols-3 gap-3 sm:gap-4">

            <div className="rounded-xl border border-gray-300 bg-white px-3 py-3.5 shadow-sm sm:px-5 sm:py-4">
              <h3 className="text-xs font-extrabold text-gray-900 sm:text-sm">
                Easy Access
              </h3>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                Simple Gaming
              </p>
            </div>

            <div className="rounded-xl border border-gray-300 bg-white px-3 py-3.5 shadow-sm sm:px-5 sm:py-4">
              <h3 className="text-xs font-extrabold text-gray-900 sm:text-sm">
                Smooth
              </h3>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                Gaming Experience
              </p>
            </div>

            <div className="rounded-xl border border-gray-300 bg-white px-3 py-3.5 shadow-sm sm:px-5 sm:py-4">
              <h3 className="text-xs font-extrabold text-gray-900 sm:text-sm">
                Premium
              </h3>

              <p className="mt-1 text-[10px] text-gray-500 sm:text-xs">
                Arcade Games
              </p>
            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT IMAGE - DESKTOP
        ====================================================== */}
        <div className="hidden justify-center lg:flex lg:justify-end">

          <a
            href={downloadUrl}
            className="group block w-full max-w-[500px]"
          >
            <div className="rounded-[30px] border border-yellow-400/30 bg-white p-4 shadow-xl shadow-yellow-500/10 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl sm:rounded-[34px] sm:p-5">

              <div className="overflow-hidden rounded-[22px] sm:rounded-[26px]">

                <img
                  src={gameImage}
                  alt="Pak Arcade Game"
                  className="h-[400px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] lg:h-[calc(100vh-190px)] lg:max-h-[570px]"
                />

              </div>

            </div>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Hero;