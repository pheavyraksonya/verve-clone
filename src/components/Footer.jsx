import { FaFacebook, FaInstagram, FaMailBulk, FaYoutube } from "react-icons/fa";
import { FaMessage, FaPhoneFlip } from "react-icons/fa6";
import { about, support, rule } from "../data/data";

const socialLink = [
  { id: 1, label: <FaInstagram className="w-10 h-10" />, href: "" },
  { id: 2, label: <FaFacebook className="w-10 h-10" />, href: "" },
  { id: 3, label: <FaYoutube className="w-10 h-10" />, href: "" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-primary">
      <div className="relative max-w-7xl mx-auto px-16 pb-12 pt-16 ">
        <div className="flex  items-center gap-5 justify-between">
          <h1 className="bg-primary text-white px-8 py-6 rounded-full  text-2xl ">
            V
          </h1>
          <div className="flex  gap-7">
            {socialLink.map((items) => (
              <a href={items.href} key={items.id}>
                {items.label}
              </a>
            ))}
          </div>
        </div>
        <hr className="text-primary mt-10" />
        <div className="mt-10">
          <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-4">
            <div className="space-y-3">
              <h1 className="text-lg font-bold">BE THE FIRST TO KNOW!</h1>
              <p className="text-sm">
                Subscribers will receive first access to special offers and
                limited releases.
              </p>
              <form action="">
                <input
                  className="border bg-mutes border-primary py-2 px-4 w-full"
                  type="email"
                  placeholder="enter your email..."
                />
              </form>
              <button className="bg-primary hover:bg-primary/90 text-mutes px-4 py-2 w-full uppercase font-bold">
                Subcribe
              </button>
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-bold">CSONTACT US</h1>
              <div className="flex items-start gap-4">
                <FaMessage className="w-10 h-10" />
                <div className="text-sm">
                  <h1>Live Chat </h1>
                  <h1>M-F 9:00am - 5:00pm PST</h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaMailBulk className="w-10 h-10" />
                <h1 className="text-sm">support@vervecoffee.com</h1>
              </div>
              <div className="gap-4 flex items-center">
                <FaPhoneFlip className="w-10 h-10" />
                <h1 className="text-sm">091245938</h1>
              </div>
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-bold">SUPPORT</h1>
              {support.map((items) => (
                <div className=" text-sm hover:underline" key={items.id}>
                  <a href={items.href}> {items.text}</a>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              <h1 className="text-lg font-bold">SUPPORT</h1>
              {about.map((items) => (
                <div className=" text-sm hover:underline" key={items.id}>
                  <a href={items.href}> {items.text}</a>
                </div>
              ))}
            </div>
          </div>
          <hr className="mt-15 text-primary" />
        </div>

        <div className="mt-15 space-y-5">
          <div className="flex gap-5 flex-col items-start sm:flex-row sm:items-center">
            {rule.map((items) => (
              <div
                key={items.id}
                className="cursor-pointer text-sm hover:underline"
                href={items.href}
              >
                {items.txt}
              </div>
            ))}
          </div>
          <div className="flex  items-center justify-between ">
            <div className="text-xs">
              <a href="/">© 2026 VERVE COFFEE ROASTERS, ALL RIGHTS RESERVED</a>
            </div>
            <div className="text-xs">
              <a href="/"> 104 BRONSON ST, SUITE 19 SANTA CRUZ, CA 95062</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
