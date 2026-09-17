import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  const downloadUrl =
    "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06150f]/95 backdrop-blur-md">

      {/* ================= MAIN HEADER ================= */}
      <div className="mx-auto flex h-[76px] max-w-[1400px] items-center justify-between px-5 sm:h-[84px] sm:px-8 lg:h-[88px] lg:px-10">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10"
            alt="Pak Arcade Logo"
            className="h-11 w-11 rounded-xl object-cover sm:h-14 sm:w-14"
          />

          <div className="leading-none">
            <h1 className="text-lg font-black tracking-wide text-white sm:text-2xl">
              PAK
              <span className="text-yellow-400"> ARCADE</span>
            </h1>

            <p className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[3px] text-white/50 sm:block">
              Gaming & Entertainment
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav className="hidden items-center gap-7 lg:flex xl:gap-9">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-[15px] font-semibold transition-all duration-300 ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white/75 hover:text-yellow-400"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* ================= DESKTOP DOWNLOAD ================= */}
        <a
          href={downloadUrl}
          className="hidden items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#07150e] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] lg:flex xl:px-6"
        >
          <Download size={17} />
          Download Now
        </a>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 lg:hidden"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[420px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8">

          <div className="flex flex-col gap-1.5">

            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-yellow-400 text-[#07150e]"
                      : "text-white/75 hover:bg-white/5 hover:text-yellow-400"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </div>

          {/* Download Only Inside Mobile Menu */}
          <a
            href={downloadUrl}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#07150e] transition-all duration-300 hover:bg-yellow-300"
          >
            <Download size={18} />
            Download Now
          </a>

        </nav>
      </div>
    </header>
  );
};

export default Header;