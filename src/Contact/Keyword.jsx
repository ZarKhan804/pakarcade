
import React from "react";
import { Link } from "react-router-dom";

const Keyword = () => {
  return (
    <section className="border-t border-gray-300 bg-gray-200 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">

        <div className="text-center">

          <p className="text-xs font-bold uppercase tracking-[3px] text-yellow-600">
            Explore Pak Arcade
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Helpful Pak Arcade Resources
          </h2>

        </div>

        <div className="mx-auto mt-8 max-w-4xl text-center text-base leading-8 text-gray-600 sm:text-lg">

          <p>
            Looking for more information about Pak Arcade? Visit our{" "}
            <Link
              to="/"
              className="font-bold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
            >
              Pak Arcade Game homepage
            </Link>{" "}
            to explore the platform, or learn more about Pak Arcade through
            our{" "}
            <Link
              to="/about"
              className="font-bold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
            >
              About page
            </Link>
            .
          </p>

          <p className="mt-5">
            For gaming information, updates and useful topics, visit the{" "}
            <Link
              to="/blog"
              className="font-bold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
            >
              Pak Arcade Blog
            </Link>
            . If you need to contact us directly, you are already on the{" "}
            <Link
              to="/contact"
              className="font-bold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
            >
              Pak Arcade Contact page
            </Link>
            .
          </p>

          <p className="mt-5">
            These pages provide different types of Pak Arcade information,
            including gaming content, platform information, updates and
            general support resources.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Keyword;

