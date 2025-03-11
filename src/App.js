import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import Chisiamo from "./components/navbarcomponents/Chisiamo";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import AdoptPage from "./components/AdoptPage";
import LoginModal from "./components/LoginModal";
import Profile from "./components/Profile";
import RegisterPage from "./components/RegisterPage";
import Donation from "./components/Donation";
import Deserto from "./components/missions/Deserto";
import Giungla from "./components/missions/Giungla";
import Savana from "./components/missions/Savana";
import Mare from "./components/missions/Mare";
import Montagna from "./components/missions/Montagna";
import Rinuncia from "./components/missions/Rinuncia";
import Cosafacciamo from "./components/navbarcomponents/Cosafacciamo";
import Perche from "./components/navbarcomponents/Perche";
import Interventi from "./components/navbarcomponents/Interventi";
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
        <Route path="/interventi" element={<Interventi/>}/>
        <Route path="/perche" element={<Perche/>}/>
        <Route path="/cosafacciamo" element={<Cosafacciamo/>}/>
        <Route path="/chisiamo" element={<Chisiamo />} />
        <Route path="/" element={<MyCarousel />} />
        <Route path="/deserto" element={<Deserto />} />
        <Route path="/mare" element={<Mare />} />
        <Route path="/montagna" element={<Montagna />} />
        <Route path="/giungla" element={<Giungla />} />
        <Route path="/savana" element={<Savana />} />
        <Route path="/rinuncia" element={<Rinuncia />} />
        <Route path="/profilo" element={<Profile />} />
        <Route path="/adozione" element={<AdoptPage />} />
        <Route path="/registrazione" element={<RegisterPage />} />
        <Route path="/donazione" element={<Donation />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

