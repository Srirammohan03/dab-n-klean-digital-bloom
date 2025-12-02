"use client";

import { useState, useEffect, useRef } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, Leaf, Quote } from "lucide-react";
import heroImage from "/images/dnk.jpg";
import heroVideo from "/videos/dnk01.mp4";
import AOS from "aos";
import "aos/dist/aos.css";

interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  duration?: number; // in ms
}

const AnimatedNumber = ({
  end,
  suffix = "",
  duration = 1500,
}: AnimatedNumberProps) => {
  const [value, setValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasAnimated) return;

    const start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);

      setValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

const AboutPage = () => {
  // Simple local cart state just to satisfy Navigation props
  const [cartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false); // if you have a real cart drawer, hook into this

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 80,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* NAVBAR */}
      <header className="bg-background z-40">
        <Navigation
          onCartOpen={() => setCartOpen(true)}
          cartItemCount={cartItems.length}
        />
      </header>

      <main className="flex-1">
        {/* HERO + BREADCRUMB */}
        <section className="relative w-full h-[400px] sm:h-[320px] md:h-[580px] overflow-hidden mt-[65px]">
          {/* Background video */}
          <div className="absolute inset-0">
            <video
              className="w-full h-full object-cover"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
            {/* Dark overlay on top of video */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/35 to-black/65" />
          </div>

          {/* Content */}
          <div
            className="relative h-full max-w-5xl mx-auto px-4 flex flex-col justify-end pb-10"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {/* Breadcrumb */}
            <p
              className="text-xs sm:text-sm text-white/80 mb-2"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="cursor-pointer hover:text-[#FFD6E8] transition-colors">
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="font-medium">About</span>
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              data-aos="fade-up"
              data-aos-delay="180"
            >
              About DAB&apos;N&apos;KLEAN
            </h1>
            <p
              className="mt-2 text-sm sm:text-base text-white/80 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="260"
            >
              Softness, hygiene, and trust — delivered in every sheet. Get to
              know the story and standards behind DAB&apos;N&apos;KLEAN.
            </p>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section
          className="py-16 md:py-20 bg-background"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div
              className="mb-10 text-center"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Who We Are
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everyday Hygiene, Elevated
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                DAB&apos;N&apos;KLEAN was created with a simple promise: make
                tissues and hygiene products that people actually love using –
                soft on the skin, strong in performance, and trustworthy for
                families, businesses, and HoReCa partners.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-start">
              <div
                className="space-y-4 text-sm md:text-base text-muted-foreground"
                data-aos="fade-right"
                data-aos-delay="120"
              >
                <p>
                  From facial tissues and toilet rolls to kitchen towels and
                  food-grade papers, each DAB&apos;N&apos;KLEAN product is
                  designed to handle real-life messes while feeling luxurious in
                  everyday use.
                </p>
                <p>
                  We work closely with quality-certified manufacturers, follow
                  strict hygiene protocols, and keep your comfort at the heart
                  of every product decision.
                </p>
                <p>
                  Whether it&apos;s a quick dab, a clean wipe, or a full kitchen
                  clean-up — DAB&apos;N&apos;KLEAN is there in every moment that
                  needs care.
                </p>
              </div>

              <div
                className="grid gap-4 sm:grid-cols-2"
                data-aos="fade-left"
                data-aos-delay="160"
              >
                <div
                  className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-6"
                  data-aos="fade-up"
                  data-aos-delay="180"
                >
                  <p className="text-3xl font-bold text-primary mb-1">
                    {/* 0 → 10 with K+ suffix */}
                    <AnimatedNumber end={10} suffix="K+" />
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    Happy Households
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Families who trust DAB&apos;N&apos;KLEAN for everyday
                    hygiene and comfort.
                  </p>
                </div>

                <div
                  className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-6"
                  data-aos="fade-up"
                  data-aos-delay="220"
                >
                  <p className="text-3xl font-bold text-primary mb-1">
                    {/* 0 → 500 with + suffix */}
                    <AnimatedNumber end={500} suffix="+" />
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    HoReCa Partners
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Restaurants, cafés and hospitality brands using our products
                    every day.
                  </p>
                </div>

                <div
                  className="rounded-2xl border border-primary/10 bg-primary/5 px-5 py-6 sm:col-span-2"
                  data-aos="fade-up"
                  data-aos-delay="260"
                >
                  <p className="text-lg font-semibold text-foreground mb-1">
                    Designed for Everyday Life
                  </p>
                  <p className="text-xs text-muted-foreground">
                    From home counters to commercial kitchens, our range is
                    crafted to fit seamlessly into your routines, not disrupt
                    them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section
          className="py-16 md:py-20 bg-accent/40"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div
              className="mb-10 text-center"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Mission &amp; Vision
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                What Drives DAB&apos;N&apos;KLEAN
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Mission Card */}
              <div
                className="rounded-3xl bg-background shadow-sm p-6 md:p-8"
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-delay="150"
              >
                <h3
                  className="text-xl md:text-2xl font-semibold text-foreground mb-3 flex items-center gap-3"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {/* Mission Icon (Target/Bullseye) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="8" />
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v3" />
                      <path d="M12 19v3" />
                      <path d="M2 12h3" />
                      <path d="M19 12h3" />
                    </svg>
                  </span>
                  Our Mission
                </h3>
                <p
                  className="text-sm md:text-base text-muted-foreground"
                  data-aos="fade-right"
                  data-aos-duration="800"
                  data-aos-delay="250"
                >
                  To make premium hygiene products accessible for every home and
                  business — combining softness, strength, and safety in every
                  sheet while maintaining ethical, responsible manufacturing.
                </p>
              </div>

              {/* Vision Card */}
              <div
                className="rounded-3xl bg-background shadow-sm p-6 md:p-8"
                data-aos="fade-left"
                data-aos-duration="800"
                data-aos-delay="200"
              >
                <h3
                  className="text-xl md:text-2xl font-semibold text-foreground mb-3 flex items-center gap-3"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="250"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    {/* Vision Icon (Eye) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </span>
                  Our Vision
                </h3>
                <p
                  className="text-sm md:text-base text-muted-foreground"
                  data-aos="fade-left"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  To become the most trusted tissue and hygiene brand in every
                  pantry, washroom, and service counter — known for clean
                  design, clean ingredients, and cleaner experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY & TRUST BADGES */}
        <section
          className="py-16 md:py-20 bg-background"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="container mx-auto px-4 max-w-5xl">
            <div
              className="mb-10 text-center"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Quality &amp; Trust
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why People Choose DAB&apos;N&apos;KLEAN
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                We don&apos;t treat tissues as disposable products — we treat
                them as daily essentials that touch your skin, your food, and
                your family.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div
                className="rounded-2xl border border-primary/10 bg-blue-50 px-5 py-6 text-center"
                data-aos="fade-up"
                data-aos-delay="120"
              >
                <ShieldCheck className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Certified Quality
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  ISO-aligned processes and thorough QC checks on every batch.
                </p>
              </div>

              <div
                className="rounded-2xl border border-primary/10 bg-blue-50 px-5 py-6 text-center"
                data-aos="fade-up"
                data-aos-delay="160"
              >
                <Sparkles className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Soft, Strong &amp; Safe
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Dermatologically considered, highly absorbent, and gentle on
                  skin.
                </p>
              </div>

              <div
                className="rounded-2xl border border-primary/10 bg-blue-50 px-5 py-6 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <Leaf className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Eco-Conscious Approach
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Focus on responsible sourcing and reduced packaging where
                  possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section
          className="py-14 md:py-16 bg-primary-foreground"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="container mx-auto px-4">
            <div
              className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  Partner With DAB&apos;N&apos;KLEAN
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Ready to stock premium hygiene products?
                </h2>
                <p className="text-sm md:text-base text-primary/85 max-w-2xl">
                  Talk to us about custom packs, regular supply, or HoReCa bulk
                  requirements. We&apos;ll help you choose the right mix for
                  your needs.
                </p>
              </div>

              <div
                className="flex flex-col sm:flex-row gap-3"
                data-aos="fade-left"
                data-aos-delay="140"
              >
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-primary/10"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Contact Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-primary hover:bg-white/10"
                  onClick={() => {
                    const el = document.getElementById("products");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Explore Products
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default AboutPage;
