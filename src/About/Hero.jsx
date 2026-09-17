import React from "react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gray-200">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-yellow-300/20 blur-[120px]" />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">

        {/* ================= HERO INTRO ================= */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            About Pak Arcade
          </p>

          <h1 className="mt-5 text-5xl font-black leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
            Welcome to{" "}
            <span className="text-yellow-500">
              Pak Arcade
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Discover Pak Arcade, a simple and exciting place for players
            who enjoy games, entertainment and new gaming experiences.
          </p>

        </div>

        {/* ================= ABOUT ARTICLE ================= */}
        <div className="mx-auto mt-16 max-w-5xl">

          <div className="rounded-3xl border border-gray-300 bg-white/60 p-7 shadow-sm backdrop-blur-sm sm:p-10 lg:p-12">

            <h2 className="text-center text-3xl font-black text-gray-900 sm:text-4xl">
              About Pak Arcade
            </h2>

            <p className="mt-7 text-base leading-8 text-gray-600 sm:text-lg">
              Pak Arcade is a gaming platform created for players who enjoy
              discovering entertaining games and spending their free time
              with fun digital experiences. Our goal is to keep gaming simple,
              accessible and easy to explore. Whether you are visiting Pak
              Arcade for the first time or already know the platform, we want
              to provide clear information and a comfortable experience for
              every visitor.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              The world of online gaming continues to grow as more people use
              smartphones and other digital devices for entertainment. Pak
              Arcade is designed with this modern gaming audience in mind.
              Players can explore information about the platform, discover
              gaming content and learn more about the available options from
              one convenient place.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              People searching for Pak Arcade, Pak Arcade Game, Pak Arcade
              Download, Pak Arcade APK or Pak Arcade App may want to learn
              more before getting started. That is why we believe useful,
              straightforward information is an important part of a good
              gaming website. Our pages are designed to help visitors
              understand the platform without unnecessary complexity.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Pak Arcade also focuses on a mobile-friendly experience.
              Smartphones are now one of the most popular ways to access
              online entertainment, so a responsive design can make gaming
              information easier to view on different screen sizes. Whether
              you are using a phone, tablet or desktop computer, simple
              navigation and readable content can make your visit more
              comfortable.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              We believe gaming should be enjoyable and approached
              responsibly. Players should understand the rules of the games
              they choose and should always consider their own limits. If
              gaming involves real-money features, users should understand
              the risks and follow the laws and age requirements that apply
              to them. Gaming should remain an entertainment activity and
              should never be viewed as a guaranteed way to make money.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Our aim with Pak Arcade is to create a clean and useful online
              destination where visitors can learn, explore and enjoy gaming
              content. From information about the Pak Arcade Game to details
              about Pak Arcade Download and mobile access, we want everything
              to be presented in a simple and understandable way.
            </p>

          </div>

        </div>

        {/* ================= BOTTOM INFO ================= */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-gray-300 bg-white/60 p-6 text-center shadow-sm">
            <h3 className="text-lg font-black text-gray-900">
              Simple
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Easy navigation and clear information.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white/60 p-6 text-center shadow-sm">
            <h3 className="text-lg font-black text-gray-900">
              Mobile Friendly
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Designed for comfortable access on different devices.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-300 bg-white/60 p-6 text-center shadow-sm">
            <h3 className="text-lg font-black text-gray-900">
              Gaming & Fun
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Explore games and enjoy your gaming experience.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;