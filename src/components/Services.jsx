const services = [
  {
    number: "01",
    title: "Custom-Made Curtains",
    description:
      "Beautifully tailored curtains designed to complement your windows, personal style, and interior.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
    alt: "Elegant living room with refined interior decor",
  },
  {
    number: "02",
    title: "Curtain Installation",
    description:
      "Careful installation that gives your curtains a neat finish and transforms the look of your windows.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=85",
    alt: "Beautifully styled modern interior",
  },
  {
    number: "03",
    title: "Blinds & Window Coverings",
    description:
      "Stylish window coverings that help you manage natural light while adding elegance to your space.",
    image:
      "https://dubaiinteriors.ae/wp-content/uploads/2024/11/luxury-blinds-2-e1730958267605.webp",
    alt: "Modern living room with elegant window blinds",
  },
  {
    number: "04",
    title: "Fabric Selection",
    description:
      "Explore fabrics, colours, and textures to find the right combination for your home or office.",
    image:
      "https://angel-drapery.com/uploads/site/home/1772836079902-izuxmm0jp8.png",
    alt: "Fabric samples being selected for an interior design project",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#f8f5ef] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">
            What We Do
          </p>

          <h2 className="text-3xl font-light leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Thoughtful details.
            <span className="block font-semibold">Beautiful spaces.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            From choosing the right fabric to the final installation, we help
            you create windows that bring elegance and comfort into your home.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.number}
              className="group overflow-hidden bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                <span className="absolute bottom-4 left-5 text-sm font-medium tracking-[0.2em] text-white">
                  {service.number}
                </span>
              </div>

              {/* Text */}
              <div className="p-6 sm:p-7">
                <div className="mb-5 h-px w-12 bg-amber-800 transition-all duration-500 group-hover:w-20" />

                <h3 className="text-xl font-medium leading-snug text-stone-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-amber-900 transition-colors hover:text-stone-500"
                >
                  Learn More
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-2"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-14 flex flex-col gap-5 border-t border-stone-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-base leading-7 text-stone-700">
            Have a window or interior project in mind? Let’s discuss how we can
            bring your vision to life.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center justify-center bg-stone-900 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-amber-800"
          >
            Discuss Your Project
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
