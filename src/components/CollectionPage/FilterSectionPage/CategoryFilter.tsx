import { useFilterStore } from "../../../store/filterStore";

const categories = [
  { id: "all", label: "All Furniture", value: "all" },
  { id: "sofa", label: "Sofa", value: "sofa" },
  { id: "chair", label: "Chairs", value: "chair" },
  { id: "table", label: "Tables", value: "table" },
  { id: "bed", label: "Beds", value: "bed" },
  { id: "lamp", label: "Lamps", value: "lamp" },
];
export const CategoryFilter = () => {
  const { category: selectedCategory, setCategory } = useFilterStore();
  return (
    <div className="filter-container">
      <h2>CATEGORY</h2>

      {categories.map((category) => (
        <div className="grouped-input" key={category.id}>
          <input
            className="filter-input"
            type="radio"
            name="category"
            id={category.id}
            value={category.value}
            checked={selectedCategory === category.value}
            onChange={(e) => setCategory(e.target.value)}
          />

          <label className="filter-label" htmlFor={category.id}>
            {category.label}
          </label>
        </div>
      ))}
    </div>
  );
};
