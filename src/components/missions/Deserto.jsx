import { useState, useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import emirati from "../../assets/mappe/emirati.jpeg";
import "../../assets/missioni/deserto.jpg";
import "../../css/deserto.css";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";

function Deserto() {
  const { loggedUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    birth: "",
    address: "",
    taxCode: "",
    message: "",
  });

  const [donation, setDonation] = useState(10);
  const [isZoomed, setIsZoomed] = useState(false);
  const toggleZoom = () => setIsZoomed(!isZoomed);

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

  const handleMissionDonate = async () => {
    if (!loggedUser) {
      window.location.href = "/registrazione";
      return;
    }

    try {
      await fetch("http://localhost:8080/api/donazioni", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          utenteId: loggedUser.id,
          importo: parseFloat(donation),
          tipo: "MISSIONE_DESERTO",
        }),
      });
      window.location.href = "https://buy.stripe.com/test_fZeg177GB2T33G83cc";
    } catch (err) {
      console.error("Errore donazione:", err);
      alert("Si è verificato un errore con la donazione.");
    }
  };

  return (
    <div className="deserto-container">
      <Container className="mt-5">
        <div className="text-center">
          <h2 className="text-center mission-title">
            🌿 Unisciti a tante persone per proteggere le <span>specie del Deserto</span>
          </h2>
          <h4 className="text-center mt-5">
            <strong>2025: RUB' AL KHALI - Emirati Arabi Uniti</strong>
          </h4>

          <p className=" text-center mt-4 mission-paragraph">
            Partecipa alla nostra missione più ardua per <span className="fw-bold">proteggere l'habitat</span> e <span className="fw-bold">salvaguardare specie in pericolo:</span>
          </p>

          <ul className="mission-list">
            <li>🐱 Gatto delle sabbie</li>
            <li>🐍 Vipera delle sabbie</li>
            <li>🦌 Gazzella araba</li>
          </ul>
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
                      <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Data di nascita</Form.Label>
                      <Form.Control type="date" name="birth" value={formData.birth} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Indirizzo</Form.Label>
                      <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Codice Fiscale</Form.Label>
                      <Form.Control type="text" name="taxCode" value={formData.taxCode} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Messaggio</Form.Label>
                      <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} />
                    </Form.Group>
                    <Button type="submit" className="w-100 richiestabutton">
                      📩 Invia Richiesta
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="shadow">
                <Card.Body>
                  <h4 className="text-danger">💖 Dona per le Specie del Deserto</h4>
                  <p>
                    Il tuo aiuto può salvare animali in pericolo come la gazzella araba, il gatto delle sabbie e la vipera delle sabbie.
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

                  <Button className="w-100 donabutton" onClick={handleMissionDonate}>
                    💰 Dona Ora
                  </Button>
                </Card.Body>
              </Card>
              <img
                src={emirati}
                className={`emirati-image ${isZoomed ? "zoomed" : ""}`}
                onClick={toggleZoom}
                alt="Mappa degli emirati"
              />
            </Col>
          </Row>

          <div className="mission-description  mt-5">
            <h3>
              🌍 Missione di Volontariato: Protezione delle Specie del Deserto 🏜️
            </h3>

            <p>
              Nel cuore del <strong>Rub' al Khali</strong>, uno dei deserti più vasti e affascinanti del mondo, prende vita un'importante iniziativa di conservazione ambientale. In collaborazione con il <strong>governo degli Emirati Arabi Uniti</strong>, questa missione di volontariato mira a proteggere le specie in via d'estinzione e preservare l'equilibrio dell'ecosistema desertico.
            </p>

            <h4>🔎 Obiettivo della Missione</h4>
            <ul>
              <li>✔️ <strong>Monitoraggio e tutela</strong> della fauna locale.</li>
              <li>✔️ <strong>Ripristino e salvaguardia</strong> delle aree naturali danneggiate.</li>
              <li>✔️ <strong>Sensibilizzazione delle comunità locali</strong> e collaborazione con gli enti di conservazione.</li>
            </ul>

            <h4>🏠 Alloggio e Vita sul Campo</h4>
            <ul>
              <li>🏕️ Camere condivise con aria condizionata.</li>
              <li>🍽️ Pasti forniti con ingredienti locali e sostenibili.</li>
              <li>🚿 Servizi igienici e spazi comuni per il relax.</li>
            </ul>

            <h4>📅 Piano della Missione (Sintesi)</h4>
            <ul>
              <li>🟢 <strong>Giorno 1-2</strong>: Arrivo ad Abu Dhabi, trasferimento al campo base, briefing iniziale.</li>
              <li>🟠 <strong>Giorno 3-7</strong>: Pattugliamento delle aree protette, installazione di sensori per monitorare la fauna.</li>
              <li>🔵 <strong>Giorno 8-10</strong>: Progetti di ripristino ambientale e incontri con esperti locali.</li>
              <li>🟣 <strong>Giorno 11-12</strong>: Attività di sensibilizzazione con le comunità locali.</li>
              <li>🔴 <strong>Giorno 13</strong>: Chiusura della missione, debriefing finale e rientro.</li>
            </ul>

            <h4>📩 Come Partecipare?</h4>
            <p>
              Compila il modulo di partecipazione! Dopo aver inviato la tua richiesta, riceverai una risposta con tutti i <strong>dettagli specifici della missione</strong>, incluse le <strong>date disponibili, i costi coperti e i requisiti di partecipazione</strong>.
            </p>

            <p className="fw-bold">
              🔗 Unisciti a noi e aiuta a proteggere il futuro del deserto! 🌿🐾
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Deserto;
