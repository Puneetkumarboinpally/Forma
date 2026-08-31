const materials = [
  "Wood",
  "Velvet",
  "Metal",
  "Glass",
  "Oak",
  "Fabric",
  "Linen",
  "Ceramic",
];
export const MaterialFilter = () => {
  return (
    <div className="filter-container">
      <h2>MATERIAL</h2>

      <div className="flex w-full lg:w-48 flex-wrap gap-2">
        {materials.map((material) => (
          <button key={material} type="button" className="filter-btn">
            {material}
          </button>
        ))}
      </div>
    </div>
  );
};
