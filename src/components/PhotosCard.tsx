import { Link} from "react-router-dom";
import type { Photo } from "../types/unsplash";

type PhotosCardProp = {
  photo: Photo;
  category: string;
};

const PhotosCard = ({ photo, category }: PhotosCardProp) => {
  return (
    <div className="flex flex-col gap-4 bg-surface p-4 border border-border rounded-lg group">
      <div className="relative h-70 w-full overflow-hidden">
        <img
          src={photo.urls.regular}
          alt={photo.alt_description ?? "Bedroom furniture"}
          loading="lazy"
          className="h-full w-full object-cover 
                  rounded-md cursor-pointer
                  transition-transform duration-500 
                  group-hover:scale-110"
        />
        <Link
          to={`/product-details-page/${photo.id}`}
          className="absolute top-35 left-12 -translate-x-70 
                  py-2 px-3 text-primary font-bold font-body 
                  bg-surface-subtle rounded 
                  cursor-pointer active:scale-95
                  transition-transform duration-500 
                  group-hover:translate-x-0 hover:bg-accent"
        >
          View More Details
        </Link>
      </div>

      <div>
        <p className="font-body font-medium text-muted">
          {category} Collection
        </p>
      </div>
    </div>
  );
};

export default PhotosCard;
