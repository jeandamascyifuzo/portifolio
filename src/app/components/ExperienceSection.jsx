import React from "react";
import SectionHeading from "./SectionHeading";
import { experiences } from "@/data/portfolio";

const ExperienceSection = () => {
  if (!experiences.length) return null;

  return (
    <section id="experience">
      <SectionHeading
        index="03"
        eyebrow="Experience"
        title="Where I've worked"
        subtitle="The teams I've been part of and what I built along the way."
        center
      />
      <ol className="relative mx-auto max-w-3xl border-l border-white/10">
        <span
          aria-hidden="true"
          className="absolute -left-px top-0 h-full w-px bg-gradient-to-b from-primary-500 via-fuchsia-500 to-secondary-400"
        />
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.role}`}
            className="relative mb-10 ml-8 last:mb-0"
          >
            <span
              aria-hidden="true"
              className="absolute -left-[39px] top-6 h-3.5 w-3.5 rotate-45 border border-secondary-300 bg-base shadow-[0_0_10px_rgba(34,211,238,0.8)]"
            />
            <div className="gradient-border glass rounded-2xl p-5">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-semibold text-white">
                  {experience.role}
                </h3>
                <time className="font-mono text-xs text-slate-500">
                  {experience.date}
                </time>
              </div>
              <p className="font-mono text-sm text-secondary-300">
                {experience.company}
              </p>
              {experience.description && (
                <p className="mt-3 text-sm text-slate-400">
                  {experience.description}
                </p>
              )}
              {experience.skills?.length > 0 && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ExperienceSection;
