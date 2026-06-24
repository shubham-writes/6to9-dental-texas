"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-background-cream/95 backdrop-blur-sm shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="6 to 9 Dental Logo"
            width={0}
            height={0}
            sizes="100px"
            className="h-10 sm:h-12 w-auto object-contain"
            priority
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {["Home", "About", "Treatments", "Testimonials", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-text-slate hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Mobile Menu Button - Visual Only for Hero Demo */}
          <button className="lg:hidden p-2 text-text-slate">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <a
            href="tel:210-333-6911"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
          >
            📞 210-333-6911
          </a>
        </div>
      </div>
    </header>
  );
}
