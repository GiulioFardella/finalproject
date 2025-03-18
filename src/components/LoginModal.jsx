import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function LoginModal({ show, handleClose }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funzione per gestire il login
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const url = `http://localhost:8080/api/utenti/login?email=${encodeURIComponent(
      email
    )}&password=${encodeURIComponent(password)}`;

    try {
      const response = await fetch(url, { method: "GET" });
      const contentType = response.headers.get("content-type");

      if (response.ok) {
        let data;
        if (contentType && contentType.includes("application/json")) {
          data = await response.json();
          console.log("Risposta JSON:", data);
        } else {
          data = await response.text();
          console.log("Risposta Testo:", data);
        }
        handleClose();
        navigate("/");
      } else {
        setError(`Login fallito. Codice: ${response.status}`);
        console.error("Errore nella response:", response.statusText);
      }
    } catch (error) {
      setError("Errore durante la chiamata al server: " + error.message);
      console.error("Errore:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="modal-container"
    >
      <div className="modal-content">
        <Modal.Header closeButton className="generalModal">
          <Modal.Title className="modaltitle">Accedi o Registrati</Modal.Title>
        </Modal.Header>
        <Modal.Body className="generalModal">
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Inserisci email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {/* Messaggio di errore in caso di problemi */}
            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}

            <div className="loginButtons d-flex justify-content-around">
              <Button type="submit" className="button" disabled={loading}>
                {loading ? "Accedendo..." : "Accedi"}
              </Button>

              <Button
                type="button"
                className="button"
                onClick={() => {
                  handleClose();
                  navigate("/registrazione");
                }}
              >
                Registrati
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </div>
    </Modal>
  );
}

export default LoginModal;
