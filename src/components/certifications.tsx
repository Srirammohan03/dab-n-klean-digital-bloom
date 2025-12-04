"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const certifications = [
  {
    name: "ISO 9001",
    logo: "/images/ISO 9001.png",
  },
  {
    name: "ISO 14001",
    logo: "/images/ISO 14001.png",
  },
  {
    name: "ISO 22001",
    logo: "/images/ISO 22001.png",
  },
  {
    name: "FSC Certified",
    logo: "/images/FSC Logo.png",
  },
  {
    name: "SMETA Certified",
    logo: "/images/smeta.jpeg",
  },
];

// Duplicate list so it can loop seamlessly
const loopedCerts = [...certifications, ...certifications];

export const CertificationsSection = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Init AOS
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });

    const container = carouselRef.current;
    if (!container) return;

    let paused = false;
    let animationFrameId: number;
    const speed = 0.5; // px per frame (~30px/s at 60fps)

    const animate = () => {
      const c = carouselRef.current;
      if (c && !paused) {
        c.scrollLeft += speed;

        // When we've scrolled past one full set, jump back by that width
        const maxScroll = c.scrollWidth / 2;
        if (c.scrollLeft >= maxScroll) {
          c.scrollLeft = c.scrollLeft - maxScroll;
        }
      }
      animationFrameId = window.requestAnimationFrame(animate);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
    };

    // Pause auto-scroll on hover/touch, resume afterwards
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("touchstart", pause, { passive: true });
    container.addEventListener("touchend", resume);
    container.addEventListener("touchcancel", resume);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("touchstart", pause);
      container.removeEventListener("touchend", resume);
      container.removeEventListener("touchcancel", resume);
    };
  }, []);

  return (
    <section
      id="certifications"
      className="w-full bg-slate-5 pb-3 pt-4"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-3">
        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="mt-3 text-4xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Certifications
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="mt-8 sm:mt-10"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div
            ref={carouselRef}
            className="
              flex gap-4 sm:gap-6
              overflow-x-scroll
              pb-2
              no-scrollbar
            "
            style={{
              scrollbarWidth: "none", // Firefox
              msOverflowStyle: "none", // IE/Edge
            }}
          >
            {loopedCerts.map((cert, idx) => (
              <div
                key={cert.name + idx}
                data-cert-item
                className="
                  flex-shrink-0
                  w-40 h-24
                  sm:w-48 sm:h-28
                  md:w-56 md:h-32
                  rounded-2xl
                  bg-white
                  shadow-sm
                  border border-slate-100
                  flex items-center justify-center
                  px-4
                "
              >
                <img
                  src={cert.logo}
                  alt={cert.name}
                  className="max-h-[70%] max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          {/* Small helper text */}
          {/* <p className="mt-3 text-center text-[11px] sm:text-xs text-slate-500">
            Swipe left or right on mobile to explore certifications.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
