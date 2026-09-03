import { useNavigate } from "react-router-dom";
import ProductCard from "../components/CollectionPage/ProductCard";
import { useWishlistStore } from "../store/wishlistStore";

const WishlistPage = () => {
  const { wishlistCart } = useWishlistStore();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen">
      {wishlistCart.length === 0 ? (
        <div className="h-screen flex flex-col justify-center items-center bg-surface p-8 mt-14">
          <h1 className="font-body font-bold text-3xl mb-4">
            Your Wishlist is Empty
          </h1>
          <p className="font-body font-medium text-lg">
            {" "}
            There are no items in your wishlist. Please explore our collection.
          </p>
          <button
            onClick={() => navigate("/collection")}
            className="py-2 px-3 bg-accent mt-4 rounded cursor-pointer active:scale-95 font-body font-bold"
          >
            Explore Collection
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 p-8">
          <div>
            <h2 className="font-body font-bold text-3xl">My Wishlist</h2>
            <p className="font-body font-medium text-muted">
              {wishlistCart.length}
              {wishlistCart.length === 1 ? "item" : "items"} saved
            </p>
          </div>
          <div className="grid max-tablet:grid-cols-2 lg:grid-cols-3 gap-4">
            {wishlistCart.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default WishlistPage;
