import { Heart } from "lucide-react";
import type { FurnitureProduct } from "../data/products";

type ProductCardProps = {
  product: FurnitureProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div
      className="overflow-hidden
    rounded-lg
    border
    border-border
    bg-surface
    shadow-lg

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-xl"
    >
      <div className="h-70 relative w-full overflow-hidden group">
        <img
          src={product.img}
          alt={product.title}
          className="h-full w-full object-cover
           transition-all duration-500 
           group-hover:scale-110"
        />
        <button
          className="
    absolute
    right-3
    top-3
    rounded-full
    bg-surface/90
    p-2
    transition-all
    duration-300
    hover:bg-accent
    hover:scale-110
    active:scale-95
  "
        >
          <Heart className="h-5 w-5" />
        </button>
        <button
          className="absolute left-1/2 -translate-x-1/2 bottom-10 translate-y-40
        py-2 px-3 rounded-md cursor-pointer active:scale-95
        bg-surface font-bold font-body opacity-0
        transition-all duration-500
        hover:bg-accent 
        group-hover:translate-y-0 group-hover:opacity-100
        "
        >
          View Full Details
        </button>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <div className="flex flex-col gap-2 px-2">
          <h3 className="font-display text-2xl font-bold ">{product.title}</h3>
          <p className="font-body text-md font-medium w-fit rounded-lg p-1 bg-surface-muted">
            {product.material}
          </p>
        </div>
        <div className="flex justify-between items-center px-2">
          <p className="font-body text-xl font-semibold">£{product.price}</p>
          <p className="font-body font-medium">★★★★★ {product.rating}</p>
        </div>
      </div>
      <div className="p-2">
        <button
          className="py-2 px-4 w-full bg-yellow-500
         rounded-lg font-bold font-body active:scale-95
         cursor-pointer transition-all duration-300
         hover:-translate-y-1"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
