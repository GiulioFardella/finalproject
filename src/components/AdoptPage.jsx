import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

// Dati degli animali (simulazione, puoi sostituire con un database)
const animals = [
  {
    id: 1,
    name: "Tigre del Bengala",
    image: require("../assets/animals/Mammiferi/tigre/tigre4.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 2,
    name: "Squalo Bianco",
    image: require("../assets/animals/Pesci/squalo/shark3.jpg"),
    description: "Un predatore essenziale per l'equilibrio marino.",
  },
  {
    id: 3,
    name: "Leopardo dell'Amur",
    image: require("../assets/animals/Mammiferi/Leopardo Amur/leopardo3.jpeg"),
    description: "Uno dei felini più rari del pianeta, a rischio estinzione.",
  },
];

function AdoptPage() {
  return (
    <Container className="mt-5">
      <h1 className="text-center">Adotta un Animale</h1>
      <p className="text-center">
        Scegli un animale e aiutaci a proteggerlo con la tua donazione.
      </p>

      <Row className="mt-4">
        {animals.map((animal) => (
          <Col key={animal.id} md={4} className="mb-4">
            <Card>
              <Card.Img variant="top" src={animal.image} alt={animal.name} />
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>{animal.description}</Card.Text>
                <Link to={`/adozione/${animal.id}`}>
                  <Button variant="success">Scopri di più</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AdoptPage;
