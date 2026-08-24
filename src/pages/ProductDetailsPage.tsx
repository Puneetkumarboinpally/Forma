import { useParams } from "react-router-dom";
import { products } from "../data/products";
import BreadCrumb from "../components/BreadCrumb";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <section className="min-h-screen p-4">
      <div>
        <BreadCrumb />
      </div>

      <div className="flex">
        <div className="h-90">
          <img src={product.img} alt={product.title} className="h-full" />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
