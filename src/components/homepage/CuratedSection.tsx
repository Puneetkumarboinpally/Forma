const CuratedSection = () => {
  return (
    <section className="h-full bg-surface flex justify-center items-center">
      <div className="flex flex-col gap-12 p-12">
        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-md font-body font-medium">CURATED SELECTION</h3>
          <h2 className="text-6xl font-display font-bold">New arrivals</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="curated">
            <div className="curated-image">
              <img
                className="h-70 w-full object-cover rounded-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuACnNIVozCEz3raUV7y_yWmN_OBHGVKoRUa_tIqmzjvPjQ6U37f-rxpnf7LKac5Ki7HC1kscvqihqb0XNjEmYoRvdK0VVi7KEmC_x-IwFCCEvYBXZLT_U2K6Cbu6T0YY0bBCLQMOkd63sfEdHifmkiM3yJDZb2JICz4Lk0GXOKMqhY4BTcHqN_17jx9uqwhQQgGEHUgjcIH6PDjiZBxUrNICHsrueZAW3ePICuLqACrmCPNVn-skWmY"
                alt="Lounge chair"
              />
              <span className="absolute bottom-24 right-8 py-1 px-2.5 bg-secondary rounded-md font-bold transition-all cursor-pointer duration-300 hover:bg-background">
                +
              </span>
            </div>
            <div className="max-phone:flex max-phone:justify-between max-phone:items-center mt-4">
              <p className="text-xl font-medium font-body text-primary">
                Miro Lounge Chair
              </p>
              <p className="text-lg font-medium font-body text-secondary">
                £495
              </p>
            </div>
          </div>
          <div className="curated">
            <div className="curated-image">
              <img
                className="h-70 w-full object-cover rounded-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKTAYETR7b6LSXxgfErEQBb1dM7_sYUhaswSAI0KXkKBBS_aoprUn6v8LIle2wBNwMVtg0Z7yp1AnYIco46WA5B4mx2v96v4vktn1PwgB0sF-yYlmH6sU0kg8LLSWZQ7ve4pTXOnZAfCu0AzbXI1EAmctM_HLP6joSuEIAewz1IbPT85hA6HHQCMb0gQj9qFY5pqVaDSMrrfGqYeZqRywf358ys4H53HH0Q1xVWvziYolCNbk-ndZ4"
                alt="Linea Oak Coffee table"
              />
              <span className="absolute bottom-24 right-8 py-1 px-2.5 bg-secondary rounded-md font-bold transition-all cursor-pointer duration-300 hover:bg-background">
                +
              </span>
            </div>
            <div className="max-phone:flex max-phone:justify-between max-phone:items-center mt-4">
              <p className="text-xl font-medium font-body text-primary">
                Linea Oak Coffee Table
              </p>
              <p className="text-lg font-medium font-body text-secondary">
                £680
              </p>
            </div>
          </div>
          <div className="curated">
            <div className="curated-image">
              <img
                className="h-70 w-full object-cover rounded-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjQo64E_FcpV5bdOiHrzvOmJllSGGINjv7pjVNnfZ0XCEYnsHjuURgKj9rrG1DHNavymvC2-8W9KWmopq6imIt0T6q6T-hJ_HzAEVJjeAkklilsqFHTUv9DHMNw3iqoWV2RTNodzun7tmokq_1xrXKLsJzExkW6v9ID8nms72-o2HA6MfrXCoyZm88q6WmUX0spxMRBZHPYort2RqWsIxiinv9EtvMUlVqVqpgovU1UMreX7jSfIuu"
                alt="Arco Dining Chair"
              />
              <span className="absolute bottom-24 right-8 py-1 px-2.5 bg-secondary rounded-md font-bold transition-all cursor-pointer duration-300 hover:bg-background">
                +
              </span>
            </div>
            <div className="max-phone:flex max-phone:justify-between max-phone:items-center mt-4">
              <p className="text-xl font-medium font-body text-primary">
                Arco Dining Chair
              </p>
              <p className="text-lg font-medium font-body text-secondary">
                £285
              </p>
            </div>
          </div>
          <div className="curated">
            <div className="curated-image">
              <img
                className="h-70 w-full object-cover rounded-md"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE_Rwqnd0cTeZXoU3WESkUG6VgmoCyMKmAG2FIAVLyQzQy5khFLBJrH0G_OYE-EX9rk_Egoc0wrGdOf67DZFKePiimwTK4OZjQHwdOexR8jzlYSzIjDwaDrBEj2O2oRkkeXyAB_H4mvT_UEo14tIwDqf0hX8DkooEWmrhabDZGwUADGlnYZHitDXvOesVEnJnW1-CCzdHCEOyw5_rerABJBApQcoK_jZnbLiM-nbjFMPiipssD3JIf"
                alt="Noma Floor Lamp"
              />
              <span className="absolute bottom-24 right-8 py-1 px-2.5 bg-secondary rounded-md font-bold transition-all cursor-pointer duration-300 hover:bg-background">
                +
              </span>
            </div>
            <div className="max-phone:flex max-phone:justify-between max-phone:items-center mt-4">
              <p className="text-xl font-medium font-body text-primary">
                Noma Floor Lamp
              </p>
              <p className="text-lg font-medium font-body text-secondary">
                £320
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratedSection;
