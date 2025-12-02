"use client";

import { useEffect, useRef, MouseEvent } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Droplets, Shield, Leaf } from "lucide-react";

// Import 2 hero images
import heroDesktop from "/images/dnk.jpg";
import heroMobile from "/images/dnk-mob.jpg";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  text: string;
  delayMs?: number;
}

const FeatureCard = ({ icon: Icon, title, text, delayMs = 0 }: FeatureCardProps) => {
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.setProperty("--mx", `50%`);
    card.style.setProperty("--my", `50%`);
  };

  return (
    <div
      className={`
        hero-card aos-item opacity-0 translate-y-6
        transition-all duration-700 ease-out
        group relative rounded-xl glass-card
        p-5 sm:p-6
        min-w-[78%] xs:min-w-[75%]
        snap-center
        sm:min-w-0
        overflow-hidden
        cursor-default
        will-change-transform
        hover:-translate-y-2 hover:scale-105 hover:shadow-xl
      `}
      style={{
        transitionDelay: `${delayMs}ms`,
        // soft pastel blue glow instead of pink
        backgroundImage:
          "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(183,233,246,0.45), transparent 55%)",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative z-10">
        <Icon className="hero-card-icon h-10 w-10 text-primary mx-auto mb-3" />
        <h3 className="hero-card-title font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="hero-card-text text-sm text-muted-foreground">{text}</p>
      </div>
    </div>
  );
};

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // AOS animation
  useEffect(() => {
    const section = heroRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".aos-item");

    items.forEach((el) => {
      el.classList.add("opacity-0", "translate-y-6");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove("opacity-0", "translate-y-6");
            el.classList.add("opacity-100", "translate-y-0");
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen pt-16 sm:pt-16 md:pt-10 lg:pt-16 bg-background overflow-hidden"
    >
      {/* HERO IMAGE BLOCK */}
      <div className="w-full bg-background">
        <div
          className="
            relative w-full
            h-[480px] sm:h-[480px] md:h-[520px] lg:h-[740px]
          "
        >
          {/* MOBILE IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-bottom md:hidden"
            style={{
              backgroundImage: `url(${heroMobile})`,
            }}
          />

          {/* DESKTOP IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-bottom hidden md:block"
            style={{
              backgroundImage: `url(${heroDesktop})`,
            }}
          />
        </div>
      </div>

      {/* CONTENT BAR */}
      <div className="relative w-full -mt-48 sm:-mt-48 md:-mt-96 lg:-mt-64">
        <div className="container mx-auto px-4 pb-6 pt-8 md:pt-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="
                aos-item opacity-0 translate-y-6
                transition-all duration-700 ease-out
                text-3xl md:text-4xl font-bold text-foreground mb-7
              "
            >
              DAB&apos;N&apos;KLEAN — Softness You Feel. <br />
               <span className="text-primary-foreground ">Hygiene You Trust.</span>
            </h1>

            <div
              className="
                aos-item opacity-0 translate-y-6
                transition-all duration-700 ease-out
                flex flex-col sm:flex-row gap-4 justify-center mb-16
              "
              style={{ transitionDelay: "120ms" }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("products")}
                className="text-base sm:text-lg w-full sm:w-auto"
              >
                Explore Products
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("b2b")}
                className="text-base sm:text-lg w-full sm:w-auto"
              >
                Bulk Order Enquiry
              </Button>
            </div>

            {/* VALUE CARDS */}
            <div
              className="
                flex gap-4 overflow-x-auto pb-4 pt-5 mb-4
                snap-x snap-mandatory
                -mx-4 px-4
                sm:mx-0 sm:px-0
                sm:overflow-visible
                sm:grid sm:grid-cols-2 lg:grid-cols-4
              "
              style={{ scrollbarWidth: "none" }}
            >
              <style>{`
                #home ::-webkit-scrollbar { display: none; }
              `}</style>

              <FeatureCard
                icon={Sparkles}
                title="Ultra Soft"
                text="Gentle on sensitive skin"
                delayMs={0}
              />
              <FeatureCard
                icon={Droplets}
                title="Highly Absorbent"
                text="Maximum cleaning power"
                delayMs={80}
              />
              <FeatureCard
                icon={Shield}
                title="Dermatologically Tested"
                text="Safe for all skin types"
                delayMs={160}
              />
              <FeatureCard
                icon={Leaf}
                title="Eco-Conscious"
                text="Responsibly sourced materials"
                delayMs={240}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
