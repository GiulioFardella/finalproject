import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import AdoptPage from "./components/AdoptPage";
import LoginModal from "./components/LoginModal"; // Importa il modale
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true); // Mostra il modale all'avvio dell'app
  }, []);

  return (
    <BrowserRouter>
      <MyNavbar />
      <LoginModal show={showModal} handleClose={() => setShowModal(false)} />
      <Routes>
        <Route path="/" element={<MyCarousel />} />

        <Route path="/adozione" element={<AdoptPage />} />
        <Route path="/registrazione" element={<RegisterPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
