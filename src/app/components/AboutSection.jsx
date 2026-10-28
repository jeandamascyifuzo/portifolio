"use client";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";
import SectionHeading from "./SectionHeading";
import {
  certifications,
  education,
  profile,
  skills,
} from "@/data/portfolio";

const EntryList = ({ entries }) => (
  <ul className="space-y-3">
    {entries.map((entry) => (
      <li key={entry.title} className="gradient-border glass rounded-xl p-4">
        <p className="font-semibold text-white">{entry.title}</p>
        {entry.subtitle && (
          <p className="font-mono text-xs text-slate-400">{entry.subtitle}</p>
        )}
      </li>
    ))}
  </ul>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-5">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-secondary-400/20 bg-secondary-400/[0.06] px-3 py-1 font-mono text-xs text-secondary-100 transition hover:border-secondary-400/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.25)]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: <EntryList entries={education} />,
  },
  {
    title: "Certifications",
    id: "certifications",
    content: <EntryList entries={certifications} />,
  },
];

const str = (value) => <span className="text-emerald-300">&quot;{value}&quot;</span>;

// Editor-style card that renders the profile as a JS object.
const CodeCard = () => (
  <div className="gradient-border glass overflow-hidden rounded-2xl">
    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
      <span className="h-3 w-3 rounded-full bg-red-400/80" />
      <span className="h-3 w-3 rounded-full bg-amber-400/80" />
      <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
      <span className="ml-3 font-mono text-xs text-slate-500">developer.js</span>
    </div>
    <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-slate-300">
      <code>
        <span className="text-primary-400">const</span>{" "}
        <span className="text-secondary-300">developer</span> = {"{"}
        {"\n  "}name: {str(profile.name)},
        {"\n  "}role: {str(profile.roles[0])},
        {"\n  "}location: {str(profile.location)},
        {"\n  "}stack: [
        {skills.map((group) => (
          <React.Fragment key={group.category}>
            {"\n    "}
            {group.items.slice(0, 3).map((item, i) => (
              <React.Fragment key={item}>
                {i > 0 && ", "}
                {str(item)}
              </React.Fragment>
            ))}
            ,
          </React.Fragment>
        ))}
        {"\n  "}],
        {"\n  "}openToWork: <span className="text-fuchsia-300">true</span>,
        {"\n"}
        {"};"}
      </code>
    </pre>
  </div>
);

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about">
      <div className="grid items-start gap-12 md:grid-cols-2">
        <div className="md:sticky md:top-28">
          <CodeCard />
        </div>
        <div>
          <SectionHeading index="01" eyebrow="About" title="A bit about me" />
          <div className="space-y-4 text-base text-slate-400 lg:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div role="tablist" aria-label="About details" className="mt-8 flex">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                id={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>
          <div
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
            className="mt-6"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
