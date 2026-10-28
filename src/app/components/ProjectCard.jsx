import React from "react";
import Image from "next/image";
import { ArrowUpRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

const isExternal = (url) => /^https?:\/\//.test(url);
const hostname = (url) =>
  isExternal(url) ? new URL(url).hostname.replace(/^www\./, "") : "this site";

const ProjectCard = ({ project, index }) => {
  const { title, image, description, tech, liveUrl, repoUrl } = project;
  const linkProps = isExternal(liveUrl)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <article className="gradient-border glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-[11px]">
        <span className="text-slate-500">#{String(index + 1).padStart(3, "0")}</span>
        <span className="flex items-center gap-1.5 text-emerald-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
          live
        </span>
      </div>
      <a
        href={liveUrl}
        {...linkProps}
        className="relative block aspect-[16/9] overflow-hidden"
        tabIndex={-1}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent opacity-60 transition group-hover:opacity-30" />
      </a>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="font-mono text-xs text-slate-500">{hostname(liveUrl)}</p>
        {description && (
          <p className="mt-3 text-sm text-slate-400">{description}</p>
        )}
        {tech?.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-400"
              >
                {item}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-auto flex gap-4 pt-5 font-mono text-xs uppercase tracking-wider">
          <a
            href={liveUrl}
            {...linkProps}
            className="inline-flex items-center gap-1 text-secondary-300 hover:text-white"
          >
            Visit
            <span className="sr-only"> {title}</span>
            <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-slate-400 hover:text-white"
            >
              <CodeBracketIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Source
              <span className="sr-only"> for {title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
