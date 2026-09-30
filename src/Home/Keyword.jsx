import React from "react";
import { Link } from "react-router-dom";

const Keyword = () => {
  return (
    <section className="border-t border-gray-300 bg-gray-200 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            Explore Pak Arcade
          </p>

          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Pak Arcade Gaming Resources
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Explore more information about Pak Arcade Game, mobile access,
            gaming resources and platform information through the pages below.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <Link
            to="/about"
            className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
          >
            <h3 className="text-xl font-black text-gray-900 group-hover:text-yellow-600">
              About Pak Arcade
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Learn more about Pak Arcade, its gaming information, mobile
              access and platform resources.
            </p>

            <span className="mt-5 inline-block font-bold text-yellow-700">
              Read About Us →
            </span>
          </Link>

          <Link
            to="/blog"
            className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
          >
            <h3 className="text-xl font-black text-gray-900 group-hover:text-yellow-600">
              Pak Arcade Blog
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Discover gaming guides, mobile information, download resources
              and useful Pak Arcade articles.
            </p>

            <span className="mt-5 inline-block font-bold text-yellow-700">
              Read Gaming Guides →
            </span>
          </Link>

          <Link
            to="/contact"
            className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400 hover:bg-white hover:shadow-lg"
          >
            <h3 className="text-xl font-black text-gray-900 group-hover:text-yellow-600">
              Contact Pak Arcade
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Find the contact page for general questions, feedback and
              platform-related information.
            </p>

            <span className="mt-5 inline-block font-bold text-yellow-700">
              Contact Us →
            </span>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default Keyword;