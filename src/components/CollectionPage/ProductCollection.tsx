import { useState } from "react";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import { useFilterStore } from "../../store/filterStore";

const ProductCollection = () => {
  const [sorting, setSorting] = useState("default");

  const { category, room, materials } = useFilterStore();

  // 1. Filter products
  const filteredProducts = products.filter((product) => {
    if (category !== "all" && product.category !== category) {
      return false;
    }

    if (room && product.room !== room) {
      return false;
    }

    if (materials.length > 0 && !materials.includes(product.material)) {
      return false;
    }

    return true;
  });

  // 2. Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sorting === "price-low") {
      return a.price - b.price;
    }

    if (sorting === "price-high") {
      return b.price - a.price;
    }

    return 0;
  });

  return (
    <section className="h-full lg:w-4/5">
      {/* TOP SECTION */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="font-body text-lg font-semibold">
            Showing {sortedProducts.length} products
          </p>
        </div>

        <div>
          <label htmlFor="sort" className="font-body font-semibold mx-1">
            SORT BY
          </label>

          <select
            id="sort"
            value={sorting}
            onChange={(e) => setSorting(e.target.value)}
            className="border border-border rounded p-1"
          >
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* PRODUCTS COLLECTION */}
      <div className="phone:grid max-tablet:grid-cols-2 items-stretch lg:grid-cols-3 gap-4 p-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCollection;
