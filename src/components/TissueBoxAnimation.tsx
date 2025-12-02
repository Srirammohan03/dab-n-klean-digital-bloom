"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Minus, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

const TISSUE_COUNT = 1;

export const TissueBoxAnimation = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);
  const tissuesRef = useRef<HTMLDivElement[]>([]);
  const burstRef = useRef<() => void>();

  // Scroll to contact section
  const scrollToContact = () => {
    if (typeof window === "undefined") return;

    const target = document.getElementById("contact");
    if (!target) return;

    const offset = 80; // adjust if you have a fixed header
    const y = target.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  useEffect(() => {
    if (isCollapsed) return;

    const ctx = gsap.context(() => {
      const tissues = tissuesRef.current.filter(Boolean);
      if (!tissues.length) return;

      let isPlaying = false;

      const burstOnce = () => {
        if (isPlaying || !tissues.length) return;
        isPlaying = true;

        gsap.killTweensOf(tissues);
        gsap.set(tissues, {
          yPercent: 90,
          xPercent: 0,
          rotate: 0,
          opacity: 0,
        });

        const tl = gsap.timeline({
          onComplete: () => {
            isPlaying = false;
          },
        });

        tissues.forEach((tissue, idx) => {
          tl.to(
            tissue,
            {
              yPercent: -10,
              xPercent: 0,
              rotate: -4,
              opacity: 1,
              duration: 0.45,
              ease: "power2.out",
            },
            idx * 0.12
          );

          tl.to(
            tissue,
            {
              yPercent: -180,
              xPercent: 70,
              rotate: 22,
              opacity: 0,
              duration: 0.55,
              ease: "power2.in",
            },
            idx * 0.12 + 0.45
          );
        });

        return tl;
      };

      burstRef.current = burstOnce;

      // initial burst
      burstOnce();

      // scroll-triggered bursts
      ScrollTrigger.create({
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        onUpdate: () => {
          burstOnce();
        },
      });

      // float animation
      if (boxRef.current) {
        gsap.to(boxRef.current, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }, boxRef);

    return () => ctx.revert();
  }, [isCollapsed]);

  const handleBoxClick = () => {
    burstRef.current?.();
  };

  // COLLAPSED / MINIMIZED
  if (isCollapsed) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          size="sm"
          className="rounded-full bg-primary hover:bg-primary/80 text-white shadow-lg flex items-center gap-2 px-4"
          onClick={() => setIsCollapsed(false)}
        >
          <span className="text-xs font-semibold tracking-wide">
            Show tissue box
          </span>
          <ChevronUp className="h-4 w-4" />
        </Button>
      </div>
    );
  }

  // EXPANDED
  return (
    <div
      ref={boxRef}
      className="fixed bottom-6 right-6 z-40 w-40 h-32 md:w-52 md:h-36 overflow-visible cursor-pointer"
      onClick={handleBoxClick}
    >
      {/* Minimize button with "-" icon */}
      <Button
        variant="ghost"
        size="icon"
        className="
          absolute -top-1 -right-1 z-50
          h-6 w-6 opacity-80 hover:opacity-100
          bg-white/80 hover:bg-white
          pointer-events-auto
        "
        onClick={(e) => {
          e.stopPropagation(); // don't trigger tissue burst
          setIsCollapsed(true);
        }}
      >
        <Minus className="h-4 w-4 text-primary" />
      </Button>

      <div className="relative w-full h-full flex items-end justify-center">
        {/* TISSUES – animated via GSAP */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none">
          {Array.from({ length: TISSUE_COUNT }).map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) tissuesRef.current[index] = el;
              }}
              className="absolute bottom-[54%] w-[78%] h-16 md:h-20"
              style={{ transformOrigin: "bottom center" }}
            >
              <div
                className="relative w-full h-full shadow-md"
                style={{
                  background:
                    "linear-gradient(135deg, #ffffff 0%, #f5f5f5 40%, #ffffff 100%)",
                  clipPath:
                    "polygon(0% 40%, 10% 28%, 22% 35%, 35% 22%, 48% 30%, 60% 18%, 75% 28%, 88% 20%, 100% 30%, 100% 100%, 0% 100%)",
                }}
              >
                <div className="absolute left-2 top-2 w-10 h-3 bg-white/70 rounded-full blur-[1px]" />
                <div className="absolute right-4 top-3 w-12 h-3 bg-white/60 rounded-full blur-[1px]" />
                <div className="absolute left-6 top-5 w-16 h-3 bg-slate-100/70 rounded-full blur-[1px]" />
              </div>
            </div>
          ))}
        </div>

        {/* Box */}
        <div className="relative z-10 w-[92%] h-[52%]">
          {/* Front face */}
          <div className="absolute inset-x-0 bottom-0 h-[72%] rounded-xl bg-[#0177D1] shadow-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00A7DE] via-[#0177D1] to-[#00A7DE] opacity-90" />

            <div className="absolute bottom-1 left-2 flex gap-1 text-[7px] md:text-[8px] text-white/90">
              <span>✦</span>
              <span>✧</span>
              <span>✦</span>
              <span>✧</span>
            </div>
            <div className="absolute bottom-3 right-3 flex gap-1 text-[7px] md:text-[8px] text-white/90">
              <span>✧</span>
              <span>✦</span>
            </div>

            <div className="relative flex items-center h-full pl-3">
              <span className="text-[10px] md:text-xs font-semibold tracking-[0.12em] text-white uppercase">
                Dab N Klean
              </span>
            </div>
          </div>

          {/* Top face */}
          <div className="absolute inset-x-2 bottom-[58%] h-[26%] rounded-t-xl bg-[#00A7DE] shadow-md" />

          {/* Slot */}
          <div className="absolute left-1/2 bottom-[58%] -translate-x-1/2 w-[70%] h-2 bg-[#0177D1] rounded-full shadow-sm" />
          {/* CTA text below the box, centered */}
          <button
            type="button"
            className="mt-20 z-50 text-[10px] md:text-[15px] text-center font-bold underline"
            style={{ color: "#282650",  alignItems:"center" }}
            onClick={(e) => {
              e.stopPropagation(); // prevent tissue burst
              scrollToContact();
            }}
          >
            Send Your Enquiry Now
          </button>
        </div>
        
      </div>
    </div>
  );
};
