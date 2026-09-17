import React from "react";
import { Download as DownloadIcon } from "lucide-react";

const Article = () => {
  return (
    <section className="border-t border-white/10 py-24">

      <div className="mx-auto max-w-4xl px-5 text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-500">
          <DownloadIcon size={36} />
        </div>

        <h2 className="mt-8 text-4xl font-black sm:text-6xl">
          READY TO{" "}
          <span className="text-pink-500">
            PLAY?
          </span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-8 text-white/50">
          Download Pakar Arcade and start your gaming adventure today.
        </p>

        <button className="mt-8 rounded-full bg-pink-500 px-8 py-4 font-bold transition hover:scale-105 hover:bg-pink-400">
          Download Now
        </button>

      </div>

    </section>
  );
};

export default Article;