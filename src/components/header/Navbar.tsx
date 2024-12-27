import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("home");
  const location = useLocation();

  useEffect(() => {
    const pathname = location.pathname;

    if (pathname === "/") {
      setActiveLink("home");
    } else if (pathname === "/meat") {
      setActiveLink("meat");
    } else if (pathname === "/bakery") {
      setActiveLink("bakery");
    } else if (pathname === "/beverages") {
      setActiveLink("beverages");
    } else if (pathname === "/contact") {
      setActiveLink("contact");
    }
  }, [location.pathname]);

  return (
    <div>
      <nav className="p-4">
        <div className="flex justify-around items-center">
          <ul className="flex space-x-12 text-sm font-medium">
            <li
              className={`${
                activeLink === "home" ? "bg-teal-100 text-green-600" : ""
              } rounded-full px-4 py-2`}
            >
              <NavLink
                to="/"
                className="flex items-center space-x-2 text-gray-700 uppercase"
              >
                <i className="fas fa-home"></i>
                <span>Home</span>
                <i className="fa-solid fa-angle-down"></i>
              </NavLink>
            </li>
            <li
              className={`${
                activeLink === "meat" ? "bg-teal-100 text-green-600" : ""
              } rounded-full px-4 py-2`}
            >
              <NavLink
                to="/meat"
                className="flex items-center space-x-2 text-gray-700 uppercase"
              >
                <i className="fas fa-drumstick-bite"></i>
                <span>Meats & Seafood</span>
              </NavLink>
            </li>
            <li
              className={`${
                activeLink === "bakery" ? "bg-teal-100 text-green-600" : ""
              } rounded-full px-4 py-2`}
            >
              <NavLink
                to="/bakery"
                className="flex items-center space-x-2 text-gray-700 uppercase"
              >
                <i className="fas fa-cookie-bite"></i>
                <span>Bakery</span>
              </NavLink>
            </li>
            <li
              className={`${
                activeLink === "beverages" ? "bg-teal-100 text-green-600" : ""
              } rounded-full px-4 py-2`}
            >
              <NavLink
                to="/beverages"
                className="flex items-center space-x-2 text-gray-700 uppercase"
              >
                <i className="fas fa-coffee"></i>
                <span>Beverages</span>
              </NavLink>
            </li>
            <li
              className={`${
                activeLink === "contact" ? "bg-teal-100 text-green-600" : ""
              } rounded-full px-4 py-2`}
            >
              <NavLink
                to="/contact"
                className="flex items-center space-x-2 text-gray-700 uppercase"
              >
                <i className="fas fa-phone-alt"></i>
                <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
