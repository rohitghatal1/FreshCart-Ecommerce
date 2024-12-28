import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainScreen from "./components/MainScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<MainScreen />}></Route>
      </Routes>
    </>
  );
}

export default App;
