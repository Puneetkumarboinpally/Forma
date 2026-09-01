import { curatedCollection } from "../../data/products";
import { useCartStore } from "../../store/cartStore";

const CuratedSection = () => {
  const { addToCart } = useCartStore();
  return (
    <section className="h-full bg-surface flex justify-center items-center">
      <div className="flex flex-col gap-12 p-12">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-md font-body font-medium">CURATED SELECTION</h3>
          <h2 className="text-6xl font-display font-bold">New arrivals</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {curatedCollection.map((product) => (
            <div key={product.id} className="curated">
              <div className="curated-image">
                <img
                  className="h-70 w-full object-cover rounded-md"
                  src={product.img}
                  alt={product.title}
                />
                <span
                  onClick={() => addToCart(product)}
                  className="absolute bottom-24 right-8 
              py-1 px-2.5 bg-secondary rounded-md 
              font-bold transition-all cursor-pointer 
              duration-300 hover:bg-background"
                >
                  +
                </span>
              </div>
              <div className="max-phone:flex max-phone:justify-between max-phone:items-center mt-4">
                <p className="text-xl font-medium font-body text-primary">
                  {product.title}
                </p>
                <p className="text-lg font-medium font-body text-secondary">
                  £{product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
