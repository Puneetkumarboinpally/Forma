const HeroSection = () => {
  return (
    <section className="hero-section">
      <div
        className="flex h-screen flex-col items-center 
      justify-center gap-8 px-6 text-center"
      >
        <div className="space-y-5">
          <h1
            className="font-display text-6xl font-medium leading-[0.95] 
          text-white md:text-7xl lg:text-8xl"
          >
            Furniture for Considered
            <br />
            living
          </h1>

          <p
            className="mx-auto max-w-3xl text-sm leading-7 
          text-white/90"
          >
            Thoughtfully designed pieces for spaces that feel like home.
            <br />
            Architectural precision meeting editorial warmth.
          </p>
        </div>
        <button
          className="rounded-md bg-accent px-7 py-3 text-sm 
        font-semibold text-accent-foreground
         transition-all duration-300 hover:bg-accent-hover hover:-translate-y-2"
        >
          SHOP COLLECTION
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
