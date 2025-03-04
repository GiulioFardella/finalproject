import { Modal, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../css/login.css";

function LoginModal({ show, handleClose }) {
  const navigate = useNavigate();

  // Funzione per gestire il login
  const handleLogin = (event) => {
    event.preventDefault(); 
    handleClose(); 
    navigate("/"); 
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="modal-container ">
      <div className="modal-content">
      <Modal.Header closeButton className="generalModal">
        <Modal.Title className="modaltitle">Accedi o Registrati</Modal.Title>
      </Modal.Header>
      <Modal.Body className="generalModal ">
        <Form  onSubmit={handleLogin}> {/* Il form usa handleLogin */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Inserisci email" required />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <div className="loginButtons d-flex justify-content-around">
            {/* Accedi: il submit chiama handleLogin */}
            <Button type="submit" className="button" >
              Accedi
            </Button>

           
              {/* Registrati: chiude il modale e naviga */}
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
