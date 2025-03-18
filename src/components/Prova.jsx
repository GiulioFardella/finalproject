import React, { useState } from "react";

const Prova = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
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
        setMessage("Login effettuato con successo!");
      } else {
        setMessage(`Login fallito. Codice: ${response.status}`);
        console.error("Errore nella response:", response.statusText);
      }
    } catch (error) {
      setMessage("Errore durante la chiamata al server: " + error.message);
      console.error("Errore:", error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Prova;
