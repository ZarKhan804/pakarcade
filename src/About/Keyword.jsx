
import React from "react";
import { Link } from "react-router-dom";

const Keyword = () => {
  return (
    <section className="border-t border-gray-300 bg-gray-200 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
            Explore Pak Arcade
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Use the links below to explore different areas of Pak Arcade and
            find more gaming information.
          </p>

        </div>

        <div className="mx-auto mt-8 max-w-4xl text-center text-base leading-8">

          <Link
            to="/"
            className="font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
          >
            Pak Arcade Home
          </Link>

          <span className="mx-2 text-gray-400">•</span>

          <Link
            to="/about"
            className="font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
          >
            About Pak Arcade
          </Link>

          <span className="mx-2 text-gray-400">•</span>

          <Link
            to="/blog"
            className="font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
          >
            Pak Arcade Blog
          </Link>

          <span className="mx-2 text-gray-400">•</span>

          <Link
            to="/contact"
            className="font-semibold text-yellow-600 transition-colors hover:text-yellow-700"
          >
            Contact Pak Arcade
          </Link>

        </div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-sm leading-7 text-gray-500">
          Explore the{" "}
          <Link
            to="/"
            className="font-semibold text-gray-700 hover:text-yellow-600"
          >
            Pak Arcade Game
          </Link>{" "}
          introduction, read the latest{" "}
          <Link
            to="/blog"
            className="font-semibold text-gray-700 hover:text-yellow-600"
          >
            gaming guides
          </Link>
          , or use the{" "}
          <Link
            to="/contact"
            className="font-semibold text-gray-700 hover:text-yellow-600"
          >
            contact section
          </Link>{" "}
          to find additional website information.
        </p>

      </div>
    </section>
  );
};

export default Keyword;

