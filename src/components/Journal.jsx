const articles = [
  {
    category: "Curtain Styling",
    title: "How to Choose the Perfect Curtains for Your Living Room",
    description:
      "Discover how curtain colours, fabrics, and lengths can transform your living room into an elegant and welcoming space.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Fabric Guide",
    title: "Understanding Curtain Fabrics",
    description:
      "From sheer fabrics to heavier materials, learn how to choose curtains that suit your privacy, lighting, and style needs.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85",
  },
  {
    category: "Bedroom Inspiration",
    title: "Creating a Calm and Luxurious Bedroom",
    description:
      "Explore simple ways to combine colours, textures, and curtains to create a peaceful bedroom you'll love.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
];

// Replace these examples with genuine customer reviews and photos.
const reviews = [
  {
    name: "Customer Name",
    project: "Living Room Curtains",
    rating: 5,
    review:
      "Replace this with a genuine customer's feedback about the quality of the curtains and their experience with AYOOLA CURTAINS.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    name: "Customer Name",
    project: "Bedroom Curtains",
    rating: 5,
    review:
      "Add an authentic review describing the customer's experience, service, fabric selection, or finished project.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=85",
  },
  {
    name: "Customer Name",
    project: "Home Styling",
    rating: 5,
    review:
      "Use real feedback from a customer who is happy to have their review and photograph displayed on your website.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=85",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-[#f8f5ef] px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Journal introduction */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">
            The Journal
          </p>

          <h2 className="text-3xl font-light leading-tight text-stone-900 sm:text-4xl lg:text-5xl">
            Ideas, inspiration,
            <span className="block font-semibold">and beautiful living.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-stone-600 sm:text-lg">
            Explore curtain styling ideas, fabric guides, and practical tips to
            help you create a home that reflects your personality.
          </p>
        </div>

        {/* Journal article cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="group overflow-hidden bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-6 sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-800">
                  {article.category}
                </p>

                <h3 className="mt-4 text-xl font-medium leading-snug text-stone-900">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-stone-600">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Customer reviews */}
        <div id="reviews" className="mt-24 border-t border-stone-300 pt-20">
          <div className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-800">
              Client Testimonials
            </p>

            <h2 className="text-3xl font-light text-stone-900 sm:text-4xl">
              What our clients
              <span className="block font-semibold">say about us.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-stone-600">
              Our clients' experiences matter. Share genuine feedback from
              customers who have trusted us with their spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((client, index) => (
              <article
                key={`${client.name}-${index}`}
                className="bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-lg sm:p-8"
              >
                {/* Star rating */}
                <div
                  className="flex gap-1 text-xl text-amber-600"
                  aria-label={`${client.rating} out of 5 stars`}
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} aria-hidden="true">
                      {i < client.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm leading-7 text-stone-600">
                  “{client.review}”
                </p>

                {/* Customer picture and details */}
                <div className="mt-7 flex items-center gap-4 border-t border-stone-200 pt-5">
                  <img
                    src={client.image}
                    alt={`Placeholder portrait for ${client.name}`}
                    loading="lazy"
                    className="h-14 w-14 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-stone-900">
                      {client.name}
                    </h3>
                    <p className="mt-1 text-xs text-stone-500">
                      {client.project}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-center text-xs leading-6 text-stone-500">
            Sample content: replace the names, reviews, photographs, and ratings
            with genuine customer information before publishing.
          </p>
        </div>

        {/* Contact call to action */}
        <div className="mt-20 bg-stone-900 px-6 py-12 text-center sm:px-12 sm:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-300">
            Let's Talk About Your Space
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-light leading-tight text-white sm:text-4xl">
            Ready to transform
            <span className="block font-semibold">your windows?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-stone-300 sm:text-base">
            Let's discuss the right curtains and fabrics for your home.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center bg-[#c6a36a] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-stone-950 transition-colors hover:bg-white"
          >
            Contact Us{" "}
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
