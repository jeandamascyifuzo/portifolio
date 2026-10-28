const SectionHeading = ({ index, eyebrow, title, subtitle, center = false }) => {
  return (
    <div className={`mb-10 md:mb-14 ${center ? "text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-secondary-300 ${
            center ? "justify-center" : ""
          }`}
        >
          {index && <span className="text-primary-400">{index}</span>}
          <span className="h-px w-8 bg-gradient-to-r from-primary-500 to-secondary-400" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-base text-slate-400 sm:text-lg ${
            center ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
