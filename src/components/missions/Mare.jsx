import { useState } from "react";

import "../../css/mare.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function Mare() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birth: "",
    address: "",
    taxCode: "",
    message: "",
  });

  const [donation, setDonation] = useState(10); // Importo di default

  // Gestione input form volontariato
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Gestione invio form
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

  // Gestione donazione
  const handleDonate = () => {
    alert(`Grazie per la donazione di €${donation}!`);
  };

  return (
    <div className="mare-container">
      <Container className="mt-5">
        {/* 🟢 Sezione Missione */}
        <div className="text-center">
          <h2 className="text-center mission-title">
            🌊 Unisciti a tante persone per proteggere le{" "}
            <span>specie marine in Australia</span>
          </h2>

          <h4 className="text-center mt-5">
            <strong>2025: Melbourne - Australia</strong>
          </h4>

          <p className="text-light text-center mt-4 mission-paragraph">
            Partecipa alla nostra missione per{" "}
            <span className="fw-bold">proteggere l'oceano</span> e{" "}
            <span className="fw-bold">salvaguardare specie in pericolo:</span>
          </p>

          <ul className="mission-list">
            <li>🐢 Tartaruga marina</li>
            <li>🦈 Squalo balena</li>
            <li>🐬 Delfino tursiope</li>
          </ul>
        </div>

        <div className="form-section">
          <Row>
            {/* 🟠 Form di Partecipazione */}
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

                    <Button type="submit" className="w-100 richiestabutton">
                      📩 Invia Richiesta
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* 🔵 Modulo di Donazione */}
            <Col md={6}>
              <Card className="shadow">
                <Card.Body>
                  <h4 className="text-danger">
                    💖 Dona per la Protezione Marina
                  </h4>
                  <p>
                    Il tuo aiuto può salvare animali marini in pericolo come la
                    tartaruga marina, il delfino tursiope e lo squalo balena.
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

                  <Button className="w-100 donabutton" onClick={handleDonate}>
                    💰 Dona Ora
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="mission-description mt-5">
          <h3>
            🌍 Missione di Volontariato: Protezione delle Specie Marine 🌊
          </h3>

          <p>
            Sulle splendide coste di <strong>Melbourne</strong>, una delle aree
            più ricche di biodiversità marina, prende vita un'importante
            iniziativa di conservazione ambientale. In collaborazione con il{" "}
            <strong>governo australiano</strong>, questa missione di
            volontariato mira a proteggere le specie marine in via d'estinzione
            e a preservare l'equilibrio dell'ecosistema oceanico.
          </p>

          <h4>🔎 Obiettivo della Missione</h4>
          <ul>
            <li>
              ✔️ <strong>Monitoraggio e tutela</strong> delle specie marine.
            </li>
            <li>
              ✔️ <strong>Ripristino della barriera corallina</strong> e delle
              aree costiere.
            </li>
            <li>
              ✔️ <strong>Sensibilizzazione delle comunità locali</strong> e
              attività educative.
            </li>
          </ul>

          <h4>🏠 Alloggio e Vita sul Campo</h4>
          <ul>
            <li>🏕️ Alloggio in un eco-villaggio costiero.</li>
            <li>🍽️ Pasti sostenibili a base di ingredienti locali.</li>
            <li>🚿 Servizi igienici e spazi comuni ecologici.</li>
          </ul>

          <h4>📅 Piano della Missione</h4>
          <ul>
            <li>🟢 Giorno 1-2: Arrivo a Melbourne, briefing iniziale.</li>
            <li>
              🟠 Giorno 3-7: Monitoraggio delle specie marine e pulizia delle
              spiagge.
            </li>
            <li>🔵 Giorno 8-10: Ripristino degli habitat marini.</li>
            <li>
              🟣 Giorno 11-12: Attività educative con scuole e comunità locali.
            </li>
            <li>🔴 Giorno 13: Debriefing finale e rientro.</li>
          </ul>

          <p className="fw-bold">
            🔗 Unisciti a noi e aiuta a proteggere il mare! 🐬🌊
          </p>
        </div>
    </div>
      </Container>
    </div>
  );
}

export default Mare;
