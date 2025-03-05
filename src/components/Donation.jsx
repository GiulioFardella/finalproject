import React from "react";
import "../css/donation.css";
import "../assets/people/people4.jpg";
import { Form, Button, Card, InputGroup } from "react-bootstrap";


const Donation = () => {
  
  return (
    <div className="donation-global">
      <Card
        className="mx-auto p-4 shadow card-body"
        style={{ maxWidth: "600px", maxHeight: "800px" }}
      >
        <Card.Body>
          <Card.Title className="text-center">Fai una Donazione</Card.Title>
          <Form>
            {/* Importo della donazione */}
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
                />
              </InputGroup>
            </Form.Group>

            {/* Nome completo */}
            <Form.Group className="mb-3">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                required
                className="donation-form"
              />
            </Form.Group>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci la tua email"
                required
                className="donation-form"
              />
            </Form.Group>

            {/* Metodo di pagamento */}
            <Form.Group className="mb-3">
              <Form.Label>Metodo di Pagamento</Form.Label>
              <Form.Select>
                <option>Seleziona un metodo</option>
                <option>Carta di Credito</option>
                <option>PayPal</option>
                <option>Bonifico Bancario</option>
              </Form.Select>
            </Form.Group>

            {/* Pulsante di donazione */}
            <Button
              variant="success"
              type="submit"
              className="w-100 donation-button"
            >
              Dona Ora
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Donation;
