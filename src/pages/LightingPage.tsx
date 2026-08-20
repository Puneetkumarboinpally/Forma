import { useEffect } from "react";
import { usePhotoStore } from "../store/photoStore";
import PhotosCard from "../components/PhotosCard";

const LightingPage = () => {
  const { loading, error, photos, getPhotos } = usePhotoStore();

  useEffect(() => {
    getPhotos("lamps");
  }, [getPhotos]);
  return (
    <div className="h-full">
      <section className="h-[70dvh] flex flex-col justify-center items-center text-center gap-4 lg:gap-6 p-4 lg:p-8 bg-clay/10">
        <h2 className="text-4xl lg:text-5xl font-display font-bold">
          💡Lighting
        </h2>
        <p className="text-lg font-body font-medium w-full max-w-xl">
          Set the mood with light. Explore elegant lamps and statement lighting
          designed to add warmth, atmosphere, and a distinctive finishing touch
          to every room.
        </p>
      </section>
      <section className="h-full p-4">
        <div className=" lg:flex justify-between items-center p-4 laptop:pt-12 laptop:px-14">
          <div className="phone:mb-4 max-tablet:mb-2">
            <h2 className="font-display text-3xl my-2 font-bold">
              Set the Mood
            </h2>
            <p className="font-body text-md font-medium">
              Sculptural lighting that brings warmth and atmosphere to every
              room.
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
            <PhotosCard key={photo.id} photo={photo} category="Lighting" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LightingPage;
