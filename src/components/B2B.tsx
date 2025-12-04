import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Building2, Truck, Package, Award } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

interface B2BProps {
  onEnquiryOpen: () => void;
}

export const B2B = ({ onEnquiryOpen }: B2BProps) => {
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
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AuroraBackground>
      <motion.section
        id="b2b"
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="aurora-animation relative w-full py-20 overflow-hidden"
      >
        {/* soft glow blobs like Products section */}
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -top-28 -left-24 h-72 w-72 rounded-full bg-white/60 blur-3xl" />
          <div className="absolute top-6 -right-28 h-80 w-80 rounded-full bg-[#1b9ce4]/40 blur-3xl" />
          <div className="absolute bottom-[-80px] left-1/3 h-72 w-72 rounded-full bg-[#11153f]/18 blur-3xl" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                B2B &amp; Bulk Orders
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted by hotels, restaurants, cafés, offices, and distributors
                across the region. Premium quality at scale.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 md:p-12 mb-8 bg-background/70">
              <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                Why Choose DAB&apos;N&apos;KLEAN for Your Business?
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
                        Get the best rates for high-volume orders. The more you
                        buy, the more you save.
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
                        Never run out. We ensure consistent, on-time delivery
                        to keep your operations running smoothly.
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
                        needs and space requirements.
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
                        Available for large orders. Put your brand on premium
                        quality tissue products.
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
      </motion.section>
    </AuroraBackground>
  );
};
