import Navbar from "./Navbar";
import logo from "../../assets/logos/freshcart.png";
import { Select } from "antd";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
const { Option } = Select;

const Header: React.FC = () => {
  const showAllCategories = () => {
    // Handle category logic
  };

  const countries = [
    "Nepal",
    "USA",
    "UK",
    "India",
    "Canada",
    "Australia",
    "Germany",
    "France",
    "Italy",
    "Japan",
    "China",
    "South Korea",
    "Brazil",
    "Mexico",
    "Spain",
    "Netherlands",
    "Sweden",
    "Switzerland",
    "Singapore",
    "South Africa",
  ];

  return (
    <div>
      <section className="bg-primary text-text border-b border-component">
        {/* Basic Information Section */}
        <div className="border-b border-component py-2">
          <div className="flex justify-between items-center w-11/12 mx-auto py-2">
            <div className="flex gap-5">
              <span className="cursor-pointer">About Us</span>
              <span className="cursor-pointer">My account</span>
              <span className="cursor-pointer">Wishlist</span>
              <span className="cursor-pointer">Order Tracking</span>
            </div>
            <div className="text-sm">
              <p>
                <i className="fa-solid fa-shield-halved"></i> 100% Secure
                delivery
              </p>
            </div>
            <div className="text-sm">
              <p>
                Need help? Contact us: <span>98065542</span>
              </p>
            </div>
          </div>
        </div>

        {/* Logo and User Section */}
        <div className="flex justify-between items-center w-11/12 mx-auto py-2 gap-4">
          {/* Logo and Country */}
          <div className="flex items-center gap-4 w-1/4">
            <figure className="w-36 h-8 cursor-pointer">
              <img src={logo} alt="Freshcart Logo" className="w-full h-full" />
            </figure>
            <Select placeholder="Select a Country" className="w-40">
              {countries.map((country: string, index: number) => (
                <Option value={country} key={index}>
                  {country}
                </Option>
              ))}
            </Select>
          </div>

          {/* Search Container */}
          <div className="relative w-2/3">
            <input
              type="search"
              name="search"
              className="w-full p-2 rounded-md border border-component"
            />
            <span className="absolute top-2 right-3 cursor-pointer">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          {/* User and Cart Section */}
          <div className="flex items-center gap-4 w-1/6 justify-evenly">
            <div className="p-2 text-center rounded-md border border-component cursor-pointer">
              <FaRegUser />
            </div>
            <div className="p-2 text-center rounded-md border border-component cursor-pointer">
              <HiOutlineShoppingCart />
            </div>
          </div>
        </div>

        {/* Categories and Navbar Section */}
        <div className="flex justify-between items-center w-11/12 mx-auto py-2">
          <div>
            <button
              className="bg-btn text-white rounded-full px-4 py-2 uppercase text-sm flex items-center gap-2"
              onClick={showAllCategories}
            >
              <i className="fa-solid fa-bars"></i> All Categories
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>
          <div>
            <Navbar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
