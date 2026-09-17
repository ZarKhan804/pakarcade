import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-200">
      
      {/* Soft Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-[110px]" />

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-[390px] max-w-7xl items-center justify-center px-5 py-16 text-center sm:px-8 lg:px-10">

        <div className="max-w-3xl">

          {/* Small Label */}
          <p className="text-xs font-bold uppercase tracking-[4px] text-yellow-600 sm:text-sm">
            Pak Arcade Gaming Blog
          </p>

          {/* Main Heading */}
          <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            EXPLORE THE{" "}
            <span className="text-yellow-500">
              GAMING WORLD
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Stay updated with Pak Arcade gaming news, game updates,
            useful guides, gaming tips and the latest Pak Arcade Game
            information.
          </p>

          {/* Keyword Line */}
          <p className="mt-5 text-xs font-medium text-gray-500 sm:text-sm">
            Pak Arcade • Pak Arcade Game • Gaming News • Game Updates
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;