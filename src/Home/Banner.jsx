
import React from "react";

const Banner = () => {
  return (
    <section
      aria-labelledby="pak-arcade-banner-title"
      className="bg-gray-200 py-10 sm:py-14"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <article className="overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-md">
          {/* Banner Image */}
          <img
            src="/article1.jpg"
            alt="Pak Arcade online gaming platform featuring mobile games and a Pakistan-inspired gaming design"
            className="h-auto w-full object-cover"
            loading="lazy"
            decoding="async"
            width="1280"
            height="720"
          />

          {/* Article Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            <h2
              id="pak-arcade-banner-title"
              className="mb-5 text-2xl font-bold leading-tight text-gray-900 sm:text-3xl"
            >
              Pak Arcade – Online Gaming Platform Information
            </h2>

            <p className="mb-4 text-base leading-7 text-gray-700">
              Pak Arcade is presented as an online gaming platform with a
              variety of mobile-friendly games and entertainment options.
              Its promotional design highlights different gaming categories,
              including slots, crash-style games, cards, fishing games, and
              sports-themed entertainment. Users should review the platform's
              official information before deciding whether to access any game.
            </p>

            <p className="mb-4 text-base leading-7 text-gray-700">
              The banner also highlights payment methods such as Easypaisa,
              JazzCash, and USDT. Availability, transaction requirements,
              supported payment options, and withdrawal conditions may vary.
              Always verify the current terms directly with the platform
              and never share your password, OTP, or sensitive financial
              information with an unverified source.
            </p>

            <p className="mb-4 text-base leading-7 text-gray-700">
              For users accessing gaming services on mobile devices, it is
              important to check device compatibility, account security,
              privacy policies, and any applicable age restrictions.
              Before installing an application, confirm that its source
              is authentic and that the requested permissions are appropriate.
            </p>

            <p className="text-base leading-7 text-gray-700">
              Online gaming involving deposits or cash prizes can carry
              financial risks and may be subject to local laws and
              regulations in Pakistan. Check the applicable legal requirements
              and play responsibly. Promotional claims about licensing,
              security, payments, or earnings should be independently verified
              rather than assumed to be guaranteed.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Banner;
