import type React from "react";
import { useEffect, useRef } from "react";
import { Shield, Heart, Leaf, CheckCircle2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FallingPattern } from "@/components/ui/falling-pattern";

export const Quality = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleCardMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleCardMouseLeave: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", `50%`);
    card.style.setProperty("--mouse-y", `50%`);
  };

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="relative py-20 overflow-hidden"
    >
      {/* 🔹 FallingPattern animated background */}
      <div className="absolute inset-0 -z-10 bg-white">
        <FallingPattern
          className="h-full w-full opacity-80"
          color="hsl(var(--primary))"
          backgroundColor="hsl(var(--background))"
          density={1.1}
          duration={140}
        />
      </div>

      {/* Card hover light styles */}
      <style>{`
        .quality-item {
          position: relative;
          --mouse-x: 50%;
          --mouse-y: 50%;
        }

        .quality-hover-light {
          background:
            radial-gradient(
              circle at var(--mouse-x, 30%) var(--mouse-y, 30%),
              rgba(255, 251, 235, 0.85),
              transparent 55%
            );
          mix-blend-mode: screen;
        }
      `}</style>

      <div className="container mx-auto px-4">
        {/* Heading block */}
        <div
          className="max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-4xl md:text-5xl text-primary font-bold mb-4">
            Quality &amp; Sustainability
          </h2>
          <p className="text-base md:text-lg text-primary/90">
            Every DAB&apos;N&apos;KLEAN product is designed to be safe on skin,
            strong in performance, and gentle on the planet.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div
            className="quality-item group relative overflow-hidden rounded-2xl bg-blue-50 p-6 sm:p-7 shadow-lg backdrop-blur-xl border border-white/40 text-foreground transition-transform duration-300 hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay="0"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            {/* spotlight hover that follows mouse */}
            <div className="quality-hover-light pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div
                className="inline-flex items-center justify-center rounded-2xl bg-accent p-3 mb-4"
                data-aos="fade-down"
                data-aos-delay="50"
              >
                <Shield className="h-8 w-8 text-primary" />
              </div>

              <h3
                className="text-xl md:text-2xl font-semibold text-foreground mb-3"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                Uncompromising Quality
              </h3>

              <p
                className="text-sm md:text-base text-muted-foreground mb-4"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                Built on strict checks so every pack feels as premium as the
                first.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>ISO-certified production set-up</span>
                </li>
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="240"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Multi-stage quality checks for every batch</span>
                </li>
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="280"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Regular third-party audits</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="quality-item group relative overflow-hidden rounded-2xl bg-blue-50 p-6 sm:p-7 shadow-lg backdrop-blur-xl border border-white/40 text-foreground transition-transform duration-300 hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay="150"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="quality-hover-light pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div
                className="inline-flex items-center justify-center rounded-2xl bg-accent p-3 mb-4"
                data-aos="fade-down"
                data-aos-delay="200"
              >
                <Heart className="h-8 w-8 text-primary" />
              </div>

              <h3
                className="text-xl md:text-2xl font-semibold text-foreground mb-3"
                data-aos="fade-up"
                data-aos-delay="260"
              >
                Skin-Friendly &amp; Safe
              </h3>

              <p
                className="text-sm md:text-base text-muted-foreground mb-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Made for everyday use on face, hands, and food-contact surfaces.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="340"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Dermatologically tested tissues</span>
                </li>
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="380"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Hypoallergenic, gentle on sensitive skin</span>
                </li>
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="420"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Food-safe certified butter &amp; wrapping paper</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="quality-item group relative overflow-hidden rounded-2xl bg-blue-50 p-6 sm:p-7 shadow-lg backdrop-blur-xl border border-white/40 text-foreground transition-transform duration-300 hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay="300"
            onMouseMove={handleCardMouseMove}
            onMouseLeave={handleCardMouseLeave}
          >
            <div className="quality-hover-light pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div
                className="inline-flex items-center justify-center rounded-2xl bg-accent p-3 mb-4"
                data-aos="fade-down"
                data-aos-delay="350"
              >
                <Leaf className="h-8 w-8 text-primary" />
              </div>

              <h3
                className="text-xl md:text-2xl font-semibold text-foreground mb-3"
                data-aos="fade-up"
                data-aos-delay="410"
              >
                Sustainable by Design
              </h3>

              <p
                className="text-sm md:text-base text-muted-foreground mb-4"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                Thoughtful sourcing and manufacturing to minimise our footprint.
              </p>

              <ul className="space-y-2 text-sm text-muted-foreground">
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="490"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Sustainably sourced pulp &amp; fibres</span>
                </li>
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="530"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Reduced plastic, recyclable-first packaging</span>
                </li>
                <li
                  className="flex items-start"
                  data-aos="fade-up"
                  data-aos-delay="570"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <span>Energy-efficient manufacturing practices</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
