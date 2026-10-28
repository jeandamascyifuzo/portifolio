import React from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import { featuredProject } from "@/data/portfolio";

const FeaturedProject = () => {
  const { title, company, summary, stats, tech } = featuredProject;

  return (
    <article className="gradient-border glass glow relative mb-12 overflow-hidden rounded-3xl p-6 sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary-500/20 blur-3xl"
      />
      <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-primary-200">
        <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
        Featured · {company}
      </p>
      <h3 className="max-w-3xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h3>
      <p className="mt-4 max-w-3xl text-base text-slate-400 sm:text-lg">{summary}</p>
      <dl className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col-reverse rounded-xl border border-white/10 bg-white/[0.03] p-4"
          >
            <dt className="font-mono text-[11px] uppercase tracking-widest text-slate-500">
              {stat.label}
            </dt>
            <dd className="text-gradient font-mono text-3xl font-bold">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <ul className="mt-6 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-secondary-400/20 bg-secondary-400/[0.06] px-3 py-1 font-mono text-xs text-secondary-100"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FeaturedProject;
