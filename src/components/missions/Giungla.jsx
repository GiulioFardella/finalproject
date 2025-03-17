import { useState } from "react";

import "../../css/giungla.css";
import filippine from "../../assets/mappe/filippine.jpeg"
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function Giungla() {
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
    <div className="giungla-container">
      <Container className="mt-5">
        
        {/* 🟢 Sezione Missione */}
        <div className="text-center first-content">
          <h2 className="text-center mission-title">
            🌿 Unisciti a tante persone per proteggere la{" "}
            <span>Giungla delle Filippine</span>
          </h2>

          <h4 className="text-center mt-5">
            <strong>2025: ISOLA DI PALAWAN - Filippine</strong> 
          </h4>

          <p className="text-light text-center mt-4 mission-paragraph">
            Partecipa alla nostra missione più importante per{" "}
            <span className="fw-bold">proteggere la foresta pluviale</span> e{" "}
            <span className="fw-bold">salvaguardare specie in pericolo:</span>
          </p>

          <ul className="mission-list">
            <li>🦉 Civetta delle Filippine</li>
            <li>🐵 Tarsio delle Filippine</li>
            <li>🦜 Pappagallo del Luzon</li>
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

                    <Button  type="submit" className="w-100 richiestabutton">
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
                    💖 Dona per Proteggere la Giungla
                  </h4>
                  <p>
                    Il tuo aiuto può salvare animali in pericolo come il tarsio, 
                    la civetta delle Filippine e il pappagallo del Luzon.
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
              <img src={filippine} className="filippine-image"/>
            </Col>
          </Row>

          <div className="mt-5 fw-5 fs-6 text-dark bg-light rounded-4 p-3" id="mission-description">
            <h3>🌍 Missione di Volontariato: Protezione della Giungla 🌿</h3>
            
            <p>
              Nel cuore dell’<strong>isola di Palawan</strong>, una delle aree più biodiverse delle Filippine, prende vita un’importante iniziativa di conservazione. 
              In collaborazione con il <strong>governo locale</strong>, questa missione di volontariato mira a proteggere la foresta pluviale e la sua fauna in pericolo.
            </p>

            <h4>🔎 Obiettivo della Missione</h4>
            <ul>
              <li>✔️ <strong>Monitoraggio e tutela</strong> delle specie in pericolo.</li>
              <li>✔️ <strong>Rimboschimento</strong> delle aree degradate.</li>
              <li>✔️ <strong>Sensibilizzazione delle comunità locali</strong>.</li>
            </ul>

            <h4>🏠 Alloggio e Vita sul Campo</h4>
            <ul>
              <li>🏕️ Eco-lodge immerso nella foresta.</li>
              <li>🍽️ Pasti biologici con prodotti locali.</li>
              <li>🚿 Servizi essenziali per il comfort dei volontari.</li>
            </ul>

            <h4>📅 Piano della Missione (Sintesi)</h4>
            <ul>
              <li>🟢 <strong>Giorno 1-2</strong>: Arrivo a Manila, trasferimento a Palawan.</li>
              <li>🟠 <strong>Giorno 3-7</strong>: Monitoraggio della fauna e rimboschimento.</li>
              <li>🔵 <strong>Giorno 8-10</strong>: Attività educative con le comunità locali.</li>
              <li>🟣 <strong>Giorno 11-12</strong>: Chiusura missione e preparazione al rientro.</li>
            </ul>

            <h4>📩 Come Partecipare?</h4>
            <p>
              Compila il modulo per ricevere tutti i <strong>dettagli della missione</strong>.
            </p>

            <p className="fw-bold">🔗 Unisciti a noi e aiuta a proteggere la giungla! 🌳🐾</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Giungla;
