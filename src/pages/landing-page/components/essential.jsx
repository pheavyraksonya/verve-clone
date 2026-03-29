import useFetch from "../../../hook/useFetch";
import { getProducts3 } from "../../../redux/feature/essential/EssentialSlice";
const Essential = () => {
  const { data: products } = useFetch((state) => state.Essential, getProducts3);

  return (
    <section className="bg-secondary mt-0 px-20 pb-24">
      <div className="mx-auto grid w-full max-w-screen-2xl gap-12 lg:grid-cols-[40%_60%] lg:items-start">
        <div className="pt-10 lg:pt-24">
          <h2 className="text-5xl font-medium uppercase leading-[1.02] text-primary">
            Essential Goods
          </h2>
          <p className="mt-9 max-w-[18ch] text-lg leading-normal text-primary/90">
            Elevated essentials designed for a refined daily ritual.
          </p>
          <button
            className="mt-10 inline-flex items-center justify-center rounded bg-primary 
          px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-secondary transition hover:bg-primary/90"
          >
            Shop Verve Merch
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-hidden">
          <div className="flex gap-6 w-max">
            {products.map((items) => (
              <div key={items.id} className="shrink-0 w-70">
                <article className="relative min-w-0">
                  <div className="relative mt-10 w-full bg-primary-foreground p-2 aspect-4/5">
                    <img
                      src={items.image}
                      alt={items.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-medium uppercase text-primary">
                    {items.name}
                  </h3>
                  <p className="mt-4 text-sm font-bold uppercase text-primary/95">
                    {items.flavor}
                  </p>
                  <p className="mt-2 text-lg font-medium text-primary">
                    {items.price}
                  </p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essential;
