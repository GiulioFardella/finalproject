import { Link } from "react-router-dom"; // Importa Link
import Carousel from "react-bootstrap/Carousel";
import { useState, useEffect } from "react";

// immagini
import tigre4 from "../assets/animals/Mammiferi/tigre/tigre4.jpg";
import shark3 from "../assets/animals/Pesci/squalo/shark3.jpg";
import moray4 from "../assets/animals/Pesci/murena/moray4.jpg";
import leopardo3 from "../assets/animals/Mammiferi/Leopardo Amur/leopardo3.jpeg";
import snake1 from "../assets/animals/Rettili/serpente/snake1.jpg";
import croco1 from "../assets/animals/Rettili/coccodrillo/croco1.jpg";
import gorilla1 from "../assets/animals/Mammiferi/gorilla/gorilla1.jpg";
import people1 from "../assets/people/people1.png";
import people2 from "../assets/people/people2.jpg";
import people3 from "../assets/people/people3.jpg";
import people4 from "../assets/people/people4.jpg";
import people5 from "../assets/people/people5.jpg";
import "../css/carousel.css";

function MyCarousel() {
  const images = [people1,people2,people3,people4, tigre4, shark3, moray4, leopardo3, snake1, croco1, gorilla1,people5];

  const [shuffledImages, setShuffledImages] = useState([]);

  useEffect(() => {
    setShuffledImages([...images].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="carousel-container">
      <Carousel>
        {shuffledImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image}
              alt={`Slide ${index}`}
              style={{
                height: "60rem",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="fixed-message">
  <h2>Salviamo gli animali in via d'estinzione</h2>
  <h4> Adotta un animale o partecipa alle missioni aiutandoci sul campo!</h4>
  <br />
  <p>Ogni contributo conta, unisciti a noi per proteggere la fauna selvatica.</p>

  {/* 🟢 Trasformiamo il titolo in un link */}
  <Link to={"/adozione"} className="adopt-link">
    <h3>ADOTTA UN ANIMALE</h3>
  </Link>
</div>


      {/* Bottone con Link per la pagina di adozione */}
      {/* <Link to="/adozione" className="adoptionButton">
        ADOTTA QUI
      </Link> */}

    </div>
  );
}

export default MyCarousel;
