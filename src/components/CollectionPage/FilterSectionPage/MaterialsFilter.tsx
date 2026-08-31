import { useFilterStore } from "../../../store/filterStore";

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
  const { materials: selectedMaterials, setMaterials } = useFilterStore();

  const handleMaterial = (material: string) => {
    if (selectedMaterials.includes(material)) {
      // Remove material if already selected
      setMaterials(selectedMaterials.filter((item) => item !== material));
    } else {
      // Add material
      setMaterials([...selectedMaterials, material]);
    }
  };

  return (
    <div className="filter-container">
      <h2>MATERIAL</h2>

      <div className="flex w-full lg:w-48 flex-wrap gap-2">
        {materials.map((material) => {
          const isSelected = selectedMaterials.includes(material);

          return (
            <button
              key={material}
              type="button"
              onClick={() => handleMaterial(material)}
              className={`filter-btn ${
                isSelected ? "bg-primary text-surface" : ""
              }`}
            >
              {material}
            </button>
          );
        })}
      </div>
    </div>
  );
};
