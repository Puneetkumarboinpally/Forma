import FilterSection from "../components/FilterSection";
import ProductCollection from "../components/ProductCollection";

const CollectionPage = () => {
  return (
    <div className="h-full p-8">
      <div>
        <h1 className="text-7xl font-display font-bold">All Furniture</h1>
        <p className="text-xl font-body font-medium">
          Thoughtfully designed pieces for every room in your home.
        </p>
      </div>
      <div className="lg:flex mt-4">
        <FilterSection />
        <ProductCollection />
      </div>
    </div>
  );
};

export default CollectionPage;
