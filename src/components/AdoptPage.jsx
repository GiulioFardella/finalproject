import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../css/adopt.css";
import "../assets/fern.jpg";

function AdoptPage() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/animali") 
      .then((response) => response.json())
      .then((data) => setAnimals(data))
      .catch((error) => console.error("Errore nel recupero animali:", error));
  }, []);

  return (
    <div id="generalAdoption">
      <Container>
        <h1 className="text-center h1ado">Adotta un Animale</h1>
        <p className="text-center h1ado">
          Scegli un animale e aiutaci a proteggerlo con la tua donazione.
        </p>

        <Row className="mt-4">
          {animals.map((animal) => (
            <Col key={animal.id} lg={3} md={4} xs={12} className="mb-4">
              <Card className="animal-card">
                <div className="image-container">
                  <Card.Img
                    variant="top"
                    src={animal.imageUrl} 
                    alt={animal.name}
                    className="card-img"
                  />
                </div>
                <Card.Body className="cardbody1 d-flex flex-column justify-content-between">
                  <div>
                    <Card.Title className="animal-name">
                      {animal.name}
                    </Card.Title>
                    <Card.Text className="card-text">
                      {animal.description}
                    </Card.Text>
                  </div>
                  <Link to={"/donazione"}>
                    <Button className="button">Adotta</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default AdoptPage;
