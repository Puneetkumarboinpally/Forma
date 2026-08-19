import { useEffect, useState } from "react";

const BedroomPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [photos, setPhotos] = useState<GetPhotos>([]);

  const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

  type GetPhotos = {
    id: string;
    alt: string;
    img: string;
  };

  const getPhotos = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=bedroom&page=2&per_page=12&client_id=${accessKey}`,
      );
      if (!response.ok) {
        throw new Error("something went wrong...");
      }
      const data = await response.json();
      setPhotos(data.results);
      console.log(data.results[0].alt_description);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("something error");
      }
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <div className="h-full">
      <section className="h-[70dvh] flex flex-col justify-center items-center text-center gap-4 lg:gap-6 p-4 lg:p-8 bg-clay/20">
        <h2 className="text-4xl lg:text-5xl font-display font-bold">
          🛏️Bedroom
        </h2>
        <p className="text-lg font-body font-medium w-full max-w-2xl">
          Turn rest into a ritual. Explore serene beds, bedside tables, and
          bedroom essentials designed to create a calm, comfortable retreat
          you'll love coming home to.
        </p>
      </section>
      <section className="h-full p-4">
        <div className="flex justify-between items-center pt-12 px-14">
          <h2>Explore</h2>
          <p className="font-body text-xl border-b font-medium cursor-pointer active:scale-95 transition-all duration-300 hover:text-accent">
            View More Collection &rarr;
          </p>
        </div>
        <div className="h-full grid max-tablet:grid-cols-2 laptop:grid-cols-4 gap-6 p-12">
          {loading && <p>loading</p>}
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="flex flex-col gap-4 bg-surface p-4 border border-border rounded-lg"
            >
              <div className="relative h-70 w-full overflow-hidden group">
                <img
                  src={photo.urls.regular}
                  alt={photo.alt_description}
                  loading="lazy"
                  className="h-full w-full object-cover rounded-md cursor-pointer transition-transform duration-500 group-hover:scale-110"
                />
                <span
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-20 
                  py-2 px-3 text-primary font-bold font-body 
                  bg-surface-subtle rounded cursor-pointer 
                  transition-transform duration-300 
                  group-hover:translate-y-0 hover:bg-accent"
                >
                  View More Details
                </span>
              </div>

              <div>
                <p className="font-body font-medium text-muted">
                  {" "}
                  Bed Room Collection
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BedroomPage;
