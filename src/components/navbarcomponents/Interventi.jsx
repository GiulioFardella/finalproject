import { Container } from "react-bootstrap";
import "../../css/interventi.css";

function Interventi() {
  return (
        <div className="interventibody p-5">
    <Container className="containerbody vh-100 d-flex align-items-center justify-content-center">
        <div className="bodytext p-4">
          <h1 className="fw-5 text-center">Interventi sul Campo per la Tutela degli Animali</h1>
          
          <p className="lead text-center">
            Le operazioni di ZooVersee sul campo sono progettate per affrontare
            le minacce più urgenti alla fauna selvatica. Dalla protezione degli
            habitat alla cura diretta degli animali feriti o in pericolo, ogni
            intervento mira a garantire la sopravvivenza delle specie minacciate.
          </p>
          
          <div className="mt-5">
            <h2 id="monitoraggio">🔍 Monitoraggio e Ricerca</h2>
            <p>
              Le squadre di esperti e volontari utilizzano tecnologie avanzate,
              come droni e radiocollari, per tracciare gli spostamenti degli
              animali e raccogliere dati essenziali sulla loro popolazione e
              comportamento.
            </p>
          </div>
          
          <div className="mt-5">
            <h2 id="recupero">🩺 Recupero e Riabilitazione</h2>
            <p>
              Gli animali feriti, spesso vittime del bracconaggio o della perdita
              di habitat, vengono soccorsi, curati e, quando possibile, reinseriti
              nel loro ambiente naturale.
            </p>
          </div>
          
          <div className="mt-5">
            <h2 id="protezione">🚔 Protezione e Lotta al Bracconaggio</h2>
            <p>
              Collaboriamo con ranger locali e forze dell’ordine per contrastare
              il commercio illegale di fauna selvatica, pattugliando aree a rischio
              e rimuovendo trappole per animali.
            </p>
          </div>
          
          <div className="mt-5">
            <h2 id="educazione">📢 Educazione e Coinvolgimento delle Comunità</h2>
            <p>
              La tutela degli animali passa anche attraverso la sensibilizzazione.
              Lavoriamo con le comunità locali per promuovere pratiche sostenibili
              e alternative economiche che riducano la dipendenza dalle attività
              dannose per la fauna.
            </p>
          </div>
          
          <div className="mt-5">
            <h2 id="habitat">🌱 Ripristino degli Habitat</h2>
            <p>
              La deforestazione e l’urbanizzazione minacciano molti ecosistemi.
              I nostri interventi includono progetti di riforestazione e
              ripristino delle aree naturali per garantire un ambiente sicuro
              agli animali.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Interventi;
