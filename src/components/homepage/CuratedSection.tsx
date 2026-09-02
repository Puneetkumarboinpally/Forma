import { Heart } from "lucide-react";
import { curatedCollection } from "../../data/products";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import { Link } from "react-router-dom";

const CuratedSection = () => {
  const { addToWishlist, removeWishlist, isInWishlist } = useWishlistStore();
  const { addToCart } = useCartStore();

  return (
    <section className="h-full bg-surface flex justify-center items-center">
      <div className="flex flex-col gap-12 p-12">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-md font-body font-medium">CURATED SELECTION</h3>

          <h2 className="text-6xl font-display font-bold">New arrivals</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {curatedCollection.map((product) => {
            const saved = isInWishlist(product.id);

            const handleWishlist = () => {
              if (saved) {
                removeWishlist(product.id);
              } else {
                addToWishlist(product);
              }
            };

            return (
              <div key={product.id} className="curated overflow-hidden">
                <Link
                  to={`/product-details-page/${product.id}`}
                  className="curated-image relative"
                >
                  <img
                    className="h-70 w-full object-cover rounded-md cursor-pointer"
                    src={product.img}
                    alt={product.title}
                  />

                  <span
                    onClick={() => addToCart(product)}
                    className="absolute bottom-24 right-8 py-1 px-2.5
                    bg-secondary rounded-md font-bold
                    transition-all cursor-pointer duration-300
                    hover:bg-background"
                  >
                    +
                  </span>
                </Link>

                <div className="max-phone:flex max-phone:justify-between max-phone:items-center mt-4">
                  <div className="flex justify-between items-center w-full">
                    <p className="text-xl font-medium font-body text-primary">
                      {product.title}
                    </p>

                    <span onClick={handleWishlist} className="cursor-pointer">
                      <Heart
                        className={saved ? "fill-red-500 text-red-500" : ""}
                      />
                    </span>
                  </div>

                  <p className="text-lg font-medium font-body text-secondary">
                    £{product.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
