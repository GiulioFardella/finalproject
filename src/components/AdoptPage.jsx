import { Link } from "react-router-dom";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "../css/adopt.css"
import "../assets/fern.jpg"
import Donation from "./Donation";
// Dati degli animali (simulazione, puoi sostituire con un database)
const animals = [
  {
    id: 1,
    name: "Tigre del Bengala",
    image: require("../assets/animals/Mammiferi/tigre/tigre2.jpg"),
    description: "Uno dei felini più maestosi, simbolo di potenza e bellezza, ma in grave pericolo di estinzione.",
  },
  {
    id: 2,
    name: "Rinoceronte di Giava",
    image: require("../assets/animals/Mammiferi/rinoceronte/rhino1.jpg"),
    description: "Uno dei mammiferi più rari al mondo, con meno di 100 esemplari rimasti in natura.",
  },
  {
    id: 3,
    name: "Coccodrillo delle Filippine",
    image: require("../assets/animals/Rettili/coccodrillo/croco3.jpg"),
    description: "Un piccolo coccodrillo d'acqua dolce, minacciato dalla distruzione del suo habitat e dalla caccia.",
  },
  {
    id: 4,
    name: "Fenicottero Andino",
    image: require("../assets/animals/Uccelli/fenicottero/fenicopter2.jpg"),
    description: "Un'elegante specie di fenicottero che vive nelle lagune d'alta quota del Sud America.",
  },
  {
    id: 5,
    name: "Razza d'Acqua Dolce Gigante",
    image: require("../assets/animals/Pesci/razza/stingray1.jpg"),
    description: "Una delle più grandi razze d'acqua dolce al mondo, capace di raggiungere dimensioni impressionanti.",
  },
  {
    id: 6,
    name: "Gorilla di Montagna",
    image: require("../assets/animals/Mammiferi/gorilla/gorilla1.jpg"),
    description: "Un primate intelligente e sociale, minacciato dalla deforestazione e dal bracconaggio.",
  },
  {
    id: 7,
    name: "Axolotl Messicano",
    image: require("../assets/animals/Rettili/axolot/axolot2.jpg"),
    description: "Un anfibio unico con straordinarie capacità rigenerative, gravemente minacciato dall'inquinamento.",
  },
  {
    id: 8,
    name: "Farfalla Parnassus Apollo",
    image: require("../assets/animals/Insetti/farfalla/butter2.jpg"),
    description: "Una splendida farfalla alpina vulnerabile ai cambiamenti climatici e alla distruzione del suo habitat.",
  },
  {
    id: 9,
    name: "Murena Gigante",
    image: require("../assets/animals/Pesci/murena/moray2.jpg"),
    description: "Un predatore marino dal morso potente e dalla pelle liscia, spesso nascosto tra le rocce.",
  },
  {
    id: 10,
    name: "Pinguino Magellano",
    image: require("../assets/animals/Uccelli/pinguino/penguin2.jpg"),
    description: "Un pinguino sudamericano minacciato dai cambiamenti climatici e dall'inquinamento marino.",
  },
  {
    id: 11,
    name: "Squalo Martello Maggiore",
    image: require("../assets/animals/Pesci/squalo/shark3.jpg"),
    description: "Un predatore marino fondamentale per l'ecosistema, noto per la sua caratteristica testa a martello.",
  },
  {
    id: 12,
    name: "Leopardo dell'Amur",
    image: require("../assets/animals/Mammiferi/Leopardo Amur/leopardo3.jpeg"),
    description: "Uno dei felini più rari del pianeta, con meno di 100 esemplari in natura.",
  },
  {
    id: 13,
    name: "Condor della California",
    image: require("../assets/animals/Uccelli/condor/condor2.jpg"),
    description: "Il più grande uccello del Nord America, salvato dall'estinzione grazie a programmi di conservazione.",
  },
  {
    id: 14,
    name: "Orango del Tapanuli",
    image: require("../assets/animals/Mammiferi/orango/orango2.jpg"),
    description: "Una delle specie di oranghi più rare e a rischio, scoperta solo di recente.",
  },
  {
    id: 15,
    name: "Tartaruga Angonoka",
    image: require("../assets/animals/Rettili/tartaruga/torto2.jpg"),
    description: "Una delle tartarughe più rare al mondo, endemica del Madagascar e minacciata dalla caccia illegale.",
  },
  {
    id: 16,
    name: "Vipera dell'Ursini",
    image: require("../assets/animals/Rettili/serpente/snake2.jpg"),
    description: "Un piccolo serpente velenoso, il più minacciato d'Europa a causa della perdita del suo habitat.",
  },
];




function AdoptPage() {
  return (
    <div id="generalAdoption">
      
    <Container >
      <h1 className="text-center h1ado">Adotta un Animale</h1>
      <p className="text-center h1ado">
        Scegli un animale e aiutaci a proteggerlo con la tua donazione.
      </p>

      <Row className="mt-4">
        {animals.map((animal) => (
          <Col key={animal.id} lg={3} md={4} xs={12} className="mb-4">
            <Card className="rounded-5">
              <Card.Img variant="top" src={animal.image} alt={animal.name} />
              <Card.Body className="cardbody">
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>{animal.description}</Card.Text>
                <Link to={"/donazione"}>
                  <Button className="button">
                    Adotta</Button>
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
