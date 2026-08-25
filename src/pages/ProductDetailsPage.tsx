import { useParams } from "react-router-dom";
import { products } from "../data/products";
import BreadCrumb from "../components/BreadCrumb";
import { Heart } from "lucide-react";
import { useWishlistStore } from "../store/wishlistStore";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToWishlist, removeWishlist, isInWishlist } = useWishlistStore();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }
  const saved = isInWishlist(product.id);

  const handleWishlist = () => {
    if (saved) {
      removeWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <section className="min-h-screen p-4">
      <div>
        <BreadCrumb />
      </div>

      <div
        className="laptop:flex justify-between 
      gap-8 overflow-hidden p-4"
      >
        {/* ---- IMAGE CONTAINER ---- */}
        <div
          className="max-phone:h-70 tablet:h-100 laptop:h-150 laptop:w-1/2 
        rounded overflow-hidden"
        >
          <img
            src={product.img}
            alt={product.title}
            className="h-full w-full object-cover 
            rounded transition-scale duration-500
             hover:scale-110"
          />
        </div>
        {/* ---- PRODUCT CONTENT CONTAINER ---- */}
        <div className="laptop:w-1/2 flex flex-col gap-6 px-2">
          <h2 className="text-5xl laptop:text-6xl font-display font-bold">
            {product.title}
          </h2>
          {/* ---- PRICE SECTION ---- */}
          <div className="flex justify-between">
            <p className="font-body font-semibold text-3xl italic">
              £{product.price}
            </p>
            <p className="font-body font-semibold text-xl">
              ★★★★★ ({product.rating})
            </p>
          </div>
          {/* ---- DESCRIPTION SECTION --- */}
          <div>
            <p className="font-body font-medium text-accent text-2xl w-full max-w-xl">
              {product.description}
            </p>
          </div>
          <div className="tablet:flex justify-between phone:gap-4">
            <p className="font-body font-medium text-lg">
              Available Stock : {product.stock}
            </p>
            <p className="font-body font-medium text-lg">
              Material :{" "}
              <span className="p-1 bg-surface-muted rounded-lg">
                {product.material}
              </span>
            </p>
          </div>
          {/*---- BUTTON SECTION ---- */}
          <div className="phone:flex justify-between items-center gap-4 mt-8">
            {/* ---- QUANTITY SECTION ---- */}
            <div>
              <div className="flex items-center w-fit bg-surface-muted rounded gap-2 py-1 px-4">
                <button
                  className="text-2xl py-1 px-2
              font-bold font-body rounded
              cursor-pointer active:scale-95
              transition-color duration-300
              hover:bg-surface"
                >
                  -
                </button>
                <div className="text-xl font-semibold font-body">1</div>
                <button
                  className="text-2xl py-1 px-2
              font-bold font-body rounded
              cursor-pointer active:scale-95
              transition-color duration-300
              hover:bg-surface"
                >
                  +
                </button>
              </div>
            </div>
            {/* ---- ADD TO CART SECTION ---- */}
            <div className="flex gap-2 flex-1">
              <button
                className="w-full bg-accent rounded 
              text-lg font-bold font-primary font-body
              py-2 cursor-pointer active:scale-95 
              transition-transform duration-300
              hover:-translate-y-1 hover:shadow-lg"
              >
                Add to cart
              </button>
              <button
                onClick={handleWishlist}
                className="p-2 bg-surface-muted
               rounded active:scale-95 cursor-pointer"
              >
                <Heart
                  className={`${saved ? "fill-red-500 text-red-500" : ""}`}
                />
              </button>
            </div>
          </div>
          {/* ---- DELIVERY SECTION --- */}
          <div>
            <h2 className="font-body font-semibold text-xl mb-2">DELIVERY</h2>
            <p className="font-body font-medium text-secondary text-xl w-full max-w-xl">
              Standard delivery within 2-4 business days. White glove delivery
              and assembly available at checkout for an additional fee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
