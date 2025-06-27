import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Login from "./components/Login.jsx";
import Info from "./components/Info.jsx";
import Profile from "./components/Profile.jsx";
import Integrantes from "./components/Integrantes.jsx";
import Modelo from "./components/Modelo.jsx";
import Operaciones from "./components/Operaciones.jsx"; 
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />


      <Routes>
  <Route path="/login" element={<Login />} />
  <Route path="/info" element={<Info />} />
  <Route path="/profile" element={<Profile />} />
  <Route path="/modelo" element={<Modelo/>} /> {/* ✅ página independiente */}
  <Route path="/prueba" element={<Operaciones />} /> {/* ✅ página independiente */}
  
  <Route path="/integrantes" element={<Integrantes />} /> {/* ✅ página independiente */}
</Routes>
    </>
  );
}
