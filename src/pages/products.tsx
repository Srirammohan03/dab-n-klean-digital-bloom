// src/pages/products.tsx
"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Sparkles, Leaf } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import { ProductCard, Product } from "@/components/ProductCard";
import { EnquiryCart, CartItem } from "@/components/EnquiryCart";
import { useToast } from "@/hooks/use-toast";

import kitchenTowelsImg from "/images/kitchen-towels.jpg";
import facialTissuesImg from "/images/facial-tissues.jpg";
import napkinsImg from "/images/napkins.jpg";
import paperCupsImg from "/images/paper-cups.png";
import nonWovenImg from "/images/non-woven-tissue.jpg";
import toiletRoll2PlyImg from "/images/toiletRoll2Ply.jpg";
import toiletRoll3PlyImg from "/images/toilet-roll-3ply.jpg";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { motion } from "motion/react";

/* -------------------- DATA -------------------- */

const products: Product[] = [
  {
    id: "facial-tissues",
    name: "Facial Tissues",
    description:
      "Soft, gentle, & highly absorbent facial tissues made from premium virgin pulp. Ideal for home, office, & personal hygiene.",
    features: [
      "Ultra-soft and skin-friendly",
      "Highly absorbent 2-ply / 3-ply options",
      "Made from premium virgin pulp",
      "Hygienic and dermatologically safe",
    ],
    uses: ["Home", "Office", "Travel", "Personal Care"],
    image: facialTissuesImg,
    variants: ["Box of 100", "Box of 200", "Cube Box", "Family Pack (10 Boxes)"],
  },
  {
    id: "napkins",
    name: "Napkins",
    description:
      "Soft, hygienic paper napkins available in various sizes—ideal for dining tables, events, and everyday use.",
    features: [
      "Soft and absorbent",
      "Food-grade and hygienic",
      "Available in multiple sizes",
      "Durable for dry and wet use",
    ],
    uses: ["Dining", "Events", "Restaurants", "Everyday Use"],
    image: napkinsImg,
    variants: ["Pack of 100", "Pack of 200", "Pack of 500", "Bulk (5000 pcs)"],
  },
  {
    id: "kitchen-towel",
    name: "Kitchen Towel",
    description:
      "High-absorbency, strong, and grease-resistant kitchen towels for all household cleaning and wiping needs.",
    features: [
      "3-ply/4-ply extra absorbent layers",
      "Grease and spill resistant",
      "Durable and long-lasting",
      "Ideal for household and commercial kitchens",
    ],
    uses: ["Kitchen", "HoReCa", "Cleaning", "Everyday Use"],
    image: kitchenTowelsImg,
    variants: ["Single Roll", "Pack of 2", "Pack of 4", "Bulk (24 rolls)"],
  },
  {
    id: "toilet-roll-2ply",
    name: "Toilet Roll – 2 Ply",
    description:
      "Soft yet strong 2-ply toilet rolls designed for everyday use. Perfect for homes, offices, and commercial spaces.",
    features: [
      "2-ply premium comfort",
      "Soft and gentle on skin",
      "High absorbency",
      "Long-lasting rolls",
    ],
    uses: ["Home", "Office", "HoReCa"],
    image: toiletRoll2PlyImg,
    variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
  },
  {
    id: "toilet-roll-3ply",
    name: "Toilet Roll – 3 Ply",
    description:
      "Ultra-soft, premium 3-ply toilet rolls for superior comfort and durability. Perfect for a premium hygiene experience.",
    features: [
      "3-ply luxurious softness",
      "Highly absorbent layers",
      "Extra strength and durability",
      "Made from premium virgin pulp",
    ],
    uses: ["Home", "Premium Hotels", "Commercial Use"],
    image: toiletRoll3PlyImg,
    variants: ["Pack of 4", "Pack of 12", "Pack of 24", "Bulk (96 rolls)"],
  },
  {
    id: "non-woven-tissue",
    name: "Non-Woven Tissue",
    description:
      "Eco-friendly, thick, and reusable non-woven tissues designed for heavy-duty cleaning and multipurpose usage.",
    features: [
      "Reusable and washable",
      "Stronger and thicker than paper tissues",
      "Eco-friendly material",
      "Perfect for kitchen and industrial use",
    ],
    uses: ["Kitchen", "Dusting", "Cleaning", "Multipurpose Wiping"],
    image: nonWovenImg,
    variants: ["Pack of 25", "Pack of 50", "Pack of 100", "Bulk Pack"],
  },
  {
    id: "paper-cups",
    name: "Paper Cups",
    description:
      "Strong, leak-resistant paper cups ideal for hot and cold beverages. Made from high-quality food-grade material.",
    features: [
      "100% food-grade material",
      "Leak-resistant structure",
      "Suitable for hot and cold drinks",
      "Eco-friendly and safe",
    ],
    uses: ["Home", "Office", "Cafes", "Events"],
    image: paperCupsImg,
    variants: ["150ml", "200ml", "250ml", "Custom Print Bulk Orders"],
  },
];

