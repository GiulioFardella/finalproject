import { Modal, Button, Form } from "react-bootstrap";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../css/login.css";

function LoginModal({ show, handleClose }) {
  const navigate = useNavigate();
  const { setLoggedUser } = useContext(UserContext); // ✅ Context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Funzione per gestire il login
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/utenti/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login effettuato:", data);
        setLoggedUser(data); // ✅ Salva utente nel Context
        handleClose();
        navigate("/"); // Torna alla home
      } else {
        setError("Credenziali errate. Riprova.");
      }
    } catch (error) {
      setError("Errore di connessione al server");
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
                  navigate("/registrazione"); // ✅ Porta alla registrazione
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
