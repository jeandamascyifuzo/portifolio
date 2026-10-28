"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { profile, projects, skills } from "@/data/portfolio";

const techCount = skills.reduce((total, group) => total + group.items.length, 0);

const stats = [
  { value: profile.yearsOfExperience, label: "Years experience" },
  { value: String(projects.length).padStart(2, "0"), label: "Projects shipped" },
  { value: String(techCount).padStart(2, "0"), label: "Technologies" },
];

const ProfileCard = () => (
  <div className="gradient-border glass glow w-72 animate-float rounded-3xl p-4 sm:w-80">
    <div className="mb-3 flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-slate-400">
      <span>Builder Pass</span>
      <span className="text-secondary-300">#001</span>
    </div>
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary-600 to-secondary-500">
      <Image
        src={profile.image}
        alt={`Portrait of ${profile.name}`}
        fill
        sizes="320px"
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-base/70 via-transparent to-transparent" />
    </div>
    <div className="mt-4 flex items-end justify-between">
      <div>
        <p className="font-semibold text-white">{profile.shortName}</p>
        <p className="font-mono text-xs text-slate-400">@{profile.handle}</p>
      </div>
      <span className="flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-1 font-mono text-[11px] text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        Available
      </span>
    </div>
    <dl className="mt-4 grid grid-cols-2 gap-2 font-mono text-[11px]">
      {[
        ["Class", profile.specialty],
        ["Base", profile.location.split(",")[0]],
      ].map(([key, value]) => (
        <div key={key} className="rounded-lg border border-white/10 bg-white/[0.03] px-2.5 py-2">
          <dt className="uppercase tracking-wider text-slate-500">{key}</dt>
          <dd className="mt-0.5 truncate text-slate-200">{value}</dd>
        </div>
      ))}
    </dl>
  </div>
);

const TechTicker = () => {
  const items = skills.flatMap((group) => group.items);
  return (
    <div
      aria-hidden="true"
      className="relative mt-20 overflow-hidden border-y border-white/10 py-4 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]"
    >
      <div className="flex w-max animate-marquee gap-10 font-mono text-sm uppercase tracking-widest text-slate-500">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            {item}
            <span className="text-secondary-400">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section aria-label="Introduction">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:col-span-7 md:text-left"
        >
          <p className="glass mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-xs text-slate-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to opportunities · {profile.location}
          </p>
          <p className="mb-3 font-mono text-sm text-secondary-300">
            <span className="text-primary-400">&gt;</span> whoami
          </p>
          <h1 className="mb-5 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient animate-gradient">{profile.name}</span>
          </h1>
          <p className="mb-5 h-8 font-mono text-lg text-white sm:text-xl">
            <span className="sr-only">{profile.roles.join(", ")}</span>
            <span aria-hidden="true">
              <span className="text-primary-400">{"{ "}</span>
              <TypeAnimation
                sequence={profile.roles.flatMap((role) => [role, 2000])}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor={false}
              />
              <span className="ml-0.5 inline-block animate-blink text-secondary-300">▍</span>
              <span className="text-primary-400">{" }"}</span>
            </span>
          </p>
          <p className="mx-auto mb-8 max-w-xl text-base text-slate-400 sm:text-lg md:mx-0">
            {profile.tagline}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
            <Link
              href="#contact"
              className="glow rounded-xl bg-gradient-to-r from-primary-600 via-fuchsia-600 to-secondary-500 bg-[length:200%_auto] px-6 py-3 font-medium text-white transition-[background-position] duration-500 hover:bg-right"
            >
              Let&apos;s build together →
            </Link>
            <Link
              href="#projects"
              className="gradient-border glass rounded-xl px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              Explore my work
            </Link>
            {profile.resumeUrl && (
              <a
                href={profile.resumeUrl}
                download
                className="gradient-border glass rounded-xl px-6 py-3 font-medium text-white transition hover:bg-white/10"
              >
                Download CV
              </a>
            )}
          </div>
          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row md:items-center">
            <dl className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex flex-col-reverse text-center md:text-left">
                  <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
                    {stat.label}
                  </dt>
                  <dd className="font-mono text-3xl font-bold text-white">{stat.value}</dd>
                </div>
              ))}
            </dl>
            <span className="hidden h-10 w-px bg-white/10 sm:block" />
            <SocialLinks />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center md:col-span-5 md:justify-end"
        >
          <ProfileCard />
        </motion.div>
      </div>
      <TechTicker />
    </section>
  );
};

export default HeroSection;
