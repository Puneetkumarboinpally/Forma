import { ArrowDownZA, ArrowUpAZ, ListFilter, X } from "lucide-react";
import { useState } from "react";

const categories = [
  { id: "all", label: "All Furniture", value: "all" },
  { id: "seating", label: "Sofa & Chairs", value: "seating" },
  { id: "tables", label: "Tables", value: "tables" },
  { id: "bed", label: "Beds", value: "bed" },
  { id: "lamp", label: "Lamps", value: "lamp" },
];

const rooms = [
  { id: "living-room", label: "Living Room", value: "living-room" },
  { id: "dining-room", label: "Dining Room", value: "dining-room" },
  { id: "bedroom", label: "Bedroom", value: "bedroom" },
  { id: "lighting", label: "Lighting", value: "lighting" },
];

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

const ratings = [
  {
    id: "higher",
    label: "Higher to Lower",
    value: "higher",
    logo: <ArrowDownZA size={18} />,
  },
  {
    id: "lower",
    label: "Lower to Higher",
    value: "lower",
    logo: <ArrowUpAZ size={18} />,
  },
];

const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="relative lg:w-1/5">
      {/* DESKTOP */}
      <div className="max-tablet:hidden">
        <div className="sticky top-0 left-0 flex flex-col gap-4">
          <CategoryFilter />
          <RoomFilter />
          <RatingFilter />
          <MaterialFilter />
          <PriceFilter />
        </div>
      </div>

      {/* MOBILE / TABLET */}
      <div className="laptop:hidden">
        <div className="flex items-center justify-between border-b border-border py-2 mb-4">
          <h2 className="text-2xl font-body font-bold">Filter</h2>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            type="button"
            className="cursor-pointer"
            aria-label={isOpen ? "Close filters" : "Open filters"}
          >
            {isOpen ? <X size={24} /> : <ListFilter size={24} />}
          </button>
        </div>
        <div
          className={`
          overflow-hidden transition-all duration-700 ease-in-out
          ${
            isOpen
              ? "max-h-[1000px] opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-2"
          }
        `}
        >
          <div className="grid grid-cols-2 gap-4">
            <CategoryFilter />
            <RoomFilter />
            <RatingFilter />
            <MaterialFilter />
            <PriceFilter />
          </div>
        </div>
      </div>
    </section>
  );
};

const CategoryFilter = () => {
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

const RoomFilter = () => {
  return (
    <div className="filter-container">
      <h2>ROOM</h2>

      {rooms.map((room) => (
        <div className="grouped-input" key={room.id}>
          <input
            className="filter-input"
            type="radio"
            name="room"
            id={room.id}
            value={room.value}
          />

          <label className="filter-label" htmlFor={room.id}>
            {room.label}
          </label>
        </div>
      ))}
    </div>
  );
};

const RatingFilter = () => {
  return (
    <div className="filter-container">
      <h2>RATINGS</h2>
      {ratings.map((rating) => (
        <div key={rating.id} className="grouped-input">
          <input
            type="radio"
            name="rating"
            id={rating.id}
            value={rating.value}
            className="filter-input"
          />
          <div className="flex items-center gap-2">
            <label htmlFor={rating.id} className="filter-label">
              {rating.label}
            </label>
            <span>{rating.logo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const MaterialFilter = () => {
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

const PriceFilter = () => {
  return (
    <div className="filter-container">
      <h2>PRICE RANGE</h2>
    </div>
  );
};

export default FilterSection;
