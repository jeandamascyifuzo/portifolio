// Fixed decorative backdrop: fading grid plus slowly drifting neon orbs.
const Background = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] animate-float rounded-full bg-primary-600/25 blur-[120px]" />
      <div
        className="absolute -right-40 top-1/3 h-[28rem] w-[28rem] animate-float rounded-full bg-secondary-500/15 blur-[120px]"
        style={{ animationDelay: "-3s" }}
      />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-600/10 blur-[120px]" />
    </div>
  );
};

export default Background;
