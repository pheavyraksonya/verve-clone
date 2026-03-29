import { clt, promo } from "../data/data";

const Dialog = () => {
  return (
    <div className="max-w-8xl bg-secondary pt-10 pb-10 border">
      <div className="grid gap-3 grid-cols-[32%_67%] ">
        <div className="border-r">
          <div className="px-30">
            <h1 className="mb-5 text-3xl uppercase font-bold tracking-tight text-primary">
              Shop
            </h1>
            {clt.map((items) => (
              <p
                className="space-y-3 hover:underline cursor-pointer"
                key={items.id}
              >
                {items.txt}
              </p>
            ))}
          </div>
        </div>
        <div className="flex mx-10  justify-center items-center ">
          <div className="flex mx-auto justify-between gap-4">
            {promo.map((items) => (
              <div key={items.id}>
                <img src={items.image} alt="" />
                <div className="text-mutes text-center bg-primary px-4 py-2">
                  {items.btn}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
