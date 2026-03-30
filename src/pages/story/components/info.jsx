import { CiCoffeeBean } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";

const infoElement = [
  {
    icons: <FaRegHandshake className="w-18 h-18 lg:w-30 lg:h-30" />,
    txt: "Direct trade partnerships with producers",
  },
  {
    icons: <CiCoffeeBean className="w-18 h-18 lg:w-30 lg:h-30" />,
    txt: "Direct trade partnerships with producers",
  },
  {
    icons: <FaShop className="w-18 h-18 lg:w-30 lg:h-30" />,
    txt: "Direct trade partnerships with producers",
  },
];

const InFo = () => {
  return (
    <section className="bg-secondary">
      <div className="max-w-5xl mx-auto pt-10 pb-10">
        <div className="flex items-center gap-10 px-3 justify-between text-primary">
          {infoElement.map((items) => (
            <div
              key={items.id}
              className="flex-col text-primary flex items-center"
            >
              {items.icons}
              <h1 className="text-center">{items.txt}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-secondary-foreground">
        <div className="mx-auto pt-10 pb-10 max-w-7xl">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 items-center justify-between gap-30">
            <div>
              <img
                src="https://www.vervecoffee.com/cdn/shop/files/Misc-Coffee-2_1500x.jpg"
                alt=""
                className=""
              />
            </div>
            <div className="space-y-5 text-primary">
              <h1 className="font-semibold px-5 text-4xl">
                Sustainable Practices
              </h1>
              <p className="px-5">
                To sustain the earth and its people, we must acknowledge that
                every aspect of our business has an impact. Our sustainability
                practices are led from the heart, which, in our case, analyzes
                the ethical ramifications of our decisions. Some of our
                decisions look good on a profit and loss report and satisfy a
                regulation, but not all of them can be measured—or should be
                measured—that way. Decisions that impact our people, both at
                farmlevel and streetlevel, are often intuitively guided. That’s
                something we strive to preserve.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-15 pb-15">
        <img
          src="https://www.vervecoffee.com/cdn/shop/files/000075020037-3.jpg?v=1696971001"
          alt=""
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default InFo;
