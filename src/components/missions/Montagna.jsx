import { useState } from "react";
import "../../css/montagna.css";
import ruanda from "../../assets/mappe/ruanda.jpeg"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function Montagna() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birth: "",
    address: "",
    taxCode: "",
    message: "",
  });

  const [donation, setDonation] = useState(10);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert(`Grazie ${formData.name}, la tua richiesta è stata inviata!`);
    setFormData({
      name: "",
      email: "",
      birth: "",
      address: "",
      taxCode: "",
      message: "",
    });
  };

  const handleDonate = () => {
    alert(`Grazie per la donazione di €${donation}!`);
  };

  return (
    <div className="montagna-container">
      <Container className="mt-5">
        <div className="text-center">
          <h2 className="mission-title">
            🦍 Unisciti a noi per proteggere i <span>gorilla di montagna</span>{" "}
            nelle foreste africane!
          </h2>

          <h4 className="mt-5">
            <strong>2025: Ruanda </strong>
          </h4>

          <p className="mt-4 mission-paragraph">
            Partecipa alla nostra missione per{" "}
            <span className="fw-bold">proteggere i gorilla di montagna</span> e
            <span className="fw-bold">
              {" "}
              preservare il loro habitat naturale:
            </span>
          </p>
        </div>

        <div className="form-section">
          <Row>
            <Col md={6}>
              <Card className="shadow">
                <Card.Body>
                  <h4 className="text-success">🤝 Partecipa alla Missione</h4>
                  <Form onSubmit={handleVolunteerSubmit}>
                    <Form.Group className="mb-3">
                      <Form.Label>Nome Completo</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Data di nascita</Form.Label>
                      <Form.Control
                        type="date"
                        name="birth"
                        value={formData.birth}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Indirizzo</Form.Label>
                      <Form.Control
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Codice Fiscale</Form.Label>
                      <Form.Control
                        type="text"
                        name="taxCode"
                        value={formData.taxCode}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Messaggio</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Button  type="submit" className="w-100 richiestabutton">
                      📩 Invia Richiesta
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow">
                <Card.Body>
                  <h4 className="text-danger">
                    💖 Dona per la Protezione dei Gorilla
                  </h4>
                  <p>
                    Il tuo aiuto può garantire la sopravvivenza dei gorilla di
                    montagna e preservare la loro foresta.
                  </p>
                  <InputGroup className="mb-3">
                    <InputGroup.Text>€</InputGroup.Text>
                    <Form.Control
                      type="number"
                      value={donation}
                      onChange={(e) => setDonation(e.target.value)}
                      min="5"
                      step="5"
                    />
                  </InputGroup>
                  <Form.Group className="mb-3">
                    <Form.Label>Metodo di Pagamento</Form.Label>
                    <Form.Select>
                      <option>Seleziona un metodo</option>
                      <option>Carta di Credito</option>
                      <option>PayPal</option>
                      <option>Bonifico Bancario</option>
                    </Form.Select>
                  </Form.Group>
                  <Button
                    
                    className="w-100 donabutton"
                    onClick={handleDonate}
                  >
                    💰 Dona Ora
                  </Button>
                </Card.Body>
              </Card>
              <img src={ruanda} className="ruanda-image"/>
            </Col>
          </Row>
        </div>

        <div className="mission-description mt-5">
          <h3>
            🌍 Missione di Volontariato: Protezione dei Gorilla di Montagna 🦍
          </h3>
          <p>
            Nelle foreste pluviali di <strong>Ruanda, Uganda e Congo</strong>,
            un'iniziativa di conservazione ambientale mira a salvaguardare i
            gorilla di montagna.
          </p>

          <h4>🔎 Obiettivo della Missione</h4>
          <ul>
            <li>✔️ Monitoraggio e tutela delle famiglie di gorilla.</li>
            <li>✔️ Pattugliamenti anti-bracconaggio a supporto dei ranger.</li>
            <li>✔️ Riforestazione e ripristino dell’habitat.</li>
          </ul>

          <h4>🏠 Alloggio e Vita sul Campo</h4>
          <ul>
            <li>🏕️ Eco-camp immerso nella foresta tropicale.</li>
            <li>🍽️ Pasti sostenibili con ingredienti locali.</li>
            <li>🚿 Servizi ecologici e aree di relax.</li>
          </ul>
          <h4>📩 Come Partecipare?</h4>
          <p>
            Compila il modulo di partecipazione! Dopo l'invio, riceverai una
            risposta con tutti i <strong>dettagli della missione</strong>,
            incluse le{" "}
            <strong>
              date disponibili, i costi coperti e i requisiti di partecipazione
            </strong>
            .
          </p>

          <p className="fw-bold">
            🔗 Unisciti a noi e proteggi il futuro dei gorilla di montagna! 🦍🌱
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Montagna;
