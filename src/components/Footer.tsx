"use client";

import { useEffect } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import dnkLogo from "/images/DNK-logo-new.png";

export const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  // ✅ Scroll to top for all internal footer links
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground ">
      {/* Top section */}
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
          data-aos="fade-up"
        >
          {/* Column 1: Logo + short text + socials */}
          <div className="space-y-4" data-aos="fade-up" data-aos-delay="50">
            {/* Logo + brand text */}
            <div className="flex items-center gap-3">
              <Link to="/" onClick={handleNavClick}>
                <img
                  src={dnkLogo}
                  alt="DAB'N'KLEAN Logo"
                  className="h-10 w-auto object-contain"
                />
              </Link>
            </div>

            <p className="text-sm text-white/90 max-w-xs">
              Soft, safe and dependable tissue solutions for homes, hotels,
              offices and everything in between.
            </p>
            <p className="text-sm text-white/90">
              From facial tissues to HoReCa bulk packs — we keep it clean so you
              can keep it moving.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="transition-colors hover:text-[#FFF2F3]"
                aria-label="Visit our Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-[#FFF2F3]"
                aria-label="Visit our Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="transition-colors hover:text-[#FFF2F3]"
                aria-label="Visit our LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 className="text-base font-semibold uppercase tracking-[0.25em] text-white/80 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/b2b-partner"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  B2B &amp; Partners
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Products */}
          <div data-aos="fade-up" data-aos-delay="150">
            <h4 className="text-base font-semibold uppercase tracking-[0.25em] text-white/80 mb-4">
              Our Products
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Facial Tissues
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Toilet Roll – 2 Ply
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Toilet Roll – 3 Ply
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Kitchen Towel
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Non-Woven Tissue
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Napkins
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  onClick={handleNavClick}
                  className="transition-colors hover:text-[#FFF2F3]"
                >
                  Paper Cups
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-base font-semibold uppercase tracking-[0.25em] text-white/80 mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-white/95">Phone</p>
                <p className="text-white/90">
                  <a
                    href="tel:+919618477733"
                    className="transition-colors hover:text-[#FFF2F3]"
                  >
                    +91 9618477733
                  </a>
                </p>
                
              </div>

              <div>
                <p className="font-semibold text-white/95">Email</p>
                
                <p className="text-white/90">
                  <a
                    href="mailto:Retail@dabnklean.com"
                    className="transition-colors hover:text-[#FFF2F3]"
                  >
                    Retail@dabnklean.com
                  </a>
                </p>
              </div>

              <div>
                <p className="font-semibold text-white/95">Address</p>
                <p className="text-white/90 leading-relaxed">
                  7-3-72/1, Old Kurnool Rd,
                  <br />
                  Telangana NGOS Colony, Katedhan,
                  <br />
                  Hyderabad, Telangana 500077
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/20"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
            © 2025 All Rights Reserved
          </p>
          <p className="text-xs sm:text-sm text-white/80 text-center sm:text-right">
            Powered By{" "}
            <a
              href="https://outrightcreators.com/"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline-offset-4 hover:underline transition-colors hover:text-[#FFF2F3]"
            >
              Outright Creators
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
