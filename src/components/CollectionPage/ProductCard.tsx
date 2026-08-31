import { Heart } from "lucide-react";
import type { FurnitureProduct } from "../../data/products";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWishlistStore } from "../../store/wishlistStore";
import { useCartStore } from "../../store/cartStore";

type ProductCardProps = {
  product: FurnitureProduct;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [added, setAdded] = useState(false);
  const { addToWishlist, removeWishlist, isInWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  const saved = isInWishlist(product.id);

  const handleWishlist = () => {
    if (saved) {
      removeWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    setAdded(true);
  };
  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [added]);

  return (
    <div
      className="overflow-hidden flex h-full flex-col
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
           transition-scale duration-500 
           group-hover:scale-110"
        />
        <button
          onClick={handleWishlist}
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
          <Heart
            className={`h-5 w-5 ${saved ? "fill-red-500 text-red-500" : ""}`}
          />
        </button>
        <Link
          to={`/product-details-page/${product.id}`}
          className="absolute left-1/2 -translate-x-1/2 bottom-10 translate-y-40
        py-2 px-3 rounded-md cursor-pointer active:scale-95
        bg-surface font-bold font-body opacity-0 whitespace-nowrap
        transition-all duration-500 hover:bg-accent 
        group-hover:translate-y-0 group-hover:opacity-100
        "
        >
          View Full Details
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-2 flex-1">
        <div className="flex px-2">
          <h3 className="font-display text-2xl font-bold ">{product.title}</h3>
        </div>
        <div className="flex justify-between items-center px-2 mt-auto">
          <p className="font-body text-xl font-semibold">£{product.price}</p>
          <p className="font-body font-medium">★★★★★ {product.rating}</p>
        </div>
        <div className="flex flex-col gap-2 px-2 mt-auto">
          <p className="font-body text-md font-medium w-fit rounded-lg p-1 bg-surface-muted">
            {product.material}
          </p>
        </div>
      </div>
      <div className="relative p-2">
        <p
          className={` absolute
      bottom-full
      left-1/2
      mb-2
      -translate-x-1/2
      whitespace-nowrap
      rounded-lg
      bg-surface-muted
      px-3
      py-2
      text-sm
      font-semibold

      transition-all
      duration-500

            ${
              added
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-2 opacity-0"
            }`}
        >
          Item added to Cart ✅
        </p>
        <button
          onClick={() => {
            handleAddToCart();
            addToCart(product);
          }}
          className="py-2 px-4 w-full bg-accent
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
