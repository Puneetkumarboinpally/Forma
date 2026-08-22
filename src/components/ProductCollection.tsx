import React from "react";

const ProductCollection = () => {
  return (
    <section className="h-screen w-4/5">
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
    </section>
  );
};

export default ProductCollection;
