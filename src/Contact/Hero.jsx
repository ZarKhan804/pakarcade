import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-200">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-300/25 blur-[120px]" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">

        {/* ================= HERO ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-xs font-extrabold uppercase tracking-[4px] text-yellow-600 sm:text-sm">
            Pak Arcade
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            LET'S{" "}
            <span className="text-yellow-500">
              TALK
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Have a question about Pak Arcade? Whether you need information
            about our games, updates or gaming platform, we are here to help.
          </p>

          {/* Small Info Line */}
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-[2px] text-gray-500 sm:text-sm">
            <span>Pak Arcade</span>
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            <span>Gaming Support</span>
            <span className="h-1 w-1 rounded-full bg-yellow-500" />
            <span>Game Information</span>
          </div>

        </div>

        {/* ================= CONTACT ARTICLE ================= */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl border border-gray-300 bg-white/60 p-7 text-center shadow-sm sm:p-10">

          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">
            Get in Touch with Pak Arcade
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            We want your experience with Pak Arcade to be simple and
            enjoyable. If you have a question about Pak Arcade Game,
            gaming updates, website information or general support, you
            can reach out to us through our contact page. We are always
            interested in hearing from players and visitors who want to
            learn more about the Pak Arcade gaming platform.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            For questions related to Pak Arcade Download, Pak Arcade App,
            Pak Arcade APK or mobile gaming, please provide clear details
            when contacting us. This helps us understand your question and
            provide more useful information. We also recommend checking
            the information available throughout our website, as many
            common questions about Pak Arcade and gaming can be answered
            through our different pages and articles.
          </p>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            Your feedback is valuable to us because it helps us improve the
            Pak Arcade experience. Whether you are sharing a suggestion,
            asking about gaming content or simply want to learn more about
            our platform, we appreciate you taking the time to get in touch.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Hero;