"use client";

import React, { useEffect, useRef, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Heart,
  Leaf,
  CheckCircle2,
  Building2,
  Truck,
  Package,
  Award,
} from "lucide-react";
import { Cloud, ICloud } from "react-icon-cloud";
import AOS from "aos";
import "aos/dist/aos.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* -------------------- CLIENT LOGO DATA -------------------- */

type ClientLogo = {
  name: string;
  logo: string;
  url: string;
};

const clients: ClientLogo[] = [
  {
    name: "Ratnadeep",
    logo: "/logos/ratnadeep.png",
    url: "https://ratnadeepsupermarket.com/",
  },
  {
    name: "DMart",
    logo: "/logos/dmart.png",
    url: "https://www.dmart.in/",
  },
  {
    name: "Reliance Retail",
    logo: "/logos/reliance-retail.png",
    url: "https://www.relianceretail.com/",
  },
  {
    name: "Vijay Diagnostic",
    logo: "/logos/vijay-diagnostic.png",
    url: "https://www.vijaydiagnostic.com/",
  },
  {
    name: "Bansal Hospitals",
    logo: "/logos/bansal-hospitals.png",
    url: "https://bansalhospital.com/",
  },
  {
    name: "Red Rose Supermarket",
    logo: "/logos/red-rose.png",
    url: "#",
  },
  {
    name: "TX Hospital",
    logo: "/logos/tx-hospital.png",
    url: "https://txhospitals.in/",
  },
  {
    name: "Park Hotel",
    logo: "/logos/park-hotel.png",
    url: "https://www.theparkhotels.com/",
  },
  {
    name: "Value Zone",
    logo: "/logos/value-zone.png",
    url: "#",
  },
  {
    name: "Amazon",
    logo: "/logos/amazon.png",
    url: "https://www.amazon.in/",
  },
  {
    name: "Flipkart",
    logo: "/logos/flipkart.png",
    url: "https://www.flipkart.com/",
  },
];

const cloudOptions: ICloud["options"] = {
  shape: "sphere",
  depth: 0.5,
  zoom: 0.9,
  maxSpeed: 0.025,
  minSpeed: 0.01,
  initial: [0.08, 0.04],
  reverse: false,
  dragControl: true,
  wheelZoom: false,
  clickToFront: 600,
  activeCursor: "pointer",
  tooltip: "native",
  tooltipDelay: 0,
  outlineColour: "#0000",
  imageScale: 1.1,
};

/* -------------------- QUALITY SECTION -------------------- */

const QualitySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="quality"
      ref={sectionRef}
      className="py-20 bg-primary text-white"
    >
      <div className="container mx-auto px-4">
        {/* Heading block */}
        <div
          className="max-w-3xl mx-auto text-center mb-12"
          data-aos="fade-up"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Quality &amp; Sustainability
          </h2>
          <p className="text-base md:text-lg text-white/90">
            Every DAB&apos;N&apos;KLEAN product is designed to be safe on skin,
            strong in performance, and gentle on the planet — ideal for both
            homes and high-traffic business environments.
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div
            className="quality-item group relative overflow-hidden rounded-2xl bg-blue-50 p-6 sm:p-7 shadow-lg backdrop-blur-xl border border-white/40 text-foreground transition-transform duration-300 hover:-translate-y-2"
            data-aos="zoom-in-up"
            data-aos-delay="0"
          >
            <div
              className="pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 10% 0%, rgba(40,38,30,0.30), transparent 45%)",
              }}
            />
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
                first — even at scale.
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
          >
            <div
              className="pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 50% 100%, rgba(40,38,30,0.30), transparent 45%)",
              }}
            />
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
          >
            <div
              className="pointer-events-none absolute -inset-16 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(circle at 90% 0%, rgba(40,38,30,0.32), transparent 60%)",
              }}
            />
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

/* -------------------- B2B SECTION -------------------- */

interface B2BProps {
  onEnquiryOpen: () => void;
}

