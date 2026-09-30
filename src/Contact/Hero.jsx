
import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-200">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/25 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* HERO */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-extrabold uppercase tracking-[4px] text-yellow-600 sm:text-sm">
            Pak Arcade Support
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            CONTACT{" "}
            <span className="text-yellow-500">
              PAK ARCADE
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a question about Pak Arcade Game, gaming information,
            updates or mobile access? Explore our website resources or
            contact us for general information and support.
          </p>

          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[2px] text-gray-500 sm:text-sm">
            <span>Pak Arcade</span>
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            <span>Gaming Support</span>
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            <span>Game Information</span>
          </div>

        </div>

        {/* CONTACT INFORMATION */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-gray-300 bg-white/60 p-7 text-center shadow-sm sm:p-10">

          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
            Get in Touch with Pak Arcade
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            We want your experience with Pak Arcade to be simple and
            enjoyable. If you have questions about Pak Arcade Game,
            gaming updates, website information or general platform
            resources, you can use the contact form below.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Visitors looking for Pak Arcade Download, Pak Arcade App,
            Pak Arcade APK or mobile gaming information can also explore
            our website pages for additional guidance. Before downloading
            any application, always check the source carefully and make
            sure the software is appropriate for your device.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            If you are new to Pak Arcade, you can first learn more about
            the platform through our{" "}
            <Link
              to="/about"
              className="font-bold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
            >
              About Pak Arcade
            </Link>{" "}
            page. You can also visit the{" "}
            <Link
              to="/blog"
              className="font-bold text-yellow-600 underline decoration-yellow-400 underline-offset-4 hover:text-yellow-700"
            >
              Pak Arcade Blog
            </Link>{" "}
            for gaming-related information and guides.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-semibold">

            <Link
              to="/"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-gray-700 transition hover:border-yellow-400 hover:text-yellow-600"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-gray-700 transition hover:border-yellow-400 hover:text-yellow-600"
            >
              About Us
            </Link>

            <Link
              to="/blog"
              className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-gray-700 transition hover:border-yellow-400 hover:text-yellow-600"
            >
              Blog
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;

