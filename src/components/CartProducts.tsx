import { Trash2 } from "lucide-react";
import { useCartStore } from "../store/cartStore";

const CartProducts = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();
  return (
    <div className="h-full w-full laptop:w-[50rem] bg-surface p-8">
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="phone:flex gap-4 p-4 
            border border-border 
            rounded-lg shadow-md 
            transition-all duration-300 
            hover:-translate-y-1"
          >
            {/* --- IMAGE SECTION --- */}
            <div className="h-40 phone:w-full tablet:w-60 laptop:w-60 overflow-hidden">
              <img
                src={item.product.img}
                alt={item.product.title}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            {/* --- PRODUCTS DETAILS SECTION --- */}
            <div className="w-full flex flex-col justify-between gap-4">
              <div className="phone:flex justify-between">
                <div>
                  <h2 className="text-2xl laptop:text-3xl font-display font-black">
                    {item.product.title}
                  </h2>
                  <p className="laptop:text-lg font-body font-medium text-muted">
                    {item.product.category} / {item.product.material}
                  </p>
                </div>
                <p className="text-xl laptop:text-2xl font-body font-semibold mt-1">
                  £{item.product.price * item.quantity}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center gap-3 py-2">
                  <button
                    onClick={() => decreaseQuantity(item.product.id)}
                    className="py-1 px-3
                  font-body font-bold text-lg 
                  cursor-pointer active:scale-95 
                  border border-border rounded-full 
                  transition-shadow duration-300 
                  hover:shadow-lg"
                  >
                    -
                  </button>
                  <p className="text-2xl font-body font-semibold">
                    {item.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(item.product.id)}
                    className="py-1 px-3
                  font-body font-bold text-lg 
                  cursor-pointer active:scale-95 
                  border border-border rounded-full 
                  transition-shadow duration-300 
                  hover:shadow-lg"
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="cursor-pointer"
                  >
                    <Trash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
