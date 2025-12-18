import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard, Product } from "./ProductCard";
import { motion } from "motion/react";

import kitchenTowelsImg from "/images/kitchen-towels.jpg";
import facialTissuesImg from "/images/facial-tissues.jpg";
import napkinsImg from "/images/napkins.jpg";
import paperCupsImg from "/images/paper-cups.png";
import nonWovenImg from "/images/non-woven-tissue.jpg";
import toiletRoll2PlyImg from "/images/toiletRoll2Ply.jpg";
import toiletRoll3PlyImg from "/images/toilet-roll-3ply.jpg";
import { AuroraBackground } from "./ui/aurora-background";

gsap.registerPlugin(ScrollTrigger);

interface ProductsProps {
  onAddToEnquiry: (product: Product, variant: string, quantity: number) => void;
}

export const Products = ({ onAddToEnquiry }: ProductsProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const products: Product[] = [
    {
      id: "facial-tissues",
      name: "Facial Tissues",
      description:
        "Soft, gentle, and highly absorbent facial tissues made from premium virgin pulp.",
      features: [],
      uses: [],
      image: facialTissuesImg,
      variants: ["Box of 100"],
    },
    {
      id: "napkins",
      name: "Napkins",
      description: "Soft, hygienic paper napkins ideal for dining tables and events.",
      features: [],
      uses: [],
      image: napkinsImg,
      variants: ["Pack of 100"],
    },
    {
      id: "kitchen-towel",
      name: "Kitchen Towel",
      description: "High-absorbency, strong kitchen towels.",
      features: [],
      uses: [],
      image: kitchenTowelsImg,
      variants: ["Single Roll"],
    },
    {
      id: "toilet-roll-2ply",
      name: "Toilet Roll – 2 Ply",
      description: "Soft and strong toilet rolls.",
      features: [],
      uses: [],
      image: toiletRoll2PlyImg,
      variants: ["Pack of 4"],
    },
    {
      id: "toilet-roll-3ply",
      name: "Toilet Roll – 3 Ply",
      description: "Premium ultra-soft hygiene rolls.",
      features: [],
      uses: [],
      image: toiletRoll3PlyImg,
      variants: ["Pack of 4"],
    },
    {
      id: "non-woven-tissue",
      name: "Non-Woven Tissue",
      description: "Eco-friendly reusable tissue wipes.",
      features: [],
      uses: [],
      image: nonWovenImg,
      variants: ["Pack of 50"],
    },
    {
      id: "paper-cups",
      name: "Paper Cups",
      description: "Leak-resistant paper cups.",
      features: [],
      uses: [],
      image: paperCupsImg,
      variants: ["200ml"],
    },
  ];

  const scrollByAmount = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cardWidth = slider.firstElementChild?.clientWidth ?? 320;
    slider.scrollTo({
      left:
        direction === "right"
          ? slider.scrollLeft + cardWidth + 16
          : slider.scrollLeft - cardWidth - 16,
      behavior: "smooth",
    });
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="relative px-4"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Premium Products
            </h2>
          </div>

          {/* 🔥 OUTER RELATIVE WRAPPER */}
          <div className="relative">

            {/* DESKTOP LEFT ARROW — OUTSIDE SECTION */}
            <button
              onClick={() => scrollByAmount("left")}
              className="
                hidden md:flex
                absolute top-1/2 -translate-y-1/2
                -left-20
                p-3 rounded-full
                bg-white shadow-xl
                hover:scale-110 transition
                z-20
              "
            >
              <ChevronLeft />
            </button>

            {/* SLIDER */}
            <div
              ref={sliderRef}
              className="
                grid grid-flow-col
                auto-cols-[92%]
                sm:auto-cols-[minmax(260px,85%)]
                md:auto-cols-[minmax(320px,1fr)]
                lg:auto-cols-[minmax(360px,1fr)]
                gap-6
                overflow-x-auto scroll-smooth
                [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
              "
            >
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToEnquiry={onAddToEnquiry}
                />
              ))}
            </div>

            {/* DESKTOP RIGHT ARROW — OUTSIDE SECTION */}
            <button
              onClick={() => scrollByAmount("right")}
              className="
                hidden md:flex
                absolute top-1/2 -translate-y-1/2
                -right-20
                p-3 rounded-full
                bg-white shadow-xl
                hover:scale-110 transition
                z-20
              "
            >
              <ChevronRight />
            </button>
          </div>

          {/* ✅ MOBILE ARROWS (UNCHANGED) */}
          <div className="flex md:hidden justify-center gap-4 mt-4">
            <button
              onClick={() => scrollByAmount("left")}
              className="p-2 rounded-full bg-card shadow"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollByAmount("right")}
              className="p-2 rounded-full bg-card shadow"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
};
