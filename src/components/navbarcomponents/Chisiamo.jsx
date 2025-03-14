import { Container } from "react-bootstrap";
import "../../css/chisiamo.css";

function Chisiamo() {
  return (
    <div className="chisiamobody">
      <Container className="containerbody vh-100 d-flex align-items-center justify-content-center">
        <div className="bodytext p-4">
          <h1 className="fw-5 fs-1 text-center mb-5">ZooVersee, la nostra storia</h1>
          
          <p className="lead text-center fs-3">
            Nel cuore dell’Amazzonia, durante una missione di salvataggio nel 2008, un gruppo di biologi, 
            veterinari e ambientalisti si trovò faccia a faccia con una realtà sconvolgente: intere specie sull'orlo
            dell'estinzione, minacciate dal disboscamento, dal bracconaggio e dai cambiamenti climatici. 
          </p>
          
          <div className="mt-5">
            <p>
              Fu in quel momento che nacque ZooVersee, un’organizzazione globale dedicata alla tutela degli animali
              selvatici e al ripristino dei loro habitat. Fondata da Elena Moreau, una zoologa francese, e Javier Ortega,
              un attivista ambientale argentino, ZooVersee iniziò con piccole operazioni locali per salvare specie in pericolo, 
              ma ben presto si espanse in Africa, Asia e Oceania.
            </p>
          </div>
          
          <div className="mt-5">
            <p>
              Oggi, l’associazione collabora con governi, ONG e comunità locali per proteggere animali rari, combattere il 
              traffico illegale di fauna selvatica e creare riserve naturali. Con squadre operative in più di 30 paesi, 
              ZooVersee non è solo un’organizzazione: è un movimento globale che lotta per un futuro in cui nessuna specie 
              debba più affrontare l’estinzione a causa dell’uomo.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Chisiamo;
