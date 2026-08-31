import { Mail } from "lucide-react";

const SubscribeSection = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-8 p-6 text-center">
        <span>
          <Mail size={36} />
        </span>
        <h2 className="font-bold font-display text-3xl lg:text-5xl">Stay in the know</h2>
        <p className="font-medium font-body text-lg w-full max-w-md">
          Subscribe to receive thoughtful updates on new collections, design
          inspiration, and early access to limited pieces.
        </p>
        <div className="flex justify-between items-center gap-2 border-b w-full">
          <input  type="email" placeholder="Your email address" 
          className="w-full py-1 outline-none"/>
          <button className="font-medium px-1">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
