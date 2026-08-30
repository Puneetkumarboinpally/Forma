import { BadgeCheck, LockKeyhole, RefreshCw, Truck } from "lucide-react";

const TotalSection = () => {
  return (
    <section className="h-full w-full laptop:w-[30rem] bg-surface p-8 laptop:sticky laptop:top-0">
      <h1 className="text-2xl font-body font-bold mb-6">Order Summary</h1>
      <div className="flex flex-col gap-4">
        <div className="order-grouped">
          <h2>Subtotal</h2>
          <p>£680.00</p>
        </div>
        <div className="order-grouped">
          <h2>Shipping Charge</h2>
          <p>£45.00</p>
        </div>
        <div className="order-grouped">
          <h2>Taxes</h2>
          <p>£45.00</p>
        </div>
        <div className="order-grouped">
          <h2>Discount</h2>
          <p>£0.00</p>
        </div>
        <div className="py-6 border-y border-border">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-3xl font-display font-bold">Total</h2>
            <p className="text-2xl font-body font-semibold">£725.00</p>
          </div>
          <p className="font-medium font-body text-end mb-8 text-muted">
            Taxes included. Delivery calculated at checkout.
          </p>
          <button
            className="flex justify-center 
            items-center w-full py-3 
          bg-accent text-accent-foreground text-lg
          font-bold font-body
          rounded cursor-pointer
          active:scale-95 transition-all
          duration-300 hover:bg-primary
          hover:-translate-y-1 group"
          >
            CHECKOUT SECURELY
            <LockKeyhole
              size={20}
              className="font-bold transition-all
          duration-300 hover:bg-primary 
          group-hover:translate-x-2"
            />
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <p className="flex gap-2 font-body text-secondary">
            <Truck /> white-glove delivery available
          </p>
          <p className="flex gap-2 font-body text-secondary">
            <BadgeCheck />
            10-year structural warranty
          </p>
          <p className="flex gap-2 font-body text-secondary">
            <RefreshCw /> 30-day return policy
          </p>
        </div>
      </div>
    </section>
  );
};

export default TotalSection;
