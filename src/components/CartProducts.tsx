import { useCartStore } from "../store/cartStore";

const CartProducts = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCartStore();
  return (
    <div className="h-full w-full lg:w-2/3">
      <h2>Your Cart</h2>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex gap-4 p-4 border border-border rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1"
          >
            <div className="h-40 w-50 overflow-hidden">
              <img
                src={item.product.img}
                alt={item.product.title}
                className="h-full w-full object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-body font-bold ">
                {item.product.title}
              </h2>
              <p className="text-3xl font-body font-bold ">price: £{item.product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
