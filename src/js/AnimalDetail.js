import { useParams } from "react-router-dom";
import { Container, Button } from "react-bootstrap";

// Dati degli animali (devono essere gli stessi di AdoptPage.js)
const animals = [
  {
    id: 1,
    name: "Tigre del Bengala",
    image: require("../assets/animals/Mammiferi/tigre/tigre4.jpg"),
    description: "Uno dei felini più maestosi al mondo, ma in pericolo critico.",
    longDescription: "Le tigri del Bengala stanno scomparendo a causa della deforestazione e del bracconaggio. Con la tua donazione, puoi aiutarci a proteggere il loro habitat e garantire la loro sopravvivenza.",
  },
  {
    id: 2,
    name: "Squalo Bianco",
    image: require("../assets/animals/Pesci/squalo/shark3.jpg"),
    description: "Un predatore essenziale per l'equilibrio marino.",
    longDescription: "Gli squali bianchi sono minacciati dalla pesca eccessiva e dall'inquinamento marino. La tua adozione simbolica aiuta a finanziare progetti di conservazione.",
  },
  {
    id: 3,
    name: "Leopardo dell'Amur",
    image: require("../assets/animals/Mammiferi/Leopardo Amur/leopardo3.jpeg"),
    description: "Uno dei felini più rari del pianeta, a rischio estinzione.",
    longDescription: "Ne restano meno di 100 in natura. Con una donazione, puoi contribuire alla loro protezione e alla creazione di riserve naturali.",
  },
];

function AnimalDetail() {
  const { id } = useParams();
  const animal = animals.find((a) => a.id === parseInt(id));

  if (!animal) {
    return <h2 className="text-center">Animale non trovato!</h2>;
  }

  return (
    <Container className="mt-5 text-center">
      <h1>{animal.name}</h1>
      <img src={animal.image} alt={animal.name} className="img-fluid mb-4" style={{ maxWidth: "500px" }} />
      <p>{animal.longDescription}</p>
      <Button variant="danger" size="lg">Dona Ora</Button>
    </Container>
  );
}

export default AnimalDetail;
