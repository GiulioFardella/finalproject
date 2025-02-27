import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../css/adopt.css"
// Dati degli animali (simulazione, puoi sostituire con un database)
const animals = [
  {
    id: 1,
    name: "Tigre del Bengala",
    image: require("../assets/animals/Mammiferi/tigre/tigre2.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 2,
    name: "Rinoceronte di Giava",
    image: require("../assets/animals/Mammiferi/rinoceronte/rhino1.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 3,
    name: "Coccodrillo Delle Filippine",
    image: require("../assets/animals/Rettili/coccodrillo/croco3.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 4, name: "Fenicottero Andino" ,
    image: require("../assets/animals/Uccelli/fenicottero/fenicopter2.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 5,
    name: "Razza D'acqua Dolce Gigante",
    image: require("../assets/animals/Pesci/razza/stingray1.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 6,
    name: "Gorilla Di Montagna",
    image: require("../assets/animals/Mammiferi/gorilla/gorilla1.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 6,
    name: "Axolotl Messicano",
    image: require("../assets/animals/Rettili/axolot/axolot2.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 7,
    name: "Farfalla Parnassus Apollo",
    image: require("../assets/animals/Insetti/farfalla/butter2.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 8,
    name: "Murena Gigante",
    image: require("../assets/animals/Pesci/murena/moray2.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 9,
    name: "Pinguino Magellano",
    image: require("../assets/animals/Uccelli/pinguino/penguin2.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
  },
  {
    id: 10,
    name: "Squalo Martello Maggiore ",
    image: require("../assets/animals/Pesci/squalo/shark3.jpg"),
    description: "Un predatore essenziale per l'equilibrio marino.",
  },
  {
    id: 11,
    name: "Leopardo dell'Amur",
    image: require("../assets/animals/Mammiferi/Leopardo Amur/leopardo3.jpeg"),
    description: "Uno dei felini più rari del pianeta, a rischio estinzione.",
  },
  {
    id: 12,
    name: "Condor Della California",
    image: require("../assets/animals/Uccelli/condor/condor2.jpg"),
    description: "Uno dei felini più rari del pianeta, a rischio estinzione.",
  },
  {
    id: 13,
    name: "Orango Del Tapanuli ",
    image: require("../assets/animals/Mammiferi/orango/orango2.jpg"),
    description: "Uno dei felini più rari del pianeta, a rischio estinzione.",
  },
  {
    id: 14,
    name: "Tartaruga Angonoka",
    image: require("../assets/animals/Rettili/tartaruga/torto2.jpg"),
    description: "Uno dei felini più rari del pianeta, a rischio estinzione.",
  },
  {
    id: 15,
    name: "Vipera dell'Ursini",
    image: require("../assets/animals/Rettili/serpente/snake2.jpg"),
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
          <Col key={animal.id} lg={3} md={4} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={animal.image} alt={animal.name} />
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>{animal.description}</Card.Text>
                <Link to={`/adozione/${animal.id}`}>
                  <Button className="button">Scopri di più</Button>
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
