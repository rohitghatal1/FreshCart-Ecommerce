import { useLocation } from "react-router-dom";
import Header from "./header/Header";
import Homepage from "./pages/Homepage";
import MeatSeaFood from "./pages/MeatSeaFood";
import Contacts from "./pages/Contacts";
import Beverages from "./pages/Beverages";
import Bakery from "./pages/Bakery";

const MainScreen: React.FC = () => {
  const location = useLocation();
  const renderContent = () => {
    switch (location.pathname) {
      case "/":
        return <Homepage />;
      case "/meat-sea-food":
        return <MeatSeaFood />;

      case "/bakery":
        return <Bakery />;

      case "beverages":
        return <Beverages />;

      case "/contacts":
        return <Contacts />;
    }
  };
  return (
    <>
      <div>
        <div>
          <Header />
        </div>

        <div>
          <Homepage />
        </div>
      </div>
    </>
  );
};

export default MainScreen;
