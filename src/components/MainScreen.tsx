import Header from "./header/Header";
import Homepage from "./pages/Homepage";

const MainScreen: React.FC = () => {
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
