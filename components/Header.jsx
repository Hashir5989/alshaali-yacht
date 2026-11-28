"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import SoundAmbience from "./SoundAmbience";

export default function Header({ onOpenEnquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "New Build", href: "/new-build" },
    { name: "Refit", href: "/refit" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const isLightHeader = scrolled || pathname !== "/";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isLightHeader
            ? "bg-white/95 backdrop-blur-md border-b border-[#D9E2EC] py-3.5 shadow-lg text-[#102A43]"
            : "bg-gradient-to-b from-[#082B49]/90 via-[#082B49]/40 to-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo - Official Al Shaali Marine Insignia Lockup */}
          <Link href="/" className="flex items-center group py-0.5" aria-label="Al Shaali Marine Home">
            <div className="relative h-10 sm:h-11 md:h-12 w-48 sm:w-56 md:w-60 transition-transform duration-300 group-hover:scale-[1.02]">
              <Image
                src={isLightHeader ? "/assets/al-shaali-logo-dark.png" : "/assets/al-shaali-logo.png"}
                alt="Al Shaali Marine"
                fill
                priority
                sizes="(max-width: 640px) 192px, 240px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-sans text-[11px] tracking-[0.24em] uppercase py-1 relative transition-colors ${
                    isActive
                      ? "text-[#176B9A] font-bold"
                      : scrolled || pathname !== "/"
                      ? "text-[#102A43]/85 hover:text-[#176B9A]"
                      : "text-white/90 hover:text-[#DCEFF7]"
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#176B9A] ${
                    isActive ? "after:w-full" : "after:w-0 hover:after:w-full after:transition-all after:duration-300"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Enquire Button */}
          <div className="hidden sm:flex items-center gap-5">
            <SoundAmbience />

            <button
              onClick={() => onOpenEnquiry && onOpenEnquiry()}
              className={`px-5 py-2 text-[10.5px] tracking-[0.22em] uppercase font-semibold transition-all rounded-none ${
                scrolled || pathname !== "/"
                  ? "bg-[#082B49] text-white hover:bg-[#176B9A] shadow-md"
                  : "bg-white text-[#082B49] hover:bg-[#DCEFF7] hover:text-[#082B49] shadow-lg"
              }`}
            >
              Enquire
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <SoundAmbience />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F0EBE0] hover:text-[#C5A880] transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#071429] flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col gap-6">
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#C5A880]">
              Navigation · Al Shaali Marine
            </p>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#F0EBE0] hover:text-[#C5A880] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenEnquiry) onOpenEnquiry();
              }}
              className="btn-gold w-full text-center py-3.5"
            >
              Request Private Consultation
            </button>
            <p className="text-[10px] tracking-[0.25em] text-center text-[#F0EBE0]/40 uppercase">
              Ajman Shipyard · Dubai Harbour · Abu Dhabi
            </p>
          </div>
        </div>
      )}
    </>
  );
}
