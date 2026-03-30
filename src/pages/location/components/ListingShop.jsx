import { getProducts5 } from "../../../redux/feature/shop-list/ShopListSlice";
import useFetch from "../../../hook/useFetch";

const locate = [
  { txt: "Los Angeles", href: "" },
  { txt: "Palo Alto", href: "" },
  { txt: "San Francisco", href: "" },
  { txt: "Santa Cruz", href: "" },
  { txt: "Japan", href: "" },
];

const ListingShop = () => {
  const { data: products } = useFetch((state) => state.shopList, getProducts5);
  return (
    <section className="bg-secondary overflow-hidden">
      <div className="mx-auto max-w-2xl px-8 py-10">
        <div className=" mx-auto space-y-5 text-center ">
          <h1 className="mb-5 text-4xl font-semibold">Verve Cafes</h1>
          <div className="flex items-center justify-center overflow-x-auto mx-auto gap-7 flex-nowrap">
            {locate.map((items) => (
              <a
                href={items.href}
                key={items.id}
                className="font-medium text-s hover:underline text-primary/70 whitespace-nowrap"
              >
                {items.txt}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto sm:py-10 max-w-7xl px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-primary">
          Customers also purchased
        </h2>
        <div className="mt-10 grid-cols-1 space-y-10 grid justify-center">
          {/*loop*/}
          {products.map((items) => (
            <div
              key={items.id}
              className="bg-primary-foreground text-primary px-16 py-12 flex items-center w-full h-130 gap-50"
            >
              <div className="flex items-center gap-4 shrink-0">
                <button className="text-3xl text-primary bg-transparent border-none cursor-pointer">
                  &#8249;
                </button>
                <img
                  src={items.img}
                  alt={items.name}
                  className="w-95 h-75 object-cover rounded"
                />
                <button className="text-3xl text-primary bg-transparent border-none cursor-pointer">
                  &#8250;
                </button>
              </div>

              <div className="flex-1 space-y-4 font-serif">
                <h2 className="text-2xl font-bold tracking-widest uppercase">
                  {items.name}
                </h2>
                <div>
                  <p>{items.add}</p>
                </div>
                <p>{items.time}</p>
                <a href="tel:2134195077" className="block underline">
                  {items.phone}
                </a>
                <a href="/" className="block underline">
                  Map
                </a>
                <button
                  className="inline-flex items-center justify-center rounded bg-primary 
              px-6 py-3 text-sm font-bold uppercase tracking-[0.2em] text-secondary transition 
              hover:bg-primary/90"
                >
                  Order Ahead
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ListingShop;
