import React, { useState } from "react";
import "../css/donation.css";
import {
  Form,
  Button,
  Card,
  InputGroup,
  Container,
  Row,
  Col,
  Alert,
} from "react-bootstrap";

const Donation = () => {
  const [formData, setFormData] = useState({
    importo: "",
    nomeCompleto: "",
    email: "",
    metodoPagamento: "",
  });

  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  // Funzione per aggiornare lo stato quando l'utente scrive nei campi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Funzione per inviare il form al backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/donazione", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          utente: { id: 1 }, // Sostituisci con un ID dinamico se necessario
          importo: parseFloat(formData.importo),
          nomeCompleto: formData.nomeCompleto,
          email: formData.email,
          metodoPagamento: formData.metodoPagamento,
        }),
      });

      if (!response.ok) {
        throw new Error("Errore nell'elaborazione della donazione.");
      }

      setMessage("Donazione effettuata con successo!");
      setError(null);
      setFormData({ importo: "", nomeCompleto: "", email: "", metodoPagamento: "" });
    } catch (err) {
      setError(err.message);
      setMessage(null);
    }
  };

  return (
    <div className="donation-global">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        <Row className="w-100">
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <Card className="p-4 shadow card-body">
              <Card.Body>
                <Card.Title className="text-center">
                  Fai una Donazione
                </Card.Title>

                {/* Messaggi di Successo / Errore */}
                {message && <Alert variant="success">{message}</Alert>}
                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Importo (€)</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>€</InputGroup.Text>
                      <Form.Control
                        type="number"
                        placeholder="Inserisci l'importo"
                        required
                        className="donation-form"
                        min="5"
                        step="5"
                        name="importo"
                        value={formData.importo}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Nome Completo</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Inserisci il tuo nome"
                      required
                      className="donation-form"
                      name="nomeCompleto"
                      value={formData.nomeCompleto}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Inserisci la tua email"
                      required
                      className="donation-form"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Metodo di Pagamento</Form.Label>
                    <Form.Select
                      name="metodoPagamento"
                      value={formData.metodoPagamento}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Seleziona un metodo</option>
                      <option value="Carta di Credito">Carta di Credito</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Bonifico Bancario">Bonifico Bancario</option>
                    </Form.Select>
                  </Form.Group>

                  <Button variant="success" type="submit" className="w-100 donation-button">
                    Dona Ora
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Donation;
