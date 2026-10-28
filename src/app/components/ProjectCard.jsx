import React from "react";
import Image from "next/image";
import {
  ArrowUpRightIcon,
  CodeBracketIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import ExpandableCover from "./ExpandableCover";
import MobileAppCover from "./MobileAppCover";
import UssdCover from "./UssdCover";

// Illustrations a project can use via `cover` instead of a screenshot.
const COVERS = { mobile: MobileAppCover, ussd: UssdCover };

const isExternal = (url) => /^https?:\/\//.test(url);
const hostname = (url) =>
  isExternal(url) ? new URL(url).hostname.replace(/^www\./, "") : "this site";

const CardImage = ({ src }) => (
  <>
    <Image
      src={src}
      alt=""
      fill
      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
      className="object-cover object-top transition duration-500 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-base/10 to-transparent opacity-60 transition group-hover:opacity-30" />
  </>
);

const ProjectCard = ({ project, index }) => {
  const { title, image, cover, description, highlights, tech, liveUrl, repoUrl } =
    project;
  const Cover = COVERS[cover];
  const linkProps =
    liveUrl && isExternal(liveUrl)
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};

  return (
    <article className="gradient-border glass group flex h-full flex-col overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.6)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5 font-mono text-[11px]">
        <span className="text-slate-500">#{String(index + 1).padStart(3, "0")}</span>
        {liveUrl ? (
          <span className="flex items-center gap-1.5 text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
            live
          </span>
        ) : (
          <span className="flex items-center gap-1.5 text-primary-300">
            <LockClosedIcon className="h-3 w-3" aria-hidden="true" />
            private · in production
          </span>
        )}
      </div>
      {Cover ? (
        <ExpandableCover Cover={Cover} title={title} />
      ) : (
        <div className="relative aspect-[16/9] overflow-hidden">
          {liveUrl ? (
            <a
              href={liveUrl}
              {...linkProps}
              className="absolute inset-0"
              tabIndex={-1}
              aria-hidden="true"
            >
              <CardImage src={image} />
            </a>
          ) : (
            <CardImage src={image} />
          )}
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {liveUrl && (
          <p className="font-mono text-xs text-slate-500">{hostname(liveUrl)}</p>
        )}
        {description && (
          <p className="mt-3 text-sm text-slate-400">{description}</p>
        )}
        {highlights?.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-slate-300">
            {highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-0.5 text-secondary-400" aria-hidden="true">
                  ▹
                </span>
                {item}
              </li>
            ))}
          </ul>
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
        {(liveUrl || repoUrl) && (
          <div className="mt-auto flex gap-4 pt-5 font-mono text-xs uppercase tracking-wider">
            {liveUrl && (
              <a
                href={liveUrl}
                {...linkProps}
                className="inline-flex items-center gap-1 text-secondary-300 hover:text-white"
              >
                Visit
                <span className="sr-only"> {title}</span>
                <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
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
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
