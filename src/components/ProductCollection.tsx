import { products } from "../data/products";
import ProductCard from "./ProductCard";
const ProductCollection = () => {
  return (
    <section className="h-full lg:w-4/5">
      {/* --- TOP SECTION --- */}
      <div className="flex justify-between items-center">
        <div>
          <p>Showing 48 products</p>
        </div>
        <div>
          <label htmlFor="sort">SORT BY</label>
          <select name="sort" id="sort">
            <option value="default">Featured</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* --- PRODUCTS COLLECTION --- */}
      <div className="phone:grid max-tablet:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductCollection;
