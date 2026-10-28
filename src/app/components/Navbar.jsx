"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { experiences, profile } from "@/data/portfolio";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  ...(experiences.length ? [{ title: "Experience", path: "#experience" }] : []),
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div
        className={`mx-auto max-w-6xl rounded-2xl transition-all duration-300 ${
          scrolled || navbarOpen
            ? "glass bg-base/70 shadow-lg shadow-black/40"
            : "border border-transparent"
        }`}
      >
        <nav aria-label="Main" className="flex items-center justify-between px-4 py-2">
          <Link href="/" aria-label={`${profile.name} — home`}>
            <Image
              src="/images/my-logo.png"
              width={64}
              height={39}
              alt={`${profile.shortName} logo`}
              priority
            />
          </Link>
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href="#contact"
              className="gradient-border hidden items-center gap-2 rounded-xl bg-white/5 px-4 py-2 font-mono text-sm text-white transition hover:bg-white/10 sm:flex"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Let&apos;s talk
            </Link>
            <button
              type="button"
              onClick={() => setNavbarOpen((open) => !open)}
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
              aria-expanded={navbarOpen}
              aria-controls="mobile-menu"
              className="rounded-xl border border-white/15 p-2 text-slate-200 hover:border-white hover:text-white md:hidden"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </button>
          </div>
        </nav>
        {navbarOpen && (
          <MenuOverlay links={navLinks} onNavigate={() => setNavbarOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Navbar;
