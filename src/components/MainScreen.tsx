import { useLocation } from "react-router-dom";
import Header from "./header/Header";
import Homepage from "./pages/Homepage";

const MainScreen: React.FC = () => {
  const location = useLocation();
  const renderContent = () => {
    return "Content";
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
