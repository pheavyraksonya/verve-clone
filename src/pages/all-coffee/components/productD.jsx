import useFetch from "../../../hook/useFetch";
import { getProducts5 } from "../../../redux/feature/allProd/allProdSlice";

const ProductD = () => {
  const { data: products } = useFetch((state) => state.allProd, getProducts5);
  return (
    <div className="bg-secondary">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="mb-10 text-4xl font-bold tracking-tight text-primary">
          All Coffee
        </h2>

        <div className="mt-6 grid  gap-y-10  grid-cols-4 gap-x-8">
          {/* mappping side*/}
          {products.map((items) => (
            <div key={items} className="shrink-0 w-70">
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
  );
};

export default ProductD;
