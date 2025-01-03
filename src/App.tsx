import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./components/MainScreen";
import Homepage from "./components/pages/Homepage";
import MeatSeaFood from "./components/pages/MeatSeaFood";
import Bakery from "./components/pages/Bakery";
import Beverages from "./components/pages/Beverages";
import Contacts from "./components/pages/Contacts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainScreen />}>
          <Route index element={<Homepage />} />
          <Route path="meat-sea-food" element={<MeatSeaFood />} />
          <Route path="bakery" element={<Bakery />} />
          <Route path="beverages" element={<Beverages />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
