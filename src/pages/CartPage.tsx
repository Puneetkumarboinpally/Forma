import CartProducts from "../components/CartProducts";
import TotalSection from "../components/TotalSection";

const CartPage = () => {
  return (
    <section className="min-h-screen p-4">
      <div className="laptop:flex justify-between items-center">
        <CartProducts />
        <TotalSection />
      </div>
    </section>
  );
};

export default CartPage;
