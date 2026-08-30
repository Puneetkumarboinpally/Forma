import { useNavigate } from "react-router-dom";
import CartProducts from "../components/CartProducts";
import TotalSection from "../components/TotalSection";
import { useCartStore } from "../store/cartStore";

const CartPage = () => {
  const { cart } = useCartStore();
  const navigate = useNavigate();
  return (
    <section className="min-h-screen p-6 laptop:p-8">
      {cart.length === 0 ? (
        <>
          <div className="h-screen flex flex-col justify-center gap-4 items-center">
            <h1 className="text-4xl font-body font-bold">Your Cart is Empty</h1>
            <p className="text-xl font-body font-medium w-full w-max-md text-center">
              There are no items in your Cart. Please explore our Collection or
              wishlist
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => navigate("/wishlist")}
                className="py-2 px-4 
              border border-border rounded-lg 
              cursor-pointer active:scale-95 
              font-bold font-body 
              transition-all duration-300 
              hover:bg-accent hover:-translate-y-1"
              >
                wishlist
              </button>
              <button
                onClick={() => navigate("/collection")}
                className="py-2 px-4 
              border border-border rounded-lg 
              cursor-pointer active:scale-95 
              font-bold font-body bg-accent
              transition-all duration-300 
              hover:bg-surface hover:-translate-y-1 "
              >
                Explore Collection
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mb-4">
            <h2 className="text-5xl font-display font-bold">Shopping Cart</h2>
            <p className="text-lg font-body font-medium text-muted">
              {cart.length} items
            </p>
          </div>
          <div className="laptop:flex justify-between gap-4">
            <CartProducts />
            <TotalSection />
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
