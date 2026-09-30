import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Download } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Pak Arcade", path: "/about" },
    { name: "Pak Arcade Blog", path: "/blog" },
    { name: "Contact Pak Arcade", path: "/contact" },
  ];

  const downloadUrl =
    "https://www.pakarcadeapp.com?code=MJ0D28WXAMD&t=1789636252";

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#06150f]/95 text-white backdrop-blur-md">

      {/* ================= HEADER ================= */}
      <div className="mx-auto flex min-h-[76px] max-w-[1400px] items-center justify-between px-5 sm:min-h-[84px] sm:px-8 lg:min-h-[88px] lg:px-10">

        {/* ================= BRAND ================= */}
        <Link
          to="/"
          end="true"
          onClick={closeMenu}
          aria-label="Pak Arcade Game Home"
          title="Pak Arcade Game Home"
          className="flex shrink-0 items-center gap-2.5 sm:gap-3"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ81bd3xJBJMCY8dT2h84RkFp4gg_0PhCIf70lX_R2dJA&s=10"
            alt="Pak Arcade Game Logo"
            width="56"
            height="56"
            loading="eager"
            decoding="async"
            className="h-11 w-11 rounded-xl object-cover sm:h-14 sm:w-14"
          />

          <div className="leading-none">
            <div className="text-lg font-black tracking-wide text-white sm:text-2xl">
              PAK
              <span className="text-yellow-400"> ARCADE</span>
            </div>

            <p className="mt-1 hidden text-[9px] font-semibold uppercase tracking-[3px] text-white/50 sm:block">
              Gaming &amp; Entertainment
            </p>
          </div>
        </Link>

        {/* ================= DESKTOP NAVIGATION ================= */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex xl:gap-9"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMenu}
              title={link.name}
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
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          aria-label="Download Pak Arcade Game"
          title="Download Pak Arcade Game"
          className="hidden items-center gap-2 rounded-full bg-yellow-400 px-5 py-3 text-sm font-extrabold uppercase tracking-wide text-[#07150e] transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-[0_0_25px_rgba(250,204,21,0.25)] lg:flex xl:px-6"
        >
          <Download size={17} aria-hidden="true" />
          <span>Download Now</span>
        </a>

        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close main navigation" : "Open main navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 lg:hidden"
        >
          {menuOpen ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* ================= MOBILE NAVIGATION ================= */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 lg:hidden ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile main navigation"
          className="mx-auto max-w-[1400px] px-5 py-5 sm:px-8"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={closeMenu}
                title={link.name}
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

          {/* Mobile Download */}
          <a
            href={downloadUrl}
            target="_blank"
            rel="nofollow sponsored noopener noreferrer"
            onClick={closeMenu}
            aria-label="Download Pak Arcade Game"
            title="Download Pak Arcade Game"
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-yellow-400 px-5 py-3.5 text-sm font-extrabold uppercase tracking-wide text-[#07150e] transition-all duration-300 hover:bg-yellow-300"
          >
            <Download size={18} aria-hidden="true" />
            <span>Download Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;