"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

const isCurrent = (date) => /present/i.test(date);

const Bullets = ({ items }) => (
  <ul className="mt-3 space-y-1.5 text-sm text-slate-400">
    {items.map((item) => (
      <li key={item} className="flex gap-2">
        <span className="mt-0.5 text-secondary-400" aria-hidden="true">
          ▹
        </span>
        {item}
      </li>
    ))}
  </ul>
);

const Chips = ({ items }) => (
  <ul className="mt-4 flex flex-wrap gap-2">
    {items.map((skill) => (
      <li
        key={skill}
        className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
      >
        {skill}
      </li>
    ))}
  </ul>
);

// Alternating timeline: on md+ the line runs down the middle, cards switch
// sides, and each job's dates sit opposite its card. Below md it collapses to
// one column with the line on the left.
const ExperienceSection = () => {
  if (!experiences.length) return null;

  return (
    <section id="experience" className="overflow-x-clip">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="The teams I've been part of and what I built along the way."
        center
      />
      <ol className="relative mx-auto max-w-5xl">
        <span
          aria-hidden="true"
          className="absolute left-[11px] top-0 h-full w-px bg-gradient-to-b from-primary-500 via-fuchsia-500 to-secondary-400 md:left-1/2 md:-translate-x-1/2"
        />
        {experiences.map((experience, index) => {
          const cardOnLeft = index % 2 === 0;
          const current = isCurrent(experience.date);

          return (
            <motion.li
              key={`${experience.company}-${experience.role}`}
              initial={{ opacity: 0, x: cardOnLeft ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative mb-10 grid grid-cols-[24px_1fr] gap-x-4 last:mb-0 md:mb-14 md:grid-cols-[1fr_56px_1fr] md:gap-x-0"
            >
              {/* Timeline node */}
              <div className="col-start-1 row-start-1 flex justify-center pt-6 md:col-start-2">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  {current && (
                    <span className="absolute h-full w-full animate-ping rounded-full bg-secondary-400/60" />
                  )}
                  <span className="h-3.5 w-3.5 rotate-45 border border-secondary-300 bg-base shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
                </span>
              </div>

              {/* Dates, opposite the card (desktop only) */}
              <div
                className={`hidden pt-4 md:row-start-1 md:block ${
                  cardOnLeft ? "md:col-start-3 md:pl-8 md:text-left" : "md:col-start-1 md:pr-8 md:text-right"
                }`}
              >
                {current && (
                  <span className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-2.5 py-0.5 font-mono text-[11px] text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Current
                  </span>
                )}
                <time className="text-gradient block font-mono text-xl font-bold">
                  {experience.date}
                </time>
                {experience.location && (
                  <p className="mt-1 font-mono text-xs text-slate-500">{experience.location}</p>
                )}
              </div>

              {/* Card */}
              <div
                className={`col-start-2 row-start-1 ${
                  cardOnLeft ? "md:col-start-1 md:pr-8" : "md:col-start-3 md:pl-8"
                }`}
              >
                <div className="gradient-border glass rounded-2xl p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-12px_rgba(139,92,246,0.6)]">
                  <time className="mb-1 block font-mono text-xs text-slate-500 md:hidden">
                    {experience.date}
                    {experience.location && ` · ${experience.location}`}
                  </time>
                  <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
                  <p className="font-mono text-sm text-secondary-300">{experience.company}</p>
                  {experience.description && (
                    <p className="mt-3 text-sm text-slate-400">{experience.description}</p>
                  )}
                  {experience.highlights?.length > 0 && <Bullets items={experience.highlights} />}
                  {experience.skills?.length > 0 && <Chips items={experience.skills} />}
                </div>
              </div>
            </motion.li>
          );
        })}
      </ol>
    </section>
  );
};

export default ExperienceSection;
