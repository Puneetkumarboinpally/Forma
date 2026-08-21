import { useEffect } from "react";
import { usePhotoStore } from "../store/photoStore";
import PhotosCard from "../components/PhotosCard";

const LIvingRoomPage = () => {
  const { loading, error, photos, getPhotos } = usePhotoStore();

  useEffect(() => {
    getPhotos("sofa chair living room");
    
  }, [getPhotos]);

  return (
    <div className="h-full">
      <section
        className="living-hero
      flex justify-center items-center p-4 lg:p-8
       
     "
      >
        <div className="text-center flex flex-col gap-6 p-4">
          <h2 className="text-7xl laptop:text-9xl font-display font-bold">
            Living Room
          </h2>
          <p className="max-phone:text-lg laptop:text-xl font-body font-semibold w-full max-w-2xl">
            Create a space made for slowing down. Discover thoughtfully designed
            sofas, lounge chairs, and tables that bring comfort, character, and
            timeless style to the heart of your home.
          </p>
        </div>
      </section>
      <section className="h-full p-4">
        <div className=" lg:flex justify-between items-center p-4 laptop:pt-12 laptop:px-14">
          <div className="phone:mb-4 max-tablet:mb-2">
            <h2 className="font-display text-3xl my-2 font-bold">
              Gather in Comfort
            </h2>
            <p className="font-body text-md font-medium">
              Pieces designed for conversation, connection, and everyday living.
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
            <PhotosCard key={photo.id} photo={photo} category="Living Room" />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LIvingRoomPage;
