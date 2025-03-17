import { useState } from "react";
import { Container, Button, Col, Form, Row, InputGroup } from "react-bootstrap";

function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    city: "",
    state: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    setValidated(true);

    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess("");

    try {
      const response = await fetch("http://localhost:8080/api/utenti/inserimento", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Registrazione fallita. Riprova.");
      }

      const data = await response.json();
      setSuccess("Registrazione avvenuta con successo!");
      setFormData({
        firstname: "",
        lastname: "",
        username: "",
        city: "",
        state: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleRegister}>
        {/* NOME & COGNOME */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First Name"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last Name"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* USERNAME */}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text>@</InputGroup.Text>
            <Form.Control
              required
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </InputGroup>
        </Form.Group>

        {/* EMAIL */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Your Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Form.Group>

        {/* PASSWORD */}
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>

        {/* CITY & STATE */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="City"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>State</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </Form.Group>
        </Row>

        {/* TERMS & CONDITIONS */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>

        {/* BUTTONS & MESSAGES */}
        <Button type="submit" disabled={loading}>
          {loading ? "Registrando..." : "Submit form"}
        </Button>
        {error && <p style={{ color: "red" }}>Errore: {error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
      </Form>
    </Container>
  );
}

export default RegisterPage;
