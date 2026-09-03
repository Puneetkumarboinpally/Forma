import { useNavigate } from "react-router-dom";
import CartProducts from "../components/CartsPage/CartProducts";
import TotalSection from "../components/CartsPage/TotalSection";
import { useCartStore } from "../store/cartStore";

const CartPage = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen px-6 pt-16 laptop:px-8 laptop:pt-20 mt-14">
      {cart.length === 0 ? (
        <div className="flex h-screen flex-col items-center justify-center gap-4">
          <h1 className="font-body text-4xl font-bold">Your Cart is Empty</h1>

          <p className="w-full max-w-md text-center font-body text-xl font-medium">
            There are no items in your cart. Please explore our collection or
            wishlist.
          </p>

          <div className="flex gap-2">
            <button
              onClick={() => navigate("/wishlist")}
              className="
                cursor-pointer rounded-lg border border-border
                px-4 py-2 font-body font-bold
                transition-all duration-300
                hover:-translate-y-1 hover:bg-accent
                active:scale-95
              "
            >
              Wishlist
            </button>

            <button
              onClick={() => navigate("/collection")}
              className="
                cursor-pointer rounded-lg
                bg-accent px-4 py-2
                font-body font-bold
                transition-all duration-300
                hover:-translate-y-1 hover:bg-surface
                active:scale-95
              "
            >
              Explore Collection
            </button>
          </div>
        </div>
      ) : (
        <>
          {/* Announcement Marquee */}
          <div className="absolute left-0 top-0 w-full overflow-hidden bg-accent text-accent-foreground">
            <div className="track flex w-max">
              <div className="flex shrink-0 items-center gap-4 p-2">
                <p>Secure & seamless checkout</p>
                <p>•</p>
                <p>Flat 10% discount on orders above £2000</p>
                <p>•</p>
                <p>Free delivery on orders over £1000</p>
                <p>•</p>
                <p>Easy returns on eligible items</p>
                <p>•</p>
                <p>Your order is almost complete</p>
                <p>•</p>
              </div>

             <div className="flex shrink-0 items-center gap-4 p-2">
                <p>Secure & seamless checkout</p>
                <p>•</p>
                <p>Flat 10% discount on orders above £2000</p>
                <p>•</p>
                <p>Free delivery on orders over £1000</p>
                <p>•</p>
                <p>Easy returns on eligible items</p>
                <p>•</p>
                <p>Your order is almost complete</p>
                <p>•</p>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="mb-6">
            <h2 className="font-display text-5xl font-bold">Shopping Cart</h2>

            <p className="font-body text-lg font-medium text-muted">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </p>
          </div>

          {/* Cart */}
          <div className="laptop:flex laptop:justify-between laptop:gap-4">
            <CartProducts />
            <TotalSection />
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
