"use client";

import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import heroImage from "/images/dnk.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { FallingPattern } from "@/components/ui/falling-pattern";
import { motion } from "motion/react";

const ContactPage = () => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: hook this up to your API / email service
    console.log("Contact form submitted");
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
        {/* HERO SECTION */}
        <section className="relative w-full h-[360px] sm:h-[320px] md:h-[520px] overflow-hidden mt-[65px]">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/70" />

          {/* Content */}
          <div className="relative h-full max-w-5xl mx-auto px-4 flex flex-col justify-end pb-10">
            {/* Breadcrumb */}
            <p
              className="text-xs sm:text-sm text-white/80 mb-2"
              data-aos="fade-up"
              data-aos-delay="80"
            >
              <span className="cursor-pointer hover:text-[#FFD6E8] transition-colors">
                Home
              </span>
              <span className="mx-2">/</span>
              <span className="font-medium">Contact</span>
            </p>

            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              data-aos="fade-up"
              data-aos-delay="140"
            >
              Contact DAB&apos;N&apos;KLEAN
            </h1>
            <p
              className="mt-2 text-sm sm:text-base text-white/80 max-w-xl"
              data-aos="fade-up"
              data-aos-delay="210"
            >
              Have a question, bulk order enquiry, or partnership idea? We&apos;re
              just a message away.
            </p>
          </div>
        </section>

        {/* CONTACT SECTION: INFO + FORM */}
        {/* <section
          className="py-16 md:py-20 "
          data-aos="fade-up"
          data-aos-duration="800"
        > */}
        
          <AuroraBackground>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="aurora-animation relative flex flex-col gap-4 items-center justify-center px-4 py-16 md:py-20"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            
          <div className="container mx-auto px-4 max-w-5xl">
            <div
              className="mb-10 text-center"
              data-aos="fade-up"
              data-aos-delay="60"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto">
                Whether you&apos;re a household customer, HoReCa partner, or
                distributor, our team is ready to support you with product
                information, pricing, and customised solutions.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] items-start">
              {/* Contact Info */}
              <div
                className="space-y-6 rounded-3xl bg-accent/30 border border-primary/10 p-6 md:p-7"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1">
                  Reach Us Directly
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Prefer to talk to a human? Call, email, or visit us — we&apos;re
                  happy to help you pick the right hygiene solutions.
                </p>

                <div className="space-y-4 text-sm md:text-base">
                  <div className="flex gap-3">
                    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Call Us
                      </p>
                      <p className="font-medium text-foreground">
                       +91 9618477733
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Email
                      </p>
                      <p className="font-medium text-foreground break-all">
                        Retail@dabnklean.com
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">
                        Address
                      </p>
                      <p className="font-medium text-foreground">
                        DAB&apos;N&apos;KLEAN HQ
                      </p>
                      <p className="text-xs text-muted-foreground">
                        7-3-72/1, Old Kurnool Rd,
                         <br />
Telangana NGOS Colony, Katedhan,

                        <br />
                        Hyderabad, Telangana 500077
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-primary/10">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Business Hours:
                  </p>
                  <p className="text-sm text-foreground">
                    Monday – Saturday: 10:00 AM – 7:00 PM
                  </p>
                </div>
              </div>

              {/* Contact Form */}
              <div
                className="rounded-3xl bg-background border border-primary/10 shadow-sm p-6 md:p-8"
                data-aos="fade-left"
                data-aos-delay="140"
              >
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-4">
                  Send Us a Message
                </h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                        placeholder="+91 ..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                        Type of Enquiry
                      </label>
                      <select
                        className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition"
                        defaultValue=""
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="retail">Retail / Household</option>
                        <option value="horeca">HoReCa / Bulk</option>
                        <option value="distribution">Distribution / Dealer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                      Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      className="w-full rounded-xl border border-border bg-background px-3 py-2 text-sm md:text-base text-foreground focus:outline-none focus:ring-2 focus:ring-primary/60 focus:border-primary/60 transition resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                    <p className="text-[11px] md:text-xs text-muted-foreground max-w-xs">
                      By submitting this form, you agree to be contacted by our
                      team regarding DAB&apos;N&apos;KLEAN products and services.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Submit Enquiry
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
           
          </motion.div>
        </AuroraBackground>
        
        {/* </section> */}

        {/* GOOGLE MAP + CTA SECTION */}
        <section
          className="py-16 md:py-20 "
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
            <div className="grid gap-8 md:grid-cols-2 items-center">
              {/* CTA Text */}
              <div data-aos="fade-right" data-aos-delay="80">
                <p className="text-xs uppercase tracking-[0.25em] text-primary mb-3">
                  Visit Us
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  See Where the Clean Starts
                </h2>
                <p className="text-sm md:text-base text-muted-foreground mb-5">
                  Drop by our office to discuss bulk orders, explore our full
                  product range, or simply say hello to the DAB&apos;N&apos;KLEAN
                  team.
                </p>

                <div className="flex flex-wrap gap-3">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    asChild
                  >
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href="tel:+919618477733">Call Us</a>
                  </Button>
                </div>
              </div>

              {/* Map Embed */}
              <div
                className="rounded-3xl overflow-hidden border border-primary/10 bg-background shadow-sm h-[260px] md:h-[320px]"
                data-aos="fade-left"
                data-aos-delay="120"
              >
                {/* Replace the src below with your actual Google Maps embed URL */}
                <iframe
                  title="DAB'N'KLEAN Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.445919901495!2d78.474!3d17.385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDIzJzA2LjAiTiA3OMKwMjgnMjYuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
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

export default ContactPage;
