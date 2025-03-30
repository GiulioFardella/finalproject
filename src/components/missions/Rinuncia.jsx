import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../../css/rinuncia.css";
import armadillotriste from "../../assets/armadillotriste.png";
function Rinuncia() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mission: "",
    reason: "",
    details: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Gestione del cambio di input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      mission: "",
      reason: "",
      details: "",
    });
  };

  return (
    <div className="sfondorinuncia">
      <Container className="rinuncia-container p-5">
        <div className="d-flex align-items-center justify-content-center mb-5">
          <h3 className="text-muted text-center me-3 fw-bold">
            {" "}
            Ci dispiace che tu debba rinunciare alla missione
          </h3>
          <img
            src={armadillotriste}
            alt="Armadillo triste"
            className="img-fluid"
            style={{ width: "90px", height: "auto" }}
          />
        </div>
        <p className="text-light text-center mb-5 fs-4">
          Compila il modulo per aiutarci a migliorare le nostre missioni future.
        </p>

        {submitted && (
          <Alert variant="success">
            Grazie per il tuo feedback! La tua rinuncia è stata registrata.
          </Alert>
        )}

        <Form
          onSubmit={handleSubmit}
          className="shadow p-5 bg-light rounded rinuncia-form"
        >
          {/* Nome e Email */}
          <Form.Group className="mb-5">
            <Form.Label>Nome Completo</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-5">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-5">
            <Form.Label>Missione a cui stavi partecipando</Form.Label>
            <div className="d-flex flex-column gap-2 text-white">
              {[
                "2025 - Rub' al Khali",
                "2025 - Serengeti",
                "2025 - Melbourne",
                "2025 - Ruanda",
                "2025 - Isola di Palawan",
              ].map((mission) => (
                <Form.Check
                  key={mission}
                  type="radio"
                  label={mission}
                  name="mission"
                  value={mission}
                  onChange={handleChange}
                  checked={formData.mission === mission}
                />
              ))}
            </div>
          </Form.Group>

          {/* Motivo della rinuncia */}
          <Form.Group className="mb-5">
            <Form.Label>Motivo della rinuncia</Form.Label>
            <Form.Select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              required
            >
              <option value="">Seleziona un motivo</option>
              <option value="Problemi personali">Problemi personali</option>
              <option value="Difficoltà economiche">
                Difficoltà economiche
              </option>
              <option value="Problemi di salute">Problemi di salute</option>
              <option value="Cambio di programma">Cambio di programma</option>
              <option value="Altro">Altro</option>
            </Form.Select>
          </Form.Group>

          {/* Dettagli aggiuntivi */}
          <Form.Group className="mb-5">
            <Form.Label>Altri dettagli (opzionale)</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="details"
              value={formData.details}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 mb-5 mt-5">
            📩 Invia Rinuncia
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Rinuncia;
