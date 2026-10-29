import { useEffect, useState } from "react";

function StatCounter({ value, suffix = "", label }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const element = document.getElementById(
      `stat-${label.replace(/\s+/g, "-").toLowerCase()}`,
    );

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [label, started]);

  useEffect(() => {
    if (!started) return;

    const duration = 1600;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Ease-out animation: fast at first, then gently slows down.
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(easedProgress * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(value);
      }
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [started, value]);

  return (
    <div
      id={`stat-${label.replace(/\s+/g, "-").toLowerCase()}`}
      className="group border-l-2 border-amber-700 pl-4 transition-all duration-300 hover:border-amber-500 sm:pl-5"
    >
      <p className="font-serif text-3xl font-medium tracking-tight text-stone-950 sm:text-4xl lg:text-5xl">
        {count}
        {suffix}
      </p>

      <p className="mt-3 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-stone-700 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="overflow-hidden bg-stone-50 px-6 py-24 sm:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20">
        {/* Left: Interior image */}
        <div className="group relative">
          <div className="relative h-[420px] overflow-hidden sm:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1400&q=85"
              alt="Elegant interior with carefully selected furnishings"
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-stone-900/5 transition-colors duration-500 group-hover:bg-transparent" />
          </div>

          {/* Decorative label */}
          <div className="absolute -bottom-5 right-0 bg-white px-6 py-5 shadow-sm sm:right-[-20px]">
            <p className="font-serif text-3xl text-stone-950">01</p>

            <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-stone-600">
              Our approach
            </p>
          </div>
        </div>

        {/* Right: About content */}
        <div className="pt-6 md:pt-0">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-amber-700" />

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-800 sm:text-sm">
              About Ayoola Curtains
            </p>
          </div>

          <h2 className="mt-7 max-w-xl font-serif text-4xl font-light leading-tight text-stone-950 sm:text-5xl lg:text-6xl">
            The beauty is in
            <br />
            <span className="italic">every detail.</span>
          </h2>

          {/* Improved paragraph readability */}
          <p className="mt-7 max-w-xl text-base leading-8 text-stone-700 sm:text-lg sm:leading-9">
            At Ayoola Curtains, we believe the right curtains do more than frame
            a window. They bring warmth, character, privacy, and elegance into
            your space.
          </p>

          <p className="mt-5 max-w-xl text-base leading-8 text-stone-700 sm:text-lg sm:leading-9">
            From timeless designs to contemporary finishes, we help you create
            interiors that reflect your taste and make every room feel special.
          </p>

          <a
            href="#services"
            className="group mt-9 inline-flex items-center gap-5 border-b border-stone-900 pb-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-950 transition-colors duration-300 hover:border-amber-700 hover:text-amber-800"
          >
            Discover our story
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </a>

          {/* Animated business statistics */}
          <div className="mt-16 grid grid-cols-1 gap-8 border-t border-stone-300 pt-8 sm:grid-cols-3 sm:gap-5">
            <StatCounter value={5} suffix="+" label="Years of Experience" />

            <StatCounter value={120} suffix="+" label="Projects Completed" />

            <StatCounter value={98} suffix="%" label="Client Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
}
