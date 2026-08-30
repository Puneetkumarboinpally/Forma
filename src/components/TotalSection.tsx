const TotalSection = () => {
  return (
    <div className="h-full w-full laptop:w-[30rem] bg-surface p-6">
      <h1 className="text-2xl font-body font-bold mb-6">Order Summary</h1>
      <div>
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
        <div>
          <div className="order-grouped">
            <h2>Total</h2>
            <p>£725.00</p>
          </div>
          <p>Taxes included. Delivery calculated at checkout.</p>
          <button>CHECKOUT SECURELY</button>
        </div>
        <div>
          <p>white-glove delivery available</p>
          <p>10-year structural warranty</p>
          <p>30-day return policy</p>
        </div>
      </div>
    </div>
  );
};

export default TotalSection;
