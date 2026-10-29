import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "PROJECTS", href: "#projects" },
    { label: "JOURNAL", href: "#journal" },
    { label: "CONTACT", href: "#contact" },
  ];

  // Change the navbar appearance when scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock background scrolling and support the Escape key.
  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  // Close the mobile menu when switching to desktop width.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* BARFIXED NAV */}
      <header
        className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ease-in-out ${
          menuOpen
            ? "bg-stone-950 shadow-none"
            : scrolled
              ? "bg-stone-50/95 shadow-sm backdrop-blur-md"
              : "bg-transparent shadow-none"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
            scrolled ? "py-3" : "py-5"
          }`}
        >
          {/* BRAND */}
          <a
            href="#home"
            onClick={closeMenu}
            aria-label="Ayoola Curtains — Home"
            className="relative z-[70] block w-36 shrink-0 transition-opacity duration-300 hover:opacity-80 sm:w-44"
          >
            <img
              src="/ayoola-curtains-logo.png"
              alt="Ayoola Curtains"
              className={`block h-auto w-full object-contain transition-all duration-300 ${
                !scrolled && !menuOpen
                  ? "brightness-0 invert"
                  : "brightness-100"
              }`}
            />
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-7 md:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative py-2 text-xs font-medium tracking-widest transition-colors duration-300 ${
                  scrolled
                    ? "text-stone-700 hover:text-stone-950"
                    : "text-white/95 hover:text-white"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                    scrolled ? "bg-stone-900" : "bg-white"
                  }`}
                />
              </a>
            ))}

            <a
              href="#contact"
              className={`ml-2 inline-flex items-center gap-2 px-5 py-3 text-xs tracking-widest transition-all duration-300 hover:-translate-y-0.5 ${
                scrolled
                  ? "bg-stone-900 text-white hover:bg-stone-700"
                  : "bg-white text-stone-900 hover:bg-stone-200"
              }`}
            >
              GET IN TOUCH <span>↗</span>
            </a>
          </div>

          {/* Mobile hamburger / close button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className={`relative z-[70] flex h-11 w-11 items-center justify-center cursor-pointer transition-colors duration-300 md:hidden ${
              !scrolled && !menuOpen ? "text-white" : "text-stone-900"
            }`}
          >
            <span className="sr-only">
              {menuOpen ? "Close menu" : "Open menu"}
            </span>

            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-1 block h-px w-6 bg-current transition-all duration-300 ease-in-out ${
                  menuOpen ? "top-2.5 rotate-45" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 block h-px w-6 bg-current transition-all duration-300 ease-in-out ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />

              <span
                className={`absolute left-0 top-4 block h-px w-6 bg-current transition-all duration-300 ease-in-out ${
                  menuOpen ? "top-2.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-50 bg-stone-950 text-stone-100 transition-[clip-path,visibility] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] md:hidden ${
          menuOpen
            ? "visible [clip-path:inset(0_0_0_0)]"
            : "invisible [clip-path:inset(0_0_0_100%)]"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto px-8 pb-10 pt-28 sm:px-12">
          <p
            className={`mb-8 text-[10px] uppercase tracking-[0.35em] text-stone-400 transition-all delay-100 duration-500 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Discover Impression
          </p>

          {/* Animated navigation links */}
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                style={{
                  transitionDelay: menuOpen ? `${120 + index * 65}ms` : "0ms",
                }}
                className={`group flex items-center justify-between border-b border-white/10 py-4 text-2xl font-light tracking-wide transition-all duration-300 hover:pl-3 hover:text-stone-300 sm:text-3xl ${
                  menuOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                }`}
              >
                <span>{link.label}</span>
                <span className="text-sm text-stone-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white">
                  ↗
                </span>
              </a>
            ))}
          </nav>

          {/* Contact button */}
          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            style={{ transitionDelay: menuOpen ? "500ms" : "0ms" }}
            className={`mt-8 flex items-center justify-between border border-white/30 px-5 py-4 text-xs tracking-[0.2em] transition-all duration-500 hover:bg-white hover:text-stone-950 ${
              menuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            GET IN TOUCH <span>↗</span>
          </a>

          {/* <div className="mt-auto flex items-center justify-between pt-12 text-[10px] uppercase tracking-[0.2em] text-stone-500">
            <span>Thoughtful interior design</span>
            <span>Est. 2026</span>
          </div> */}
        </div>
      </div>
    </>
  );
}
