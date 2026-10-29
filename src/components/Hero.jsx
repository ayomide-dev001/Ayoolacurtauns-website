export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-end overflow-hidden bg-stone-900"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 scale-105 animate-[heroZoom_20s_ease-out_forwards] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=90')",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/35" />

      {/* Gradient overlay for readable text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-40 sm:pb-20 md:pb-24">
        <div className="max-w-4xl animate-[fadeIn_1s_ease-out_both]">
          {/* Small heading */}
          {/* <div className="mb-7 flex items-center gap-4">
            <span className="h-px w-10 bg-white/80" />

            <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-white/90 sm:text-xs">
              Thoughtful Interior Design
            </p>
          </div> */}

          {/* Main headline */}
          <h1 className="max-w-4xl font-serif text-5xl font-light leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Elevate Your Space
            <br />
            to <span className="italic">Define Your Elegance.</span>
          </h1>

          {/* Description */}
          <p className="mt-7 max-w-xl text-base font-normal leading-8 text-white drop-shadow-md sm:text-lg sm:leading-9">
            Transform your interiors with exquisitely crafted curtains that
            blend timeless elegance, refined textures, and exceptional quality.
            Discover the art of beautiful living, where every detail makes a
            statement.
          </p>

          {/* Call to action */}
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <a
              href="#projects"
              className="group inline-flex items-center gap-8 bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-900 transition-all duration-300 hover:-translate-y-1 hover:bg-stone-200 sm:text-xs"
            >
              Explore our work
              <span className="inline-block text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>

            <span className="text-[10px] uppercase tracking-[0.2em] text-white/70">
              Designed for living
            </span>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-20 flex items-end justify-between border-t border-white/30 pt-5 sm:mt-24">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/70 sm:text-[10px]">
            Residential · Commercial · Hospitality
          </p>

          <a
            href="#about"
            className="group flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white/80 transition-colors hover:text-white sm:text-[10px]"
          >
            Discover us
            <span className="inline-block animate-bounce text-base">↓</span>
          </a>
        </div>
      </div>
    </section>
  );
}
