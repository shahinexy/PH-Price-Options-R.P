import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu5Fill } from "react-icons/ri";
import { MdCloseFullscreen } from "react-icons/md";

const NavBar = () => {
    const [open, setOpen] = useState(false)
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <div>
      <div onClick={() => setOpen(!open)} className="text-2xl cursor-pointer">
        {
            open ? <MdCloseFullscreen /> : <RiMenu5Fill  />
        }
        
      </div>
      <ul className="md:flex gap-10">
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
