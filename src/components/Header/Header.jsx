import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setShouldRender(true); // Ensures menu is added to DOM before animation
      setTimeout(() => setIsMenuOpen(true), 10); // Small delay to trigger animation
    } else {
      setIsMenuOpen(false);
    }
  };

  const closeMenu = () => {
    setTimeout(()=>setIsMenuOpen(false),10);
    
  };

  useEffect(() => {
    if (!isMenuOpen) {
      setTimeout(() => setShouldRender(false), 200); // Delay hiding to allow animation
    }
  }, [isMenuOpen]);

  return (
    <div className="bg-teal-700 sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center mb-3">
        <Link to={"/"}>
          <h1 className="text-3xl font-medium pl-3">🚀 Acme Rockets</h1>
        </Link>
        <div>
          <button
            id="hamburger-button"
            className="text-3xl md:hidden cursor-pointer"
            onClick={toggleMenu}
          >
            &#9776;
          </button>
          <nav className="hidden md:block space-x-8 text-xl" aria-label="main">
            <Link to="/Rockets" className="hover:opacity-90 cursor-pointer">
              Our Rockets
            </Link>
            <Link to="/Testimonial" className="hover:opacity-90 cursor-pointer">
              Testimonial
            </Link>
            <Link to="/ContactUs" className="hover:opacity-90 cursor-pointer">
              Contact Us
            </Link>
          </nav>
        </div>
      </section>

      {/* Mobile Menu with Smooth Animation */}
      {shouldRender && (
        <section
          id="mobile-menu"
          className={`absolute top-0 bg-black w-full text-5xl flex-col justify-center items-center transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <button className="text-7xl self-end px-6" onClick={toggleMenu}>
            &times;
          </button>
          <nav className="flex flex-col min-h-screen items-center py-8 space-y-6">
            <Link to="/" onClick={closeMenu} className="w-full text-center hover:opacity-90 cursor-pointer">
              Home
            </Link>
            <Link to="/Rockets" onClick={closeMenu} className="w-full text-center hover:opacity-90 cursor-pointer">
              Our Rockets
            </Link>
            <Link to="/Testimonial" onClick={closeMenu} className="w-full text-center hover:opacity-90 cursor-pointer">
              Testimonial
            </Link>
            <Link to="/ContactUs" onClick={closeMenu} className="w-full text-center hover:opacity-90 cursor-pointer">
              Contact Us
            </Link>
            <Link to="/Legal" onClick={closeMenu} className="w-full text-center hover:opacity-90 cursor-pointer">
              Legal
            </Link>
          </nav>
        </section>
      )}
    </div>
  );
};

export default Header;
