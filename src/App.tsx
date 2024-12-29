import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./components/MainScreen";
import Homepage from "./components/pages/Homepage";
import MeatSeaFood from "./components/pages/MeatSeaFood";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainScreen />}>
          <Route path="/dashboard" element={<Homepage />} />
          <Route path="/meat-sea-food" element={<MeatSeaFood />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
