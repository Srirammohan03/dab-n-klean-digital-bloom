import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  uses: string[];
  image: string;
  variants: string[];
}

interface ProductCardProps {
  product: Product;
  onAddToEnquiry: (
    product: Product,
    variant: string,
    quantity: number
  ) => void;
}

export const ProductCard = ({ product, onAddToEnquiry }: ProductCardProps) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToEnquiry = () => {
    onAddToEnquiry(product, selectedVariant, quantity);
  };

  return (
    <div
      className="
        rounded-2xl overflow-hidden bg-blue-50
        transition-all duration-300
        h-full flex flex-col
        w-full max-w-full
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden w-full">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 w-full max-w-full">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground mb-2">
          {product.name}
        </h3>

        <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3">
          {product.description}
        </p>

        {/* CTA */}
        <div className="mt-auto">
          <Button
            onClick={handleAddToEnquiry}
            className="w-full"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add to Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
};
