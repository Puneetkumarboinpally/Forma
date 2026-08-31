import { ListFilter, X } from "lucide-react";
import { useState } from "react";
import { CategoryFilter } from "./FilterSectionPage/CategoryFilter";
import { RoomFilter } from "./FilterSectionPage/RoomFilter";
import { MaterialFilter } from "./FilterSectionPage/MaterialsFilter";
import { RatingFilter } from "./FilterSectionPage/RatingFilter";
import { useFilterStore } from "../../store/filterStore";

export const FilterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { clearFilters } = useFilterStore();

  return (
    <section className="relative lg:w-1/5">
      {/* DESKTOP */}
      <div className="max-tablet:hidden">
        <div className="sticky top-0 left-0 flex flex-col pb-4 gap-4">
          <CategoryFilter />
          <RoomFilter />
          <RatingFilter />
          <MaterialFilter />
          <button
            onClick={clearFilters}
            className="px-3 py-2 font-bold rounded cursor-pointer font-body bg-primary text-accent-foreground active:scale-95 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
          >
            Reset Filter
          </button>
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
          <div className="grid grid-cols-2 pb-4 gap-4">
            <CategoryFilter />
            <RoomFilter />
            <RatingFilter />
            <MaterialFilter />
            <button
              onClick={clearFilters}
              className="px-3 py-2 font-bold font-body cursor-pointer  rounded bg-primary text-accent-foreground active:scale-95 transition-all duration-300 hover:-translate-y-1 hover:bg-accent"
            >
              Reset Filter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterSection;
