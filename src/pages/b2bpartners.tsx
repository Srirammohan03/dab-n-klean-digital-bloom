"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Quality } from "@/components/Quality";
import { B2B } from "@/components/B2B";
import { FallingPattern } from "@/components/ui/falling-pattern";
import AOS from "aos";
import "aos/dist/aos.css";
import ClientsGlobeSection from "@/components/ClientsCloudSection";

const PartnersPage: React.FC = () => {
  const [cartItems] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

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
        {/* HERO */}
        <section className="relative overflow-hidden mt-[65px] h-[70vh] min-h-[500px]">
          {/* Background image + gradient overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/dnk.jpg"
              alt="B2B & bulk hygiene solutions"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          {/* Glow blobs on top of overlay */}
          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#4fd1ff]/30 blur-3xl" />
            <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#f6d365]/25 blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4 py-16 md:py-24 max-w-6xl ">
            <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
              <div data-aos="fade-right" className="mt-52">
                <p className="text-xs uppercase tracking-[0.25em] text-[#9fd9ff] mb-3">
                  For Businesses &amp; Partners
                </p>
                <h1 className="text-3xl sm:text-3xl md:text-3xl font-bold text-white mb-4">
                  Enterprise Hygiene Solutions by DAB&apos;N&apos;KLEAN
                </h1>
                {/* <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl">
                  From supermarkets and cafés to hospitals and hotels, we power
                  reliable, premium hygiene experiences — backed by quality
                  certifications, sustainable sourcing, and a partner-first
                  mindset.
                </p> */}
                {/* <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] md:text-xs text-white border border-white/25">
                    ISO-aligned Production
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] md:text-xs text-white border border-white/25">
                    HoReCa &amp; Retail Ready
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] md:text-xs text-white border border-white/25">
                    Sustainable by Design
                  </span>
                </div> */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-primary/10"
                    onClick={() => {
                      const element = document.getElementById("b2b");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Explore B2B Solutions
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white bg-primary hover:bg-white/10"
                    onClick={() => {
                      window.location.href = "/contact";
                    }}
                  >
                    Talk to Our Team
                  </Button>
                </div>
              </div>

              {/* Right visual – optional card (currently commented out) */}
              {/* <div
                className="hidden md:flex justify-center"
                data-aos="fade-left"
              >
                <div className="relative h-64 w-full max-w-sm rounded-3xl bg-gradient-to-br from-white/90 via-[#e3f3ff] to-white/95 shadow-[0_25px_60px_rgba(0,0,0,0.45)] border border-white/70 p-6 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-primary mb-2">
                      Trusted By
                    </p>
                    <p className="text-2xl font-bold text-foreground mb-1">
                      500+ Businesses
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Hotels, supermarkets, hospitals &amp; more across the
                      region.
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary mb-2">
                      Product Range
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Facial tissues, toilet rolls, kitchen rolls, napkins,
                      butter &amp; wrapping paper — tailored for front-of-house
                      and back-of-house needs.
                    </p>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                    <div>
                      <p className="text-xs font-semibold text-primary">
                        Avg. Reorder Cycle
                      </p>
                      <p className="text-sm text-foreground">Every 2–4 weeks</p>
                    </div>
                    <div className="flex -space-x-2">
                      <span className="h-7 w-7 rounded-full bg-primary/10 border border-primary/30" />
                      <span className="h-7 w-7 rounded-full bg-[#1b9ce4]/30 border border-primary/30" />
                      <span className="h-7 w-7 rounded-full bg-[#f3b432]/40 border border-primary/30" />
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>


{/* B2B */}
        <B2B onEnquiryOpen={() => setCartOpen(true)} />

          {/* CLIENTS GLOBE (ensure scroll target exists) */}
        <section id="clients">
          <ClientsGlobeSection />
        </section>
        {/* QUALITY */}
        <Quality />

        

        

        {/* CTA BAND */}
        <section
          className="relative py-14 md:py-16"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          {/* FallingPattern as background */}
          <div className="absolute inset-0 -z-10 opacity-80">
            <FallingPattern
              className="h-full w-full"
              color="hsl(var(--primary))"
              backgroundColor="hsl(var(--background))"
              density={1.1}
              duration={140}
            />
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                  Partner With DAB&apos;N&apos;KLEAN
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                  Ready to upgrade hygiene across your locations?
                </h2>
                <p className="text-sm md:text-base text-primary/85 max-w-2xl">
                  Share your requirements and we&apos;ll help you build a
                  customised hygiene stack — from guest rooms and restrooms to
                  kitchens and service counters.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    window.location.href = "/contact";
                  }}
                >
                  Contact Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    const element = document.getElementById("clients");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  View Our Clients
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

export default PartnersPage;
