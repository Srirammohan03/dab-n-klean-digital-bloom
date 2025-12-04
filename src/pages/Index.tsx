import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Products } from "@/components/Products";
import { Quality } from "@/components/Quality";
import { B2B } from "@/components/B2B";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { EnquiryCart, CartItem } from "@/components/EnquiryCart";
import { TissueBoxAnimation } from "@/components/TissueBoxAnimation";
import { Product } from "@/components/ProductCard";
import { useToast } from "@/hooks/use-toast";
import { Footer } from "@/components/Footer";
import CertificationsSection from "@/components/certifications";
import { ClientsSection } from "@/components/ClientsSection";
import ClientsGlobeSection from "@/components/ClientsGlobeSection";
import ClientsCloudSection from "@/components/ClientsCloudSection";

const Index = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  const handleAddToEnquiry = (product: Product, variant: string, quantity: number) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === `${product.id}-${variant}`
    );

    if (existingItemIndex >= 0) {
      const newItems = [...cartItems];
      newItems[existingItemIndex].quantity += quantity;
      setCartItems(newItems);
    } else {
      setCartItems([
        ...cartItems,
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
  };

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleUpdateNotes = (id: string, notes: string) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, notes } : item))
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen">
      <Navigation onCartOpen={() => setCartOpen(true)} cartItemCount={cartItems.length} />
      <Hero />
      
      <CertificationsSection />
      <Products onAddToEnquiry={handleAddToEnquiry} />
      <Quality />
      <B2B onEnquiryOpen={() => setCartOpen(true)} />
        <ClientsGlobeSection />

      <FAQ />
      <Contact />
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
      <TissueBoxAnimation />
     
    </div>
  );
};

export default Index;
