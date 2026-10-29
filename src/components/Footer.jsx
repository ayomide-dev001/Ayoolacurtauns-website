const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Story", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Custom-made curtains",
  "Curtain installation",
  "Blinds & window coverings",
  "Fabric selection & consultation",
];

export default function Footer() {
  return (
    <footer className="bg-[#211f1b] text-white">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pb-12 sm:pt-20 lg:px-12 lg:pt-24">
        {/* Brand introduction */}
        <div className="grid gap-12 border-b border-white/15 pb-12 md:grid-cols-2 md:items-center md:pb-16 lg:gap-20">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[#d5b77f]">
              A More Beautiful Way to Live
            </p>

            <div className="inline-flex max-w-full items-center justify-center bg-[#f7f4ee] px-5 py-4 sm:px-7 sm:py-5">
              <img
                src="/ayoola-curtains-logo.png"
                alt="AYOOLA CURTAINS logo"
                className="h-auto max-h-24 w-auto max-w-full object-contain sm:max-h-28"
                loading="lazy"
              />
            </div>

            <p className="mt-6 max-w-lg text-sm leading-8 text-[#ded8cd] sm:text-base">
              Thoughtfully chosen fabrics, elegant window treatments and
              timeless finishes to help make every space feel more like home.
            </p>
          </div>

          <div className="md:justify-self-end md:text-left">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d5b77f]">
              Let&apos;s Talk About Your Space
            </p>

            <h2 className="max-w-lg font-serif text-3xl font-normal leading-snug text-[#f7f4ee] sm:text-4xl lg:text-5xl">
              Beautiful windows begin with a conversation.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#ded8cd] sm:text-base">
              Have a room to transform or a curtain style in mind? Get in touch
              with us to discuss your requirements.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex min-h-12 items-center border border-[#c7a76d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e4c992] transition duration-300 hover:bg-[#c7a76d] hover:text-[#211f1b] sm:text-sm"
            >
              Start an Enquiry <span className="ml-4">↗</span>
            </a>
          </div>
        </div>

        {/* Navigation and services */}
        <div className="grid grid-cols-1 gap-10 border-b border-white/15 py-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:py-16">
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b77f]">
              Explore
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="inline-block text-sm leading-6 text-[#ded8cd] transition-colors duration-300 hover:text-[#e4c992] sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b77f]">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm leading-7 text-[#ded8cd] sm:text-base"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[#d5b77f]">
              Our Reach
            </h3>

            <p className="text-sm leading-8 text-[#ded8cd] sm:text-base">
              We serve customers across Nigeria. Contact us to discuss your
              location, project requirements and available options.
            </p>

            <a
              href="#contact"
              className="mt-5 inline-flex items-center gap-3 text-sm font-medium text-[#e4c992] transition-colors hover:text-white sm:text-base"
            >
              Contact Our Team <span>↗</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-[#c8c0b3] sm:text-sm">
            © {new Date().getFullYear()} AYOOLA CURTAINS. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[#d5b77f] transition-colors hover:text-white sm:text-sm"
          >
            Back to top <span>↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
