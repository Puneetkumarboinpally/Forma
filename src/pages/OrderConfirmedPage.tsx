import { BadgeCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);
  return (
    <section className="min-h-screen flex justify-center items-center p-4">
      <div className="flex flex-col gap-4 items-center">
        <span>
          <BadgeCheck size={80} className="text-green-500" />
        </span>
        <h1 className="text-2xl font-bold font-body ">ORDER CONFIRMED</h1>
        <p className="text-lg font-medium font-body ">
          Thank you for your order
        </p>
        <p className="text-lg font-medium font-body ">
          Your order had been successfully placed.
        </p>
        <p className="text-lg font-medium font-body ">
          We've sent your confirmation to your email.
        </p>
        <button
          onClick={() => navigate("/collection")}
          className="py-2 px-4 bg-accent
         rounded text-lg font-bold font-body 
         active:scale-95 cursor-pointer
        transition-all duration-300
        hover:bg-primary hover:text-accent-foreground 
        hover:-translate-y-1"
        >
          Continue Shopping
        </button>
      </div>
    </section>
  );
};

export default OrderConfirmedPage;
