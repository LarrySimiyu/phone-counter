import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import { DisplayNumber } from "./pages/DisplayNumber";
import { PhoneNumberInput } from "./pages/PhoneNumberInput";

function App() {
  return (
    <div className="routesContainer">
      <Routes>
        <Route path="/" element={<PhoneNumberInput />} />
        <Route path="/display" element={<DisplayNumber />} />
      </Routes>
    </div>
  );
}

export default App;
