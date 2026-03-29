import img from "../../../assets/verve-hero.jpeg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden  bg-secondary">
      <div className="grid min-h-[64vh]  md:min-h-0 grid-cols-[40%_60%]">
        <div className="relative flex items-center bg-[#e7e6e3] py-12  px-16">
          <div className="mx-auto w-full max-w-120 space-y-10">
            <p className="text-sm font-medium uppercase tracking-[0.12em] text-primary/90">
              Craft Instant
            </p>

            <h1 className="text-6xl font-medium uppercase text-primary ">
              Your Ritual,
              <br />
              Anywhere
            </h1>

            <p className="max-w-[30ch] text-lg leading-normal text-primary/85">
              Trailhead sunrise, morning flight, or hotel room. Craft Instant
              makes a premium cup possible wherever you are. No cafe required,
              no compromise necessary.
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
            src={img}
            alt="Pouring coffee outdoors"
            className="h-full w-full object-cover object-center"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
