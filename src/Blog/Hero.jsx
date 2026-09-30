
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-200">

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/20 blur-[110px]" />

      <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center justify-center px-5 py-16 text-center sm:px-8 lg:px-10">

        <div className="max-w-4xl">

          <p className="text-xs font-bold uppercase tracking-[4px] text-yellow-600 sm:text-sm">
            Pak Arcade Gaming Blog
          </p>

          <h1 className="mt-4 text-5xl font-black leading-[1.05] tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Explore the{" "}
            <span className="text-yellow-500">
              Pak Arcade Gaming World
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
            Stay informed with Pak Arcade gaming news, game updates,
            useful guides, mobile gaming information and helpful resources
            for players interested in the Pak Arcade Game experience.
          </p>

          {/* Internal Navigation */}
          <nav
            aria-label="Blog internal navigation"
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm font-semibold"
          >
            <Link
              to="/"
              className="text-gray-700 underline decoration-yellow-400 underline-offset-4 transition hover:text-yellow-600"
            >
              Pak Arcade Home
            </Link>

            <Link
              to="/about"
              className="text-gray-700 underline decoration-yellow-400 underline-offset-4 transition hover:text-yellow-600"
            >
              About Pak Arcade
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 underline decoration-yellow-400 underline-offset-4 transition hover:text-yellow-600"
            >
              Contact Pak Arcade
            </Link>
          </nav>

        </div>

      </div>
    </section>
  );
};

export default Hero;

