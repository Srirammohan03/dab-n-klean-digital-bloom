import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AOS from "aos";
import "aos/dist/aos.css";

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Submitted!",
      description:
        "Thank you for contacting DAB'N'KLEAN. We'll get back to you shortly.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      inquiryType: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-blue-50 relative overflow-hidden"
    >
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-24 -right-10 h-64 w-64 rounded-full " />
        <div className="absolute bottom-0 -left-10 h-72 w-72 rounded-full " />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div
          className="max-w-3xl mx-auto text-center mb-10 contact-heading"
          data-aos="fade-up"
        >
          <p className="text-sm uppercase tracking-[0.25em] text-primary mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-3">
            Let&apos;s Talk Hygiene &amp; Bulk Orders
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Whether you&apos;re a home user, retailer, or HoReCa partner, the
            DAB&apos;N&apos;KLEAN team is just a message away.
          </p>
        </div>

        {/* Full-width glass panel */}
        <div
          className="
            relative w-full rounded-3xl bg-[#FFEBEB]/30
            shadow-xl px-5 py-8 sm:px-8 sm:py-10
          "
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* subtle top gradient accent */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-primary/60 via-primary to-primary/40 rounded-t-3xl" />

          <div className="grid gap-10 lg:gap-12 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)]">
            {/* LEFT: Info */}
            <div
              className="contact-info space-y-8"
              data-aos="fade-right"
              data-aos-delay="150"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                  Reach the DAB&apos;N&apos;KLEAN Team
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Prefer a quick call, detailed email, or just want to drop a
                  note? Choose what works best for you — we&apos;ll take it from
                  there.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="180">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Visit Us
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                       7-3-72/1, Old Kurnool Rd, 
                      <br />
                       Telangana NGOS Colony, Katedhan,
                      <br />
                      Hyderabad, Telangana 500077
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="210">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Retail@dabnklean.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3" data-aos="fade-up" data-aos-delay="240">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-accent/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Phone
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      +91 9618477733
                    </p>
                    
                  </div>
                </div>
              </div>

              <div
                className="pt-4 border-t border-border/60"
                data-aos="fade-up"
                data-aos-delay="270"
              >
                <h4 className="font-semibold text-foreground mb-2 text-sm md:text-base">
                  Business Hours (IST)
                </h4>
                <div className="text-xs md:text-sm text-muted-foreground space-y-1">
                  <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p>Saturday: 10:00 AM – 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div
              className="contact-form"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="mb-4">
                <p className="text-xs uppercase tracking-[0.22em] text-primary mb-2">
                  Quick enquiry form
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  Tell us what you&apos;re looking for
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div data-aos="fade-up" data-aos-delay="230">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div data-aos="fade-up" data-aos-delay="260">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 ... ... ...."
                    />
                  </div>
                </div>

                <div data-aos="fade-up" data-aos-delay="290">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="320">
                  <Label htmlFor="inquiryType">Type of Inquiry</Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, inquiryType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="household">
                        Household Order
                      </SelectItem>
                      <SelectItem value="b2b">B2B / Bulk Order</SelectItem>
                      <SelectItem value="distributor">
                        Distributor Interest
                      </SelectItem>
                      <SelectItem value="support">Product Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div data-aos="fade-up" data-aos-delay="350">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us how we can help you..."
                    rows={4}
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="380">
                  <Button type="submit" className="w-full" size="lg">
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
