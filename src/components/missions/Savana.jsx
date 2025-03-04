import { useState } from "react";
import "../../assets/savana.jpg";
import "../../css/savana.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function Savana() {
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
    <div className="savana-container">
      <Container className="mt-5">
        
        {/* 🟢 Sezione Missione */}
        <div className="text-center ">
        <h2 className="text-center mission-title">
  🌿 Unisciti a tante persone per proteggere le{" "}
  <span>specie della Savana</span>
</h2>

<h4 className="text-center mt-5 ">
  <strong>2025: SERENGETI - Tanzania</strong> 
</h4>

<p className="text-muted text-center mt-4 mission-paragraph">
  Partecipa alla nostra missione più ardua per{" "}
  <span className="fw-bold">proteggere l'habitat</span> e{" "}
  <span className="fw-bold">salvaguardare specie in pericolo:</span>
</p>

<ul className="mission-list">
  <li>🦁 Leone africano</li>
  <li>🐘 Elefante della savana</li>
  <li>🦒 Giraffa masai</li>
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

                  <Button variant="success" type="submit" className="w-100">
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
                  💖 Dona per le Specie della Savana
                </h4>
                <p>
                  Il tuo aiuto può salvare animali in pericolo come il leone africano, l'elefante della savana e la giraffa masai.
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
                  variant="danger"
                  className="w-100"
                  onClick={handleDonate}
                >
                  💰 Dona Ora
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mission-description mt-5">
  <h3>🌍 Missione di Volontariato: Protezione delle Specie della Savana 🦁</h3>
  
  <p>
    Nel cuore della <strong>Savana africana</strong>, un ecosistema straordinario e ricco di biodiversità, nasce un'importante iniziativa di conservazione ambientale. In collaborazione con le <strong>autorità locali della Tanzania</strong>, questa missione di volontariato ha l'obiettivo di proteggere le specie in via d'estinzione e preservare l'equilibrio naturale della savana.
  </p>

  <h4>🔎 Obiettivo della Missione</h4>
  <p>
    La missione si concentrerà su:
    <ul>
      <li>✔️ <strong>Monitoraggio e tutela</strong> della fauna selvatica.</li>
      <li>✔️ <strong>Ripristino degli habitat</strong> danneggiati dalla deforestazione e dal bracconaggio.</li>
      <li>✔️ <strong>Sensibilizzazione delle comunità locali</strong> per la protezione degli ecosistemi.</li>
    </ul>
  </p>

  <h4>🏠 Alloggio e Vita sul Campo</h4>
  <p>
    I volontari saranno ospitati in un <strong>eco-camp nel Parco del Serengeti</strong>, dotato di:
    <ul>
      <li>🏕️ Bungalow o tende attrezzate immerse nella natura.</li>
      <li>🍽️ Pasti preparati con ingredienti locali e sostenibili.</li>
      <li>🚿 Servizi igienici ecologici e spazi per il relax.</li>
    </ul>
  </p>

  <h4>📅 Piano della Missione (Sintesi)</h4>
  <ul>
    <li>🟢 <strong>Giorno 1-2</strong>: Arrivo ad Arusha, trasferimento al campo base, briefing iniziale.</li>
    <li>🟠 <strong>Giorno 3-7</strong>: Monitoraggio della fauna, raccolta dati e installazione di fototrappole.</li>
    <li>🔵 <strong>Giorno 8-10</strong>: Ripristino di aree danneggiate e supporto ai progetti di riforestazione.</li>
    <li>🟣 <strong>Giorno 11-12</strong>: Attività educative con le comunità locali.</li>
    <li>🔴 <strong>Giorno 13</strong>: Chiusura della missione, debriefing e rientro.</li>
  </ul>

  <h4>📩 Come Partecipare?</h4>
  <p>
    Compila il modulo di partecipazione! Dopo l'invio, riceverai una risposta con tutti i <strong>dettagli della missione</strong>, incluse le <strong>date disponibili, i costi coperti e i requisiti di partecipazione</strong>.
  </p>

  <p className="fw-bold">🔗 Unisciti a noi e aiuta a proteggere il futuro della Savana! 🌱🐘</p>
</div>


      </div>
      </Container>
    </div>
  )}


export default Savana;
