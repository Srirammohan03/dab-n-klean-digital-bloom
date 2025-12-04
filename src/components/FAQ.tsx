import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FallingPattern } from "@/components/ui/falling-pattern";

gsap.registerPlugin(ScrollTrigger);

export const FAQ = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-container", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      question: "Are DAB'N'KLEAN tissues safe for sensitive skin?",
      answer:
        "Absolutely! All our tissue products are dermatologically tested and hypoallergenic. They're designed to be gentle on even the most sensitive skin, including baby skin. We use premium-quality materials that are soft yet strong.",
    },
    {
      question: "Do you offer eco-friendly or recycled products?",
      answer:
        "Yes, we're committed to sustainability. We offer products made from responsibly sourced materials and have ranges that incorporate recycled fibers. Our packaging is increasingly recyclable, and we continuously work to reduce our environmental footprint.",
    },
    {
      question: "How do I place a bulk order for my business?",
      answer:
        "Placing a bulk order is easy! Simply add products to your Enquiry Cart, specify your business details and requirements, and submit. Our B2B team will contact you within 24 hours with pricing, delivery options, and any customization possibilities.",
    },
    {
      question: "What are your minimum order quantities for bulk purchases?",
      answer:
        "Minimum order quantities vary by product type. For most items, the minimum is one carton (typically 12-48 units depending on the product). For custom or private label orders, minimums may be higher. Contact us for specific MOQ information.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "For household orders, delivery typically takes 3-5 business days within our service areas. Bulk B2B orders are usually fulfilled within 5-7 business days, depending on order size and location. Rush delivery options are available for urgent requirements.",
    },
    {
      question: "Are your butter paper and wrapping paper food-safe?",
      answer:
        "Yes, absolutely! Our butter paper and wrapping paper products are 100% food-safe certified. They meet international food contact safety standards and are suitable for direct contact with all food types, including baking and cooking applications.",
    },
    {
      question: "How should I recycle or dispose of your tissue products?",
      answer:
        "Used tissues and paper towels can typically be composted if they haven't been in contact with chemicals or excessive grease. Clean, unused products can be recycled with paper waste. Check your local recycling guidelines, as regulations may vary by region.",
    },
    {
      question: "Can I get custom or private label products for my brand?",
      answer:
        "Yes! We offer private labeling and custom packaging for large orders. This is ideal for hotels, retail brands, or distributors who want to offer premium tissue products under their own brand. Contact our B2B team to discuss minimum order quantities and design options.",
    },
    {
      question: "What makes DAB'N'KLEAN different from other tissue brands?",
      answer:
        "DAB'N'KLEAN combines premium quality with thoughtful design. Our products are softer, more absorbent, and undergo stricter quality controls than standard brands. We focus on both comfort and hygiene, with dermatologically tested formulations and food-safe certifications where needed.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Currently, we primarily serve our domestic market and select neighboring regions. However, we're expanding our distribution network. If you're interested in international orders or becoming a distributor, please reach out to our team to discuss possibilities.",
    },
  ];

  return (
    <section id="faq" ref={sectionRef} className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white">
              <FallingPattern
                className="h-full w-full opacity-80"
                color="hsl(var(--primary))"
                backgroundColor="hsl(var(--background))"
                density={1.1}
                duration={140}
              />
            </div>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Got questions? We've got answers. Find everything you need to know about
            DAB'N'KLEAN products and services.
          </p>

          <div className="faq-container glass-card rounded-2xl p-6 md:p-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
