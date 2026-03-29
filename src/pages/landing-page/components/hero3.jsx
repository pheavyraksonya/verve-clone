import bannerImg from "../../../assets/banner2.webp";

const Hero3 = () => {
  return (
    <section className="relative overflow-hidden  bg-secondary">
      <div className="grid min-h-[64vh] md:h-[76vh] md:min-h-0 grid-cols-1 md:grid-cols-[45%_55%]">
        <div className="relative flex items-center bg-[#e7e6e3] px-7 py-12 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-120 space-y-8 lg:space-y-10">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary/90">
              Quiziz
            </p>

            <h1 className="text-6xl font-medium uppercase text-primary ">
              Take the coffee Quiziz
            </h1>

            <p className="max-w-[30ch] text-lg leading-normal text-primary/85">
              Your favorite coffee is just a few clicks away ...
            </p>

            <button
              className="inline-flex items-center justify-center rounded bg-primary
             px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary transition hover:bg-primary/90 "
            >
              Shop Craft Instant
            </button>
          </div>
        </div>

        <div className="relative w-full h-full object-cover">
          <img
            src={bannerImg}
            alt="Pouring coffee outdoors"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero3;
