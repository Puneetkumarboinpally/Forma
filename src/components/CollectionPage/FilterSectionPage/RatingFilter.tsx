import { ArrowDownZA, ArrowUpAZ } from "lucide-react";
import { useFilterStore } from "../../../store/filterStore";
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
export const RatingFilter = () => {
  const { sortRating, setSortRating } = useFilterStore();
  return (
    <div className="filter-container">
      <h2>SORT BY RATINGS</h2>
      {ratings.map((rating) => (
        <div key={rating.id} className="grouped-input">
          <input
            type="radio"
            name="rating"
            id={rating.id}
            value={rating.value}
            checked={sortRating === rating.value}
            onChange={(e) =>
              setSortRating(e.target.value as "higher" | "lower")
            }
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
