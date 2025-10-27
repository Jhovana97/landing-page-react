import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import SobreMi from "./components/SobreMi";
import Proyectos from "./components/Proyectos";
import Cursos from "./components/Cursos";
import Contacto from "./components/Contacto";
import Tecnologias from "./components/Tecnologias";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 to-yellow-200">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      
    </div>
  );
}
