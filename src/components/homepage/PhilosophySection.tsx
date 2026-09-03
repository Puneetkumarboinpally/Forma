const PhilosophySection = () => {
  return (
    <section className="h-full w-full">
      <div className="flex flex-col-reverse lg:flex-row justify-between gap-6 p-12">
        <div className="w-full lg:w-1/2 overflow-hidden">
          <img
            className="h-80 w-full lg:h-140 lg:w-140 object-cover rounded"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdxRH0AL6CBumRujISPM51FHPdsZmLdvX5irTewPX1pXjfKKLRpOHip5bJP4DvZ7m8XeNYXlinp-Km1v4Wk6TxJbxaxUqetWvIlcSYBxHOb8XAFqen9yBER1lIwMn9eV5W4zQwRirCAIK26XprEcgilBVJyZ_oL5k2JaBSmFCbti3HNDW7Y75i3XDehSKAVgCP-5lj8pagB79li6f166lDP1LeH3x9U8sjbC-lL75pIdPIAsNOvqYv"
            alt="philosophy image"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-8 justify-center">
          <span className="text-lg font-body font-medium text-primary">
            PHILOSOPHY
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-semibold">
            Designed to last. We believe good furniture should age beautifully.
          </h2>
          <p className="font-medium text-secondary w-full max-w-md">
            Our approach to design is rooted in longevity. By honoring honest
            materials and employing time-tested craftsmanship, we create pieces
            that not only withstand the rigors of daily life but grow richer in
            character with every passing year.
          </p>
          <p className="w-fit font-semibold border-b cursor-pointer transition-color duration-300 hover:text-accent">
            READ OUR STORY &rarr;
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
