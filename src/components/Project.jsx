import { useEffect, useState } from "react";

const galleryImages = [
  {
    id: 1,
    title: "Soft Neutral Living",
    category: "Living Room Inspiration",
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
    alt: "Elegant contemporary living room with a warm neutral interior",
  },
  {
    id: 2,
    title: "Calm & Comfortable",
    category: "Bedroom Inspiration",
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
    alt: "Tastefully styled modern interior with soft neutral colours",
  },
  {
    id: 3,
    title: "Modern Elegance",
    category: "Interior Inspiration",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
    alt: "Refined contemporary home interior with elegant finishes",
  },
  {
    id: 4,
    title: "Warm Minimalism",
    category: "Living Room Inspiration",
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85",
    alt: "Modern interior styled with warm, understated furnishings",
  },
  {
    id: 5,
    title: "A Touch of Luxury",
    category: "Home Styling Inspiration",
    src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=85",
    alt: "Contemporary home interior with carefully styled furniture",
  },
  {
    id: 6,
    title: "Timeless Living",
    category: "Interior Inspiration",
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=85",
    alt: "Bright, sophisticated modern home interior",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <section
      id="gallery"
      className="bg-[#f7f4ee] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-12 max-w-3xl sm:mb-16">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#947447] sm:text-sm">
            A World of Possibilities
          </p>

          <h2 className="font-serif text-4xl font-normal leading-tight text-[#29251f] sm:text-5xl md:text-6xl">
            Inspiration for
            <span className="block italic text-[#947447]">
              beautiful spaces.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#625b50] sm:text-lg">
            Explore interior styles, soothing colours and elegant spaces to
            inspire your next window transformation. Let&apos;s find a look that
            feels right for your home.
          </p>
        </div>

        {/* Inspiration notice */}
        <div className="mb-8 border-l-2 border-[#b89b68] bg-white/70 px-5 py-4">
          <p className="text-sm leading-7 text-[#625b50]">
            <span className="font-semibold text-[#29251f]">
              Design inspiration:
            </span>{" "}
            These photographs illustrate interior styles and are not
            representations of completed AYOOLA CURTAINS projects.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {galleryImages.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedImage(item)}
              aria-label={`View larger image: ${item.title}`}
              className="group min-w-0 overflow-hidden bg-white text-left focus:outline-none focus:ring-2 focus:ring-[#947447] focus:ring-offset-4"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[#e7e0d4]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.visibility = "hidden";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-white/70 bg-black/20 text-lg text-white backdrop-blur-sm transition-colors group-hover:bg-[#b89b68]">
                  ↗
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.23em] text-[#e4c992] sm:text-xs">
                    {item.category}
                  </p>

                  <h3 className="font-serif text-2xl text-white sm:text-3xl">
                    {item.title}
                  </h3>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Contact call to action */}
        <div className="mt-12 border-t border-[#ded5c6] pt-10 text-center sm:mt-16 sm:pt-14">
          <p className="mx-auto max-w-2xl text-base leading-8 text-[#625b50]">
            Have a style in mind? Tell us about your space and let&apos;s
            discuss curtain options that suit your taste and requirements.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center bg-[#29251f] px-7 py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#947447] sm:text-sm"
          >
            Discuss Your Project <span className="ml-4">↗</span>
          </a>
        </div>
      </div>

      {/* Image viewer */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#171512]/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedImage(null);
            }
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-white/30 text-3xl text-white transition-colors hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white sm:right-8 sm:top-8"
          >
            ×
          </button>

          <div className="w-full max-w-5xl">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="mx-auto max-h-[75vh] w-full object-contain"
            />

            <div className="mx-auto mt-5 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b77f]">
                {selectedImage.category}
              </p>

              <h3 className="mt-2 font-serif text-2xl text-white sm:text-3xl">
                {selectedImage.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#ded8cd]">
                An inspiration image for exploring interior styles and window
                treatments.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
