import { ChevronRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

const BreadCrumb = () => {
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  if (!product) {
    return <p className="p-4">Product not found</p>;
  }

  const breadcrumbs = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Collections",
      path: "/collection",
    },
    {
      label: product.category,
      path: `/collection/${product.category
        .toLowerCase()
        .replace(/\s+/g, "-")}`,
    },
    {
      label: product.title,
      path: "",
    },
  ];

  return (
    <nav className="flex items-center  gap-1 p-4 phone:text-xs tablet:text-sm">
      {breadcrumbs.map((breadcrumb, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={breadcrumb.label} className="flex items-center gap-1">
            {isLast ? (
              <span className="font-body font-semibold text-primary">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                to={breadcrumb.path}
                className="font-body font-medium text-muted hover:text-primary transition-colors"
              >
                {breadcrumb.label}
              </Link>
            )}

            {!isLast && <ChevronRight size={18} className="text-muted" />}
          </div>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
