import { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import "../../css/rinuncia.css";

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

  // Gestione dell'invio del modulo
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset del form dopo l'invio (opzionale)
    setFormData({
      name: "",
      email: "",
      mission: "",
      reason: "",
      details: "",
    });
  };

  return (
    <Container className="rinuncia-container mt-5">
      <h3 className="text-danger text-center">😔 Ci dispiace che tu debba rinunciare alla missione</h3>
      <p className="text-muted text-center">Compila il modulo per aiutarci a migliorare le nostre missioni future.</p>

      {submitted && <Alert variant="success">Grazie per il tuo feedback! La tua rinuncia è stata registrata.</Alert>}

      <Form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded rinuncia-form">
        {/* Nome e Email */}
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
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* Missione di riferimento */}
        <Form.Group className="mb-3">
          <Form.Label>Missione a cui stavi partecipando</Form.Label>
          <Form.Control 
            type="text" 
            name="mission" 
            value={formData.mission} 
            onChange={handleChange} 
            required 
          />
        </Form.Group>

        {/* Motivo della rinuncia */}
        <Form.Group className="mb-3">
          <Form.Label>Motivo della rinuncia</Form.Label>
          <Form.Select 
            name="reason" 
            value={formData.reason} 
            onChange={handleChange} 
            required
          >
            <option value="">Seleziona un motivo</option>
            <option value="Problemi personali">Problemi personali</option>
            <option value="Difficoltà economiche">Difficoltà economiche</option>
            <option value="Problemi di salute">Problemi di salute</option>
            <option value="Cambio di programma">Cambio di programma</option>
            <option value="Altro">Altro</option>
          </Form.Select>
        </Form.Group>

        {/* Dettagli aggiuntivi */}
        <Form.Group className="mb-3">
          <Form.Label>Altri dettagli (opzionale)</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={3} 
            name="details" 
            value={formData.details} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button variant="danger" type="submit" className="w-100">
          📩 Invia Rinuncia
        </Button>
      </Form>
    </Container>
  );
}

export default Rinuncia;
