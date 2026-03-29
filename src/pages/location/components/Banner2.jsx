import img4 from "../../../assets/banner04.jpeg";

const Banner2 = () => {
  return (
    <section className="relative overflow-hidden  bg-secondary">
      <div className="grid min-h-[64vh]  md:min-h-0 grid-cols-[50%_50%]">
        <div className="relative flex items-center bg-[#e7e6e3] py-12  px-16">
          <div className="mx-auto w-full max-w-130 space-y-10">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary/90">
              Craft Instant
            </p>

            <h1 className="text-6xl font-medium uppercase text-primary ">
              VERVE NEAR YOU
            </h1>

            <p className="max-w-[30ch] text-lg leading-normal text-primary/85">
              If you are not near one of our cafes, use the map at the bottom of
              this page to search for products sold at our retail partners
              nationwide.
            </p>

            <button className="inline-flex items-center justify-center rounded bg-primary px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary transition hover:bg-primary/90 ">
              In Store Order Ahead
            </button>
          </div>
        </div>

        <div className="relative w-full h-full object-cover">
          <img
            src={img4}
            alt="Pouring coffee outdoors"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
