import { Search, ShoppingBag, User } from "lucide-react";
import { NavLink } from "../data/data";
import { useState } from "react";
import Dialog from "./Dialog";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-50">
      <nav className="bg-secondary">
        <div className="max-w-8xl mx-auto flex items-center justify-between p-3 uppercase">
          <div className="pl-20 space-x-5" />
          <a href="/" className="block">
            <h1 className="text-4xl font-semibold">Verve</h1>
            <p className="text-xs">coffee roaster</p>
          </a>
          <div className="flex items-center pr-5 space-x-5">
            <Search className="w-6 h-6" />
            <Link to="/register">
              <User className="w-6 h-6" />
            </Link>
            <ShoppingBag className="w-6 h-6" />
          </div>
        </div>
      </nav>

      {/* Bottom nav bar */}
      <div className="relative bg-primary">
        <nav className="flex items-center uppercase font-semibold justify-center gap-10 p-2">
          {NavLink.map((items) =>
            items.label === "Shop" || items.label === "SHOP" ? (
              <div
                key={items.id}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                <a
                  href={items.href}
                  className="text-xs hover:text-mutes-foreground text-mutes"
                >
                  {items.label}
                </a>

                {open && (
                  <div className="absolute top-full left-0 w-full z-50">
                    <Dialog />
                  </div>
                )}
              </div>
            ) : (
              <a
                key={items.id}
                href={items.href}
                className="text-xs hover:text-mutes-foreground text-mutes"
              >
                {items.label}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
