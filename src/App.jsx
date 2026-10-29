import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Project";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Project />
      <Journal />
      <Contact />
      <Footer />

      {/* <section
        id="about"
        className="flex min-h-[60vh] items-center justify-center bg-stone-50 px-6 py-20"
      >
        <div className="max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
            About Impression
          </p>

          <h2 className="mt-5 font-serif text-4xl font-light text-stone-900 sm:text-5xl">
            Thoughtfully designed.
            <br />
            Beautifully lived.
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            We believe great interiors do more than look beautiful. They make
            everyday living feel more meaningful.
          </p>
        </div>
      </section> */}
    </>
  );
}
