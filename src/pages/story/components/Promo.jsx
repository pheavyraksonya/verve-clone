import React from "react";

const Promo = () => {
  return (
    <section className="bg-secondary">
      <div className="pt-15 pb-15 max-w-6xl mx-auto">
        <div className="space-y-7 text-primary flex-col flex  items-center">
          <h1 className="text-4xl font-semibold">
            Union of surf, music, and zest
          </h1>

          <p className="text-center max-w-4xl mx-auto">
            Verve Coffee Roasters was established in 2007 when Ryan O'Donovan
            and Colby Barr started a small local venture along the rugged
            California coast. Our roots are planted in Santa Cruz, where we
            remain independently owned and still roast coffee by hand.
          </p>

          <button
            className="mt-10 inline-flex items-center justify-center rounded bg-primary 
          px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary transition hover:bg-primary/90"
          >
            Shop Our Coffee
          </button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
