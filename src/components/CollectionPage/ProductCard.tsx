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

  const handleWishlist = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    if (saved) {
      removeWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    addToCart(product);
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
      className="
        overflow-hidden
        flex
        h-full
        flex-col
        rounded-lg
        border
        border-border
        bg-surface
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      {/* IMAGE */}
      <div className="max-phone:h-50 h-70 relative w-full overflow-hidden group">
        <img
          src={product.img}
          alt={product.title}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* WISHLIST */}
        <button
          type="button"
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

        {/* VIEW DETAILS */}
        <Link
          to={`/product-details-page/${product.id}`}
          className="
            absolute
            left-1/2
            bottom-10
            -translate-x-1/2
            translate-y-40
            rounded-md
            bg-surface
            px-3
            py-2
            font-bold
            font-body
            opacity-0
            whitespace-nowrap
            transition-all
            duration-500
            hover:bg-accent
            group-hover:translate-y-0
            group-hover:opacity-100
          "
        >
          View Full Details
        </Link>
      </div>

      {/* PRODUCT INFO */}
      <div className="flex flex-1 flex-col gap-2 p-2 lg:gap-4">
        <div className="flex px-2">
          <Link
            to={`/product-details-page/${product.id}`}
            className="hover:underline"
          >
            <h3 className="max-phone:text-xl text-2xl font-display font-bold">
              {product.title}
            </h3>
          </Link>
        </div>

        <div className="phone:flex items-center justify-between px-2">
          <p className="max-phone:text-lg text-xl font-body font-semibold">
            £{product.price}
          </p>

          <p className="font-body font-medium">★★★★★ {product.rating}</p>
        </div>

        <div className="flex flex-col gap-2 px-2 mt-auto">
          <p className="font-body text-md w-fit rounded-lg bg-surface-muted p-1 font-medium">
            {product.material}
          </p>
        </div>
      </div>

      {/* ADD TO CART */}
      <div className="relative p-2">
        <p
          className={`
            absolute
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
            }
          `}
        >
          Item added to Cart ✅
        </p>

        <button
          type="button"
          onClick={handleAddToCart}
          className="
            w-full
            rounded-lg
            bg-accent
            px-4
            py-2
            font-bold
            font-body
            transition-all
            duration-300
            hover:-translate-y-1
            active:scale-95
          "
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
