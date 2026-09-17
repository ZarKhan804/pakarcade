import React from "react";

const Contactform = () => {
  return (
    <section className="border-t border-gray-300 bg-gray-200 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-2xl px-5 sm:px-8">

        {/* Heading */}
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-600">
            Pak Arcade
          </p>

          <h2 className="mt-4 text-4xl font-black text-gray-900 sm:text-5xl">
            GET IN{" "}
            <span className="text-yellow-500">
              TOUCH
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
            Have a question or need more information? Send us a message.
          </p>
        </div>

        {/* Form */}
        <form className="mt-10 space-y-5 rounded-3xl border border-gray-300 bg-white/60 p-6 shadow-sm sm:p-8">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Your Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Subject
            </label>

            <input
              type="text"
              placeholder="Enter subject"
              className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
            />
          </div>

          {/* Message */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Your Message
            </label>

            <textarea
              rows="6"
              placeholder="Write your message..."
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-5 py-4 text-gray-900 placeholder-gray-400 outline-none transition focus:border-yellow-500 focus:ring-2 focus:ring-yellow-500/20"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-yellow-400 px-6 py-4 font-bold text-gray-900 transition duration-300 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contactform;