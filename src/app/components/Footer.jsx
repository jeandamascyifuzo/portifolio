import React from "react";
import BackToTop from "./BackToTop";
import SocialLinks from "./SocialLinks";
import { profile } from "@/data/portfolio";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 -top-px mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-secondary-400 to-transparent"
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-mono text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name} · Built with Next.js
        </p>
        <div className="flex items-center gap-6">
          <BackToTop />
          <SocialLinks size={28} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
