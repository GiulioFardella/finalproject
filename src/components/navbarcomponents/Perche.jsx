import { Container } from "react-bootstrap";
import "../../css/perche.css";

function Perche() {
  return (
    <div className="perchebody">
      <Container className="containerbody vh-100 d-flex align-items-center justify-content-center">
        <div className="bodytext p-4 text-center">
          <h1 className="fw-5 mb-4">Perché Proteggere le Specie in Via d'Estinzione</h1>
          <p className="fs-3 fst-italic">
            La biodiversità è il cuore pulsante del nostro pianeta. Ogni specie,
            grande o piccola, gioca un ruolo fondamentale negli equilibri
            ecologici che permettono la vita sulla Terra. Purtroppo, molte
            specie sono minacciate dall’attività umana, dalla distruzione degli
            habitat al bracconaggio, dal cambiamento climatico
            all’inquinamento.
          </p>
          <p className="fs-3 fst-italic">
            Proteggere le specie in via d'estinzione non significa solo
            salvaguardare gli animali, ma anche garantire un futuro sostenibile
            per tutti. La scomparsa di una specie può innescare reazioni a
            catena, alterando interi ecosistemi e mettendo a rischio la nostra
            stessa sopravvivenza.
          </p>
          <p className="fs-3 fst-italic">
            Ognuno di noi può fare la differenza: sostenere organizzazioni
            dedicate alla conservazione, adottare stili di vita sostenibili e
            sensibilizzare le nuove generazioni sono passi fondamentali per
            invertire questa tendenza. Proteggere la fauna selvatica significa
            proteggere il nostro pianeta e il nostro futuro.
          </p>
          <blockquote className="fs-3 fst-italic mt-5">
            "La grandezza di una nazione e il suo progresso morale possono essere giudicati dal modo in cui tratta gli animali." <br /> — Mahatma Gandhi
          </blockquote>
        </div>
      </Container>
    </div>
  );
}

export default Perche;