const B2BSection: React.FC<B2BProps> = ({ onEnquiryOpen }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".b2b-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      // fallback: go to contact page
      window.location.href = "/contact";
    }
  };

  return (
    <section
      id="b2b"
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-[#f5fcff] via-[#73cbfe] to-[#1b9ce4]/18"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div
            className="text-center mb-12"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              B2B &amp; Bulk Orders
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by hotels, restaurants, cafés, offices, and distributors
              across the region. Premium hygiene at scale, without compromise.
            </p>
          </div>

          <div
            className="glass-card rounded-2xl p-8 md:p-12 mb-8 bg-white/70 shadow-xl border border-white/60 backdrop-blur-xl"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-6 text-center">
              Why Businesses Choose DAB&apos;N&apos;KLEAN
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="b2b-item">
                <div className="flex items-start">
                  <Package className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Competitive Bulk Pricing
                    </h4>
                    <p className="text-muted-foreground">
                      Get the best value for high-volume orders. The more you
                      buy, the more you save — without cutting corners on
                      quality.
                    </p>
                  </div>
                </div>
              </div>

              <div className="b2b-item">
                <div className="flex items-start">
                  <Truck className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Reliable Supply Chain
                    </h4>
                    <p className="text-muted-foreground">
                      Never run out. We ensure consistent, on-time delivery to
                      keep your kitchens, rooms, and counters always stocked.
                    </p>
                  </div>
                </div>
              </div>

              <div className="b2b-item">
                <div className="flex items-start">
                  <Building2 className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Custom Pack Sizes
                    </h4>
                    <p className="text-muted-foreground">
                      Flexible packaging options tailored to your business
                      needs, storage constraints, and usage patterns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="b2b-item">
                <div className="flex items-start">
                  <Award className="h-10 w-10 text-primary mr-4 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Private Label Options
                    </h4>
                    <p className="text-muted-foreground">
                      For large orders, put your brand on premium, reliable
                      tissue products — powered by DAB&apos;N&apos;KLEAN
                      quality.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button size="lg" onClick={scrollToContact} className="mr-4">
                Request Bulk Quote
              </Button>
              <Button size="lg" variant="outline" onClick={onEnquiryOpen}>
                Open Enquiry Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- CLIENTS GLOBE SECTION -------------------- */

const ClientsGlobeSection: React.FC = () => {
  return (
    <section
      id="clients"
      className="relative overflow-hidden py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#f5fcff] via-[#d4f0ff] to-[#aee1fb]"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-24 -left-20 h-64 w-64 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute top-10 -right-24 h-72 w-72 rounded-full bg-[#1b9ce4]/45 blur-3xl" />
        <div className="absolute bottom-[-90px] left-1/3 h-72 w-72 rounded-full bg-[#11153f]/18 blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        {/* Heading */}
        <div
          className="text-center max-w-4xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          <p className="inline-flex items-center justify-center px-4 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase bg-white/70 text-[#11153f] mb-3">
            Trusted Partners
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11153f] mb-3">
            Our{" "}
            <span className="text-[#f3b432]">
              DAB&apos;N&apos;KLEAN
            </span>{" "}
            Hygiene Universe
          </h2>
          <p className="text-sm sm:text-base text-[#27405a]/80">
            From modern supermarkets and e-commerce giants to hospitals and
            hotels, leading brands trust DAB&apos;N&apos;KLEAN for everyday
            hygiene and bulk tissue needs.
          </p>
        </div>

        {/* Globe + legend */}
        <div className="mt-10 lg:mt-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Rotating logo cloud */}
          <div
            className="w-full lg:w-1/2 flex justify-center"
            data-aos="zoom-in"
            data-aos-delay="120"
          >
            <div
              className="
                relative
                h-[220px] w-[220px]
                sm:h-[260px] sm:w-[260px]
                md:h-[300px] md:w-[300px]
                lg:h-[340px] lg:w-[340px]
                rounded-full overflow-hidden
                bg-gradient-to-br from-[#ffffff] via-[#e9f6ff] to-[#ffffff]
                shadow-[0_20px_55px_rgba(9,38,76,0.35)]
              "
            >
              <Cloud
                options={cloudOptions}
                containerProps={{
                  style: {
                    width: "100%",
                    height: "100%",
                  },
                }}
              >
                {clients.map((client) => (
                  <a
                    key={client.name}
                    href={client.url === "#" ? undefined : client.url}
                    target={
                      client.url && client.url !== "#" ? "_blank" : undefined
                    }
                    rel={
                      client.url && client.url !== "#"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    title={client.name}
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      style={{
                        display: "block",
                        maxWidth: 60,
                        maxHeight: 40,
                        objectFit: "contain",
                      }}
                    />
                  </a>
                ))}
              </Cloud>
            </div>
          </div>

          {/* Legend chips */}
          <div
            className="w-full lg:w-1/2"
            data-aos="fade-left"
            data-aos-delay="160"
          >
            <p className="text-sm sm:text-base text-[#27405a]/85 mb-4 lg:mb-5">
              These are just some of the names who have woven
              DAB&apos;N&apos;KLEAN into their shelves, wards, rooms, and carts.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3">
              {clients.map((client) => (
                <span
                  key={client.name + "-chip"}
                  className="
                    inline-flex items-center gap-2
                    rounded-full bg-white/80
                    px-3 py-1.5
                    border border-white/90
                    text-[11px] sm:text-xs text-[#11153f]
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1b9ce4]" />
                  {client.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -------------------- MAIN PAGE -------------------- */

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

  const handleEnquiryOpen = () => {
    // hook this to an enquiry drawer / modal if you have one
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/contact";
    }
  };

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
        <section className="relative overflow-hidden mt-[65px]">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0b1437] via-[#102a6b] to-[#1b9ce4]" />
          <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-[#4fd1ff]/30 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#f6d365]/25 blur-3xl" />

          <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 max-w-6xl">
            <div className="grid gap-10 md:grid-cols-[1.1fr_minmax(0,0.9fr)] items-center">
              <div data-aos="fade-right">
                <p className="text-xs uppercase tracking-[0.25em] text-[#9fd9ff] mb-3">
                  For Businesses &amp; Partners
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Enterprise Hygiene Solutions by DAB&apos;N&apos;KLEAN
                </h1>
                <p className="text-sm md:text-base text-white/80 mb-6 max-w-xl">
                  From supermarkets and cafés to hospitals and hotels, we power
                  reliable, premium hygiene experiences — backed by quality
                  certifications, sustainable sourcing, and a partner-first
                  mindset.
                </p>
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] md:text-xs text-white border border-white/25">
                    ISO-aligned Production
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] md:text-xs text-white border border-white/25">
                    HoReCa &amp; Retail Ready
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/10 text-[11px] md:text-xs text-white border border-white/25">
                    Sustainable by Design
                  </span>
                </div>
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

              {/* Right visual – subtle glow block */}
              <div
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
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY */}
        <QualitySection />

        {/* CLIENTS GLOBE */}
        <ClientsGlobeSection />

        {/* B2B */}
        <B2BSection onEnquiryOpen={handleEnquiryOpen} />

        {/* CTA BAND */}
        <section
          className="py-14 md:py-16 bg-primary-foreground"
          data-aos="fade-up"
          data-aos-duration="800"
        >
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
