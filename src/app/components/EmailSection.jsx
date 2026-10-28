"use client";
import React, { useState } from "react";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import SectionHeading from "./SectionHeading";
import SocialLinks from "./SocialLinks";

const inputClasses =
  "block w-full rounded-lg border border-white/10 bg-base/60 p-3 font-mono text-sm text-gray-100 placeholder-slate-600 transition focus:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-400/20";

const labelClasses =
  "mb-2 block font-mono text-xs uppercase tracking-widest text-slate-400";

const EmailSection = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.email.value,
          subject: form.subject.value,
          message: form.message.value,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }
      form.reset();
      setStatus("sent");
    } catch (err) {
      setError(err.message);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="grid gap-12 md:grid-cols-2">
      <div>
        <SectionHeading
          index="04"
          eyebrow="Contact"
          title="Let's work together"
          subtitle="I'm open to new opportunities and collaborations. Whether you have a project in mind, a question, or just want to say hi, my inbox is always open."
        />
        <SocialLinks />
      </div>
      <div className="gradient-border glass overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-400/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          <span className="ml-3 font-mono text-xs text-slate-500">~/contact/new-message</span>
        </div>
        <div className="p-6 sm:p-8">
        {status === "sent" ? (
          <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
            <EnvelopeIcon className="mb-4 h-12 w-12 text-secondary-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.7)]" aria-hidden="true" />
            <p className="font-mono text-sm text-emerald-300">status: delivered ✓</p>
            <p className="mt-2 text-lg font-semibold text-white">Message sent!</p>
            <p className="mt-1 text-sm text-[#ADB7BE]">
              Thanks for reaching out — I&apos;ll get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 font-mono text-xs uppercase tracking-wider text-secondary-300 hover:text-white"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className={labelClasses}>
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="subject" className={labelClasses}>
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                maxLength={150}
                placeholder="Just saying hi"
                className={inputClasses}
              />
            </div>
            <div>
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                maxLength={5000}
                placeholder="Let's talk about..."
                className={inputClasses}
              />
            </div>
            {status === "error" && (
              <p role="alert" className="font-mono text-xs text-red-400">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="glow rounded-lg bg-gradient-to-r from-primary-600 via-fuchsia-600 to-secondary-500 bg-[length:200%_auto] px-5 py-3 font-mono text-sm uppercase tracking-wider text-white transition-[background-position] duration-500 hover:bg-right disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>
          </form>
        )}
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
