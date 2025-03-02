import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import MyNavbar from "./components/MyNavbar";
import MyCarousel from "./components/MyCarousel";
import AdoptPage from "./components/AdoptPage";
import LoginModal from "./components/LoginModal"; 
import Profile from "./components/Profile";
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
       <Route path="/profilo" element={<Profile/>}/>
        <Route path="/adozione" element={<AdoptPage />} />
        <Route path="/registrazione" element={<RegisterPage/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
