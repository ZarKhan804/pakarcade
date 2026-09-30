
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-200">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* INTRO */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            About Pak Arcade
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            About{" "}
            <span className="text-yellow-500">
              Pak Arcade
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Learn more about Pak Arcade, its gaming content, mobile
            experience, platform information and resources created for
            visitors interested in online gaming and entertainment.
          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="rounded-3xl border border-gray-300 bg-white/60 p-7 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">

            <h2 className="text-center text-3xl font-black text-gray-900 sm:text-4xl">
              About the Pak Arcade Platform
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              Pak Arcade is an online gaming and entertainment destination
              designed for visitors who want to discover gaming information,
              explore content and learn more about different gaming
              experiences. The website brings important information together
              in a simple format so visitors can move between different
              sections without unnecessary steps.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Visitors can start from the{" "}
              <Link
                to="/"
                className="font-semibold text-yellow-600 hover:text-yellow-700"
              >
                Pak Arcade home page
              </Link>{" "}
              and continue through the website to explore additional
              information. The navigation connects the main areas of the
              website, including the{" "}
              <Link
                to="/blog"
                className="font-semibold text-yellow-600 hover:text-yellow-700"
              >
                Pak Arcade blog
              </Link>{" "}
              and the{" "}
              <Link
                to="/contact"
                className="font-semibold text-yellow-600 hover:text-yellow-700"
              >
                contact page
              </Link>
              .
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Modern gaming audiences use smartphones, tablets and desktop
              computers to discover entertainment content. For that reason,
              Pak Arcade focuses on a responsive layout that makes information
              easier to read across different screen sizes. Clear headings,
              readable text and straightforward navigation help visitors
              understand the available information.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Visitors interested in Pak Arcade Game, Pak Arcade Download,
              Pak Arcade APK or Pak Arcade App information can use the website
              to explore relevant sections. Before downloading any application,
              users should verify the source, understand device compatibility
              and review applicable security requirements.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Gaming should remain an entertainment activity. Users should
              understand the rules of the games they choose and consider the
              laws, age requirements and other restrictions that apply in
              their location. Where gaming involves real-money features,
              users should understand the risks and avoid treating gaming
              outcomes as guaranteed financial returns.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              The purpose of this website is to make Pak Arcade information
              easier to discover and navigate. Visitors can learn about the
              platform, read gaming-related content and use the website's
              main navigation to move between useful sections.
            </p>

          </div>
        </div>

        {/* TEXT LINKS - NOT CARDS */}
        <div className="mx-auto mt-10 max-w-5xl border-t border-gray-300 pt-8">

          <p className="text-center text-sm leading-7 text-gray-600 sm:text-base">
            Continue exploring{" "}
            <Link
              to="/"
              className="font-semibold text-yellow-600 hover:text-yellow-700"
            >
              Pak Arcade Home
            </Link>
            , learn more through the{" "}
            <Link
              to="/blog"
              className="font-semibold text-yellow-600 hover:text-yellow-700"
            >
              Pak Arcade Blog
            </Link>
            , or visit the{" "}
            <Link
              to="/contact"
              className="font-semibold text-yellow-600 hover:text-yellow-700"
            >
              Contact page
            </Link>{" "}
            for additional information.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;

