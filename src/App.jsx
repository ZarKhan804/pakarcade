import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Home/Home";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Download from "./Download/Download";
import Contact from "./Contact/Contact";

/* ================= SCROLL TO TOP ================= */

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
};

/* ================= APP ================= */

const App = () => {
  return (
    <BrowserRouter>
      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      <div className="min-h-screen bg-gray-200 text-gray-900">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/blog" element={<Blog />} />

            <Route path="/download" element={<Download />} />

            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
