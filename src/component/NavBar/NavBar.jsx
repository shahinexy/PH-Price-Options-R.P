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
    <div className="py-5">
      <div onClick={() => setOpen(!open)} className="md:hidden text-2xl cursor-pointer">
        {
            open ? <MdCloseFullscreen /> : <RiMenu5Fill  />
        }
        
      </div>
      <ul className={`md:flex gap-10 absolute md:static text-white font-semibold bg-gray-600 px-5 w-full py-5 duration-1000
      ${open ? 'top-14' : '-top-80'}
      `}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
