const categories = [
  { id: "all", label: "All Furniture", value: "all" },
  { id: "seating", label: "Sofa & Chairs", value: "seating" },
  { id: "tables", label: "Tables", value: "tables" },
  { id: "bed", label: "Beds", value: "bed" },
  { id: "lamp", label: "Lamps", value: "lamp" },
];
export const CategoryFilter = () => {
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
          />

          <label className="filter-label" htmlFor={category.id}>
            {category.label}
          </label>
        </div>
      ))}
    </div>
  );
};
