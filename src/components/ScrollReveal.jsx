import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const selector = [
      "section h1",
      "section h2",
      "section h3",
      "section p",
      "section img",
      "section article",
      "section a",
      "section button",
      "section input",
      "section select",
      "section textarea",
      "footer h2",
      "footer h3",
      "footer p",
      "footer img",
      "footer a",
      "footer li",
    ].join(",");

    const excluded = ["header", "#mobile-navigation", '[role="dialog"]'].join(
      ",",
    );

    const observedElements = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target;

          if (entry.isIntersecting) {
            element.classList.add("scroll-reveal-visible");
          } else {
            element.classList.remove("scroll-reveal-visible");
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -20px 0px",
      },
    );

    const observeElements = (root) => {
      if (!(root instanceof Element || root instanceof Document)) return;

      if (root instanceof Element && root.matches(selector)) {
        if (!root.closest(excluded)) {
          addElement(root);
        }
      }

      root.querySelectorAll(selector).forEach((element) => {
        if (!element.closest(excluded)) {
          addElement(element);
        }
      });
    };

    const addElement = (element) => {
      if (observedElements.has(element)) return;

      observedElements.add(element);
      element.classList.add("scroll-reveal");
      observer.observe(element);
    };

    observeElements(document);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof Element) {
            observeElements(node);
          }
        });
      });
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      observedElements.clear();
    };
  }, []);

  return null;
}