const clients = [
  { name: "Ratnadeep", logo: "/logos/ratnadeep.png" },
  { name: "DMart", logo: "/logos/dmart.png" },
  { name: "Reliance Retail", logo: "/logos/reliance-retail.png" },
  { name: "Vijay Diagnostic", logo: "/logos/vijay-diagnostic.png" },
  { name: "Bansal Hospitals", logo: "/logos/bansal-hospitals.png" },
  { name: "Red Rose Supermarket", logo: "/logos/red-rose.png" },
  { name: "TX Hospital", logo: "/logos/tx-hospital.png" },
  { name: "Park Hotel", logo: "/logos/park-hotel.png" },
  { name: "Value Zone", logo: "/logos/value-zone.png" },
  { name: "Amazon", logo: "/logos/amazon.png" },
  { name: "Flipkart", logo: "/logos/flipkart.png" },
];

/* -------------------- PAGE -------------------- */

const ProductsPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 80,
    });
    AOS.refresh();
  }, []);

  const handleAddToEnquiry = (
    product: Product,
    variant: string,
    quantity: number
  ) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === `${product.id}-${variant}`
    );

    if (existingItemIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += quantity;
      setCartItems(newItems);
    } else {
      setCartItems((prev) => [
        ...prev,
        {
          id: `${product.id}-${variant}`,
          name: product.name,
          variant,
          quantity,
          notes: "",
        },
      ]);
    }

    toast({
      title: "Added to Enquiry Cart",
      description: `${quantity}x ${product.name} (${variant}) added to your enquiry.`,
    });

    setCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleUpdateNotes = (id: string, notes: string) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, notes } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Put this just above `return ( ... )` inside ProductsPage
  const displayClients = clients.filter(
    (client) => client.name !== "Amazon" && client.name !== "Flipkart"
  );

  const amazonLogo = "/logos/amazon.png";
  const flipkartLogo = "/logos/flipkart.png";

  const amazonUrl =
    "https://www.amazon.in/stores/DABNKLEAN/page/DD886C88-913C-4CA8-97EA-9047078F4BC2?lp_asin=B08KY75Z8P&ref_=cm_sw_r_ud_sf_stores_RFZTEPX8DT0RE0VJRM7V&store_ref=bl_ast_dp_brandLogo_sto";

  const flipkartUrl =
    "https://www.flipkart.com/dab-n-klean-facial-tissues/p/itm4035855f704fa";


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
        {/* HERO SECTION */}
        <section
          className="
            relative w-full h-[380px] sm:h-[360px] md:h-[480px]
            overflow-hidden mt-[65px]
            bg-cover bg-center
          "
          style={{ backgroundImage: "url('/images/dnk.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/55 to-black/75" />

          <div className="relative h-full max-w-7xl mx-auto px-4 flex flex-col justify-center pt-56">
            <div data-aos="fade-up" data-aos-delay="80">
              <p className="text-xs sm:text-sm text-white/80 mb-2">
                <span className="cursor-pointer hover:text-[#FFD6E8] transition-colors">
                  Home
                </span>
                <span className="mx-2">/</span>
                <span className="font-medium">Products</span>
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="150">
              <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-white mb-3 max-w-2xl">
                Premium Tissues &amp; Hygiene Products by DAB&apos;N&apos;KLEAN
              </h1>
            </div>

            <div
              className="mt-5 flex flex-wrap gap-3"
              data-aos="fade-up"
              data-aos-delay="280"
            >
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-primary/10"
                onClick={() => {
                  const el = document.getElementById("products-grid");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View All Products
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white bg-transparent hover:bg-white/10"
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Bulk / B2B Enquiry
              </Button>
            </div>
          </div>
        </section>

        {/* PRODUCTS GRID */}
        <AuroraBackground className="h-auto items-stretch justify-start bg-background text-foreground py-16 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="aurora-animation relative flex flex-col gap-4 items-center px-4"
            id="products-grid"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <div className="container mx-auto px-4 max-w-6xl">
              <div
                className="mb-10 text-center"
                data-aos="fade-up"
                data-aos-delay="80"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  Our Range
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Everyday Hygiene, Thoughtfully Designed
                </h2>
                <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                  Choose from a portfolio that covers daily essentials for homes,
                  offices, cafés, restaurants, hotels, and healthcare spaces —
                  with quality, comfort, and safety at the core.
                </p>
              </div>

              <div
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 products-grid"
              >
                {products.map((product, index) => (
                  <div
                    key={product.id}
                    className="product-card h-full"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 50}
                  >
                    <ProductCard
                      product={product}
                      onAddToEnquiry={handleAddToEnquiry}
                    />
                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </AuroraBackground>

        {/* TRUST BADGES / QUALITY */}
        <section
          className="relative py-16 md:py-20 overflow-hidden"
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

          <div className="container mx-auto px-4 max-w-5xl">
            <div
              className="mb-10 text-center"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Quality &amp; Trust
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Why Brands Choose DAB&apos;N&apos;KLEAN
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                We treat tissues as daily essentials — not just disposables.
                Every product is built to deliver consistent performance, safety,
                and comfort.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div
                className="rounded-2xl border border-primary/10 bg-blue-50 px-5 py-6 text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <ShieldCheck className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Certified Quality
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  ISO-aligned production and multi-stage QC checks on every
                  batch.
                </p>
              </div>

              <div
                className="rounded-2xl border border-primary/10 bg-blue-50 px-5 py-6 text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay="140"
              >
                <Sparkles className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Soft, Strong &amp; Safe
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Skin-friendly, highly absorbent, and suitable for sensitive
                  use cases.
                </p>
              </div>

              <div
                className="rounded-2xl border border-primary/10 bg-blue-50 px-5 py-6 text-center shadow-sm"
                data-aos="fade-up"
                data-aos-delay="180"
              >
                <Leaf className="h-9 w-9 mx-auto text-primary mb-3" />
                <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">
                  Eco-Conscious Approach
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Focus on responsible sourcing and reduced, recyclable-first
                  packaging wherever possible.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        {/* CLIENTS SECTION */}
        <section
          className="py-16 md:py-20 bg-background"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <div className="container mx-auto px-4 max-w-6xl">
            <div
              className="mb-8 text-center"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Trusted Clients
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Serving Modern Retail, Hospitality &amp; Healthcare
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                From supermarkets and e-commerce platforms to hospitals and
                hotels, DAB&apos;N&apos;KLEAN products are part of daily
                operations across leading brands.
              </p>
            </div>

            {/* Logos in exactly 2 rows on large screens */}
            <div
              className="
                grid gap-4
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-5
                items-center
                justify-items-center
              "
            >
              {displayClients.map((client, index) => (
                <div
                  key={client.name}
                  className="
                    flex items-center justify-center
                    rounded-xl bg-accent/30
                    border border-accent/40
                    h-20 w-full max-w-[160px] px-3
                    shadow-sm
                  "
                  data-aos="zoom-in"
                  data-aos-delay={80 + index * 30}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* BUY ON row */}
            <div className="mt-8 sm:mt-10 text-center">
              <p className="text-xl sm:text-xl font-bold text-foreground mb-4 tracking-[0.22em] uppercase">
                Buy On
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
                {/* Amazon */}
                <a
                  href={amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl transition
                  "
                >
                  <img
                    src={amazonLogo}
                    alt="Amazon"
                    className="h-28  w-auto object-contain"
                  />
                  <span className="sr-only">Buy on Amazon</span>
                </a>

                {/* Flipkart */}
                <a
                  href={flipkartUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center
                    rounded-xl transition
                  "
                >
                  <img
                    src={flipkartLogo}
                    alt="Flipkart"
                    className="h-32  w-auto object-contain -mt-4"
                  />
                  <span className="sr-only">Buy on Flipkart</span>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* CTA SECTION */}
        <section
          className="relative py-14 md:py-16 overflow-hidden"
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
                  Ready to stock premium hygiene products?
                </h2>
                <p className="text-sm md:text-base text-primary/85 max-w-2xl">
                  Talk to us about custom packs, regular supply, or HoReCa bulk
                  requirements. We&apos;ll help you choose the right mix of
                  facial tissues, rolls, towels, and cups for your needs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    else window.location.href = "/contact";
                  }}
                >
                  Contact Sales
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10"
                  onClick={() => {
                    const el = document.getElementById("products-grid");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Browse Products Again
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ENQUIRY CART DRAWER */}
      <EnquiryCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onUpdateNotes={handleUpdateNotes}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      <Footer />
    </div>
  );
};

export default ProductsPage;
