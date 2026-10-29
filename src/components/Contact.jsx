import { useState } from "react";

const whatsappNumber = "2347047087597";

const web3FormsAccessKey = "8d3e12f2-408b-4130-bcad-bdcafbf1e6b9";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus({ type: "", message: "" });
    setWhatsappLink("");

    if (!web3FormsAccessKey) {
      setStatus({
        type: "error",
        message: "The contact form is not configured yet.",
      });
      return;
    }

    setIsSubmitting(true);

    const enquiryMessage = `
Hello AYOOLA CURTAINS,

I would like to make an enquiry.

Name: ${formData.name}
Email: ${formData.email || "Not provided"}
Service: ${formData.service}

Message:
${formData.message}

I understand that you serve customers across Nigeria.
    `.trim();

    const payload = {
      access_key: web3FormsAccessKey,
      subject: `New AYOOLA CURTAINS Enquiry - ${formData.name}`,
      from_name: "AYOOLA CURTAINS Website",
      name: formData.name,
      email: formData.email,
      service: formData.service,
      message: formData.message,
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Your enquiry could not be submitted. Please try again.",
        );
      }

      const cleanNumber = whatsappNumber.replace(/\D/g, "");

      const link = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
        enquiryMessage,
      )}`;

      setWhatsappLink(link);

      setStatus({
        type: "success",
        message:
          "Your enquiry has been submitted successfully! You can also continue with WhatsApp below.",
      });

      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.message ||
          "Something went wrong. Please check your internet connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f7f4ee] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-[#b89b68]/20"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-20">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#947447] sm:text-sm">
            Let&apos;s Create Something Beautiful
          </p>

          <h2 className="font-serif text-4xl font-normal leading-tight tracking-tight text-[#29251f] sm:text-5xl md:text-6xl lg:text-7xl">
            Your windows deserve
            <span className="mt-2 block italic text-[#947447]">
              something extraordinary.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#625b50] sm:text-lg">
            From elegant sheers to luxurious statement curtains, we help
            transform ordinary spaces into beautiful places to call home. Tell
            us what you have in mind, and let&apos;s bring your vision to life.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-sm border border-[#ded5c6] bg-white shadow-[0_25px_80px_rgba(48,38,25,0.08)] lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-[#28251f] px-7 py-10 text-white sm:px-10 sm:py-14 lg:px-12 lg:py-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full border border-[#c7a76d]/20"
            />

            <p className="relative mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#d5b77f]">
              The Personal Touch
            </p>

            <h3 className="relative max-w-sm font-serif text-3xl leading-snug sm:text-4xl">
              Thoughtfully designed. Beautifully finished.
            </h3>

            <p className="relative mt-5 max-w-md text-sm leading-7 text-[#e3ded4] sm:text-base sm:leading-8">
              Every room is different. We&apos;ll help you explore curtain
              styles, fabrics and finishes that complement your space,
              preferences and budget.
            </p>

            <div className="relative mt-10 space-y-7 border-t border-white/15 pt-8">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b77f]">
                  Service Coverage
                </p>
                <p className="text-base leading-7 text-white">
                  Serving customers across Nigeria
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#d5b77f]">
                  Enquiries
                </p>
                <p className="text-sm leading-7 text-[#e3ded4]">
                  Tell us about your windows, preferred style and project.
                  We&apos;ll continue the conversation on WhatsApp.
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hello AYOOLA CURTAINS, I would like to enquire about your services.",
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-10 inline-flex min-h-12 items-center justify-center border border-[#c7a76d] px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e4c992] transition-colors duration-300 hover:bg-[#c7a76d] hover:text-[#28251f] sm:text-sm"
            >
              Enquire on WhatsApp <span className="ml-4">↗</span>
            </a>
          </div>

          <div
            id="contact-form"
            className="min-w-0 px-6 py-10 sm:px-10 sm:py-14 lg:px-12 lg:py-16"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#947447]">
              Start Your Enquiry
            </p>

            <h3 className="font-serif text-3xl text-[#29251f] sm:text-4xl">
              Tell us about your space.
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#625b50] sm:text-base">
              Share a few details below so we can understand what you need.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Honeypot field to help filter spam bots */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-[#39342d]"
                >
                  Your full name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  maxLength={100}
                  required
                  className="min-h-12 w-full min-w-0 border border-[#ded7cc] bg-[#fdfcf9] px-4 py-3 text-base text-[#29251f] placeholder:text-[#8b8377] outline-none transition focus:border-[#947447] focus:ring-2 focus:ring-[#947447]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-[#39342d]"
                >
                  Email address{" "}
                  <span className="font-normal text-[#766e62]">(optional)</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  maxLength={254}
                  className="min-h-12 w-full min-w-0 border border-[#ded7cc] bg-[#fdfcf9] px-4 py-3 text-base text-[#29251f] placeholder:text-[#8b8377] outline-none transition focus:border-[#947447] focus:ring-2 focus:ring-[#947447]/20"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-service"
                  className="mb-2 block text-sm font-medium text-[#39342d]"
                >
                  What are you looking for?
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="min-h-12 w-full min-w-0 border border-[#ded7cc] bg-[#fdfcf9] px-4 py-3 text-base text-[#29251f] outline-none transition focus:border-[#947447] focus:ring-2 focus:ring-[#947447]/20"
                >
                  <option value="">Select a service</option>
                  <option value="Custom-made curtains">
                    Custom-made curtains
                  </option>
                  <option value="Curtain installation">
                    Curtain installation
                  </option>
                  <option value="Blinds and window coverings">
                    Blinds &amp; window coverings
                  </option>
                  <option value="Fabric selection and consultation">
                    Fabric selection &amp; consultation
                  </option>
                  <option value="Other enquiry">Other enquiry</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-sm font-medium text-[#39342d]"
                >
                  Tell us about your project
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your preferred style, location, room type or any questions..."
                  maxLength={5000}
                  required
                  className="w-full min-w-0 resize-y border border-[#ded7cc] bg-[#fdfcf9] px-4 py-3 text-base leading-7 text-[#29251f] placeholder:text-[#8b8377] outline-none transition focus:border-[#947447] focus:ring-2 focus:ring-[#947447]/20"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex min-h-14 w-full items-center justify-center gap-3 bg-[#29251f] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-[#947447] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#947447] focus:ring-offset-2 sm:text-sm"
              >
                {isSubmitting ? "Sending Enquiry..." : "Submit Enquiry"}
                {!isSubmitting && <span>↗</span>}
              </button>

              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-sm p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-800"
                  }`}
                >
                  <p>{status.message}</p>

                  {status.type === "success" && whatsappLink && (
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
                    >
                      Continue to WhatsApp ↗
                    </a>
                  )}
                </div>
              )}

              <p className="text-center text-xs leading-6 text-[#766e62]">
                Your enquiry will be sent securely through our form service. You
                can also continue your conversation with us on WhatsApp.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
