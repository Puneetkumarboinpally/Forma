import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

const BreadCrumb = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <nav className="flex items-center gap-1 p-4 text-sm">
      <Link
        to="/"
        className="font-body font-medium text-muted hover:text-primary"
      >
        Home
      </Link>

      <ChevronRight size={18} className="text-muted" />

      <Link
        to="/collection"
        className="font-body font-medium text-muted hover:text-primary"
      >
        Collections
      </Link>

      <ChevronRight size={18} className="text-muted" />

      <Link
        to={`/collection/${product.category.toLowerCase().replace(/\s+/g, "-")}`}
        className="font-body font-medium text-muted hover:text-primary"
      >
        {product.category}
      </Link>

      <ChevronRight size={18} className="text-muted" />

      <span className="font-body font-semibold text-primary">
        {product.title}
      </span>
    </nav>
  );
};

export default BreadCrumb;
