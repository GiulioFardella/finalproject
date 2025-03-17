import { useState } from "react";

function ChiamataAPI2() {
  const [response, setResponse] = useState(""); // Stato per la risposta dell'API
  const [loading, setLoading] = useState(false); // Stato di caricamento
  const [error, setError] = useState(null); // Stato per eventuali errori

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://127.0.0.1:8090/prova"); // Chiamata al server Spring Boot
      if (!res.ok) {
        throw new Error("Errore nella risposta del server");
      }
      const data = await res.text(); // Otteniamo il testo della risposta
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="text" value={response} readOnly placeholder="Premi il pulsante" />
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Caricamento..." : "Chiama API"}
      </button>
      {error && <p style={{ color: "red" }}>Errore: {error}</p>}
    </div>
  );
}

export default ChiamataAPI2;