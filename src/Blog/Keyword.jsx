
import React from "react";
import { Link } from "react-router-dom";

const Keyword = () => {
  return (
    <section className="border-t border-gray-300 bg-gray-200 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            Explore Pak Arcade
          </p>

          <h2 className="mt-4 text-3xl font-black text-gray-900 sm:text-4xl">
            More Pak Arcade Resources
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Explore the main Pak Arcade pages to learn more about the
            platform, read background information and contact the website
            when you need additional information.
          </p>

        </div>

        <div className="mt-8 text-center text-sm leading-8 text-gray-600 sm:text-base">

          <Link
            to="/"
            className="font-semibold text-yellow-600 underline underline-offset-4 hover:text-yellow-700"
          >
            Pak Arcade Home
          </Link>

          <span className="mx-3 text-gray-400">•</span>

          <Link
            to="/about"
            className="font-semibold text-yellow-600 underline underline-offset-4 hover:text-yellow-700"
          >
            About Pak Arcade
          </Link>

          <span className="mx-3 text-gray-400">•</span>

          <Link
            to="/contact"
            className="font-semibold text-yellow-600 underline underline-offset-4 hover:text-yellow-700"
          >
            Contact Pak Arcade
          </Link>

          <span className="mx-3 text-gray-400">•</span>

          <Link
            to="/blog"
            className="font-semibold text-yellow-600 underline underline-offset-4 hover:text-yellow-700"
          >
            Pak Arcade Blog
          </Link>

        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-7 text-gray-500">
          Pak Arcade, Pak Arcade Game, Pak Arcade gaming, mobile gaming,
          gaming updates, game information, arcade games, online games,
          mobile games, Android gaming, gaming guides, gaming tips,
          digital entertainment and Pak Arcade resources.
        </p>

      </div>
    </section>
  );
};

export default Keyword;

