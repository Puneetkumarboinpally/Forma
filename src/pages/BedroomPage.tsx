import { useEffect } from "react";
import PhotosCard from "../components/PhotosCard";
import { usePhotoStore } from "../store/photoStore";

const BedroomPage = () => {
  const { loading, error, photos, getPhotos } = usePhotoStore();

  useEffect(() => {
    getPhotos("bed bedroom furniture");
  }, [getPhotos]);

  return (
    <div className="h-full">
      <section
        className="bedroom-hero
      flex justify-center items-center p-4 lg:p-8
       
     "
      >
        <div className="text-center flex flex-col gap-6 p-4">
          <h2 className="text-7xl laptop:text-9xl font-display font-bold">
            Bedroom
          </h2>
          <p className="max-phone:text-lg laptop:text-xl font-body font-semibold w-full max-w-2xl">
            Turn rest into a ritual. Explore serene beds, bedside tables, and
            bedroom essentials designed to create a calm, comfortable retreat
            you'll love coming home to.
          </p>
        </div>
      </section>
      <section className="h-full p-4">
        {/* COLLECTION HEADER */}
        <div className=" lg:flex justify-between items-center p-4 laptop:pt-12 laptop:px-14">
          <div className="phone:mb-4 max-tablet:mb-2">
            <h2 className="font-display text-3xl my-2 font-bold">
              Curated for Comfort
            </h2>
            <p className="font-body text-md font-medium">
              Thoughtfully chosen pieces for slower mornings and restful nights.
            </p>
          </div>
          <div>
            <p className="font-body w-fit text-lg border-b font-medium cursor-pointer active:scale-95 transition-all duration-300 hover:text-accent">
              View Full Collection &rarr;
            </p>
          </div>
        </div>
        {/* COLLECTION PHOTOS CARD */}
        <div className="h-full phone:grid max-tablet:grid-cols-2 laptop:grid-cols-4 gap-6 p-4 laptop:p-12">
          {loading && <p>loading</p>}
          {error && (
            <p className="col-span-full text-center text-red-500">{error}</p>
          )}
          {photos.map((photo) => (
            <PhotosCard key={photo.id} photo={photo} category="Bedroom" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BedroomPage;
