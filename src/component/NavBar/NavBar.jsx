import Link from "../Link/Link";

const NavBar = () => {
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/contact", name: "Contact" },
    { id: 4, path: "/products", name: "Products" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  return (
    <div>
      <ul className="md:flex gap-10">
        {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
