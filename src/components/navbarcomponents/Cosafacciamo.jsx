import { Container } from "react-bootstrap";
import "../../css/cosafacciamo.css";

function Cosafacciamo() {
  return (
    <div className="cosafacciamobody p-5">
      <Container>
        <h1 className="text-center mb-5 fs-1">Le Missioni di Volontariato di ZooVersee :</h1>
         
        <p className="mb-4">
          ZooVersee opera in tutto il mondo con missioni di volontariato dedicate alla salvaguardia delle specie in via d'estinzione e alla tutela degli ecosistemi. 
          I volontari partecipano attivamente a operazioni di monitoraggio, recupero e sensibilizzazione, lavorando a stretto contatto con esperti locali per garantire un impatto concreto e duraturo.
        </p>
        
        <h2 className="mt-5 text-center fw-bold">Isola di Palawan, Filippine</h2>
        <p className="mb-4">
          ZooVersee si impegna nella protezione delle tartarughe marine e della biodiversità costiera. I volontari contribuiscono alla salvaguardia dei nidi, 
          al monitoraggio delle popolazioni di dugonghi e alla sensibilizzazione delle comunità locali sull’importanza della conservazione marina. 
          Le attività comprendono anche la pulizia delle spiagge e la riabilitazione di coralli danneggiati.
        </p>
        
        <h2 className="mt-5 text-center fw-bold">Deserto del Rub' al Khali, Emirati Arabi Uniti</h2>
        <p className="mb-4">
          L'organizzazione si occupa della tutela dell’orice d’Arabia e di altre specie adattate a condizioni estreme. I volontari partecipano a studi 
          sul comportamento degli animali, all’installazione di punti d’acqua e a iniziative di riforestazione per contrastare la desertificazione. 
          Inoltre, collaborano con le autorità locali per combattere il traffico illegale di fauna selvatica.
        </p>
        
        <h2 className="mt-5 text-center fw-bold">Melbourne, Australia</h2>
        <p className="mb-4">
          A Melbourne, ZooVersee opera per la riabilitazione degli animali colpiti dagli incendi boschivi e dalla perdita di habitat. I volontari 
          collaborano con centri di recupero per la cura di koala, canguri e altre specie autoctone, oltre a partecipare a programmi di riforestazione 
          per ristabilire l’equilibrio ecologico delle aree devastate.
        </p>
        
        <h2 className="mt-5 text-center fw-bold">Montagne del Ruanda</h2>
        <p className="mb-4">
          Nelle montagne del Ruanda, ZooVersee è impegnata nella protezione dei gorilla di montagna, una specie gravemente minacciata. I volontari 
          affiancano i ranger locali nel monitoraggio delle famiglie di gorilla, nella prevenzione del bracconaggio e nella sensibilizzazione delle 
          comunità locali sull’importanza della convivenza sostenibile con la fauna selvatica.
        </p>
        
        <h2 className="mt-5 fw-bold text-center">Savana del Serengeti</h2>
        <p className="mb-4">
          Nel Serengeti, ZooVersee supporta progetti di conservazione per grandi predatori come leoni e ghepardi. I volontari partecipano a studi 
          sul comportamento e sugli spostamenti degli animali, contribuendo alla raccolta di dati per la protezione di queste specie. 
          Inoltre, collaborano con le comunità locali per ridurre i conflitti tra allevatori e fauna selvatica.
        </p>
      </Container>
    </div>
  );
};

export default Cosafacciamo;