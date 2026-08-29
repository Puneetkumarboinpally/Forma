import CartProducts from "../components/CartProducts";
import TotalSection from "../components/TotalSection";
import { useCartStore } from "../store/cartStore";

const CartPage = () => {
  const { cart } = useCartStore();
  return (
    <section className="min-h-screen p-6">
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
          <div className="mb-8">
            <h2 className="text-7xl font-display font-bold">Your Cart</h2>
            <p className="text-2xl font-body font-medium text-muted">
              {cart.length} items
            </p>
          </div>
          <div className="laptop:flex justify-between items-center">
            <CartProducts />
            <TotalSection />
          </div>
        </>
      )}
    </section>
  );
};

export default CartPage;
