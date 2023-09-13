import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Works/Work";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import { useState } from "react";
import { AsideContext } from "./context/AsideContext";

function App() {
  const [toggled, setTuggled] = useState(false);

  const handleToggle = () => {
    setTuggled(!toggled);
  };

  return (
    <AsideContext.Provider value={{ toggled, handleToggle }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/work" element={<Work />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </AsideContext.Provider>
  );
}

export default App;
