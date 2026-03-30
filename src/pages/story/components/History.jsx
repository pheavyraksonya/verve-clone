import React from "react";

const History = () => {
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="overflow-hidden">
        <div className="space-y-15 pt-10 pb-10 max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-1 lg:grid-cols-[60%_40%] items-center gap-20">
            <div className="">
              <img
                src="https://www.vervecoffee.com/cdn/shop/files/hero_we_are_verve_1_d_1500x.png"
                alt=""
                className="w-full lg:h-100 sm:h-75"
              />
            </div>
            <div className="space-y-5">
              <h1 className="text-4xl px-5 font-semibold">
                Crafting the future of coffee
              </h1>
              <p className="px-5">
                We are committed to innovation and equitable direct trade that
                plays an active role in every step of the supply chain,
                investing in individual producers across the globe. We recognize
                that a producer’s dedication and years of knowledge are
                fundamental to the caliber and character of the coffees we’re
                obsessed with and known for.
              </p>
            </div>
          </div>
          <div className="grid lg:grid-cols-[40%_60%] sm:grid-cols-1 items-center gap-20">
            <div className="space-y-5">
              <h1 className="text-4xl px-5 font-semibold">
                The other side of the cup
              </h1>
              <p className="px-5">
                We're equally dedicated to our beloved customers. Every sip is a
                chance for connection. So, whether you're new to the world of
                coffee or a coffee connoisseur, we're stoked to be on this
                journey with you.
              </p>
            </div>
            <div>
              <img
                src="https://www.vervecoffee.com/cdn/shop/files/Misc-Coffee-2_1500x.jpg"
                alt=""
                className="w-full sm:h-75 lg:h-100 "
              />
            </div>
          </div>
        </div>
        <div className="bg-ring ">
          <div className="pt-15 pb-15 flex justify-center">
            <div className="space-y-5 lg:max-w-xl sm:max-w-sm text-center text-primary">
              <h1 className="lg:text-4xl sm:text-3xl  font-semibold">
                The Farmlevel Initiative
              </h1>
              <p>
                This initiative is our commitment to ethics and excellence in
                coffee. Here’s how we do it:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
