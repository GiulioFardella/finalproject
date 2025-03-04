import { Container, Row, Col } from "react-bootstrap";
import "../css/footer.css"
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 mt-auto generalFooter">
      <Container className="footer-container">
        <Row className="text-center text-md-start">
          {/* Informazioni Aziendali */}
          <Col md={3} className="mb-3">
            <h5>ZooVersee</h5>
            <p>Via Po 25/c, 00198 Roma</p>
            <p>Telefono: 06844971</p>
            <p>P.IVA: IT 02121111005</p>
            <p>C.F: 80078430586</p>
          </Col>

          {/* Link Utili */}
          <Col md={3} className="mb-3">
            <h5>Chi siamo</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Cosa facciamo</a></li>
              <li><a href="#" className="text-white text-decoration-none">Dove interveniamo</a></li>
              <li><a href="#" className="text-white text-decoration-none">Specie e habitat</a></li>
              <li><a href="#" className="text-white text-decoration-none">Cosa puoi fare tu</a></li>
              <li><a href="#" className="text-white text-decoration-none">Pandanews</a></li>
            </ul>
          </Col>

          {/* Documentazione e Legale */}
          <Col md={3} className="mb-3">
            <h5>Supporto</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white text-decoration-none">Area stampa</a></li>
              <li><a href="#" className="text-white text-decoration-none">Lavora con noi</a></li>
              <li><a href="#" className="text-white text-decoration-none">Newsletter</a></li>
              <li><a href="#" className="text-white text-decoration-none">Termini e condizioni</a></li>
              <li><a href="#" className="text-white text-decoration-none">Privacy policy</a></li>
              <li><a href="#" className="text-white text-decoration-none">Configurazione Cookies</a></li>
            </ul>
          </Col>

          {/* Social Media */}
          <Col md={3} className="mb-3">
            <h5>Seguici</h5>
            <div className="d-flex gap-3 justify-content-center justify-content-md-start">
              <a href="#" className="text-white">Facebook</a>
              <a href="#" className="text-white">Twitter</a>
              <a href="#" className="text-white">Instagram</a>
              <a href="#" className="text-white">LinkedIn</a>
              <a href="#" className="text-white">YouTube</a>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 border-top pt-3 text-center">
          <Col>
            <p className="mb-0">ZooVersee 2025 - Costruiamo un mondo in cui le persone possano vivere in armonia con la natura</p>
            <p className="text-muted">Web design: Giulio Fardella</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
