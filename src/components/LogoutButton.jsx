import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Button } from "react-bootstrap";

function LogoutButton() {
  const { setLoggedUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:8080/logout", {
        method: "POST",
        credentials: "include",
      });
      setLoggedUser(null);
      window.location.href = "/login"; 
    } catch (err) {
      console.error("Errore nel logout", err);
    }
  };

  return (
    <Button variant="danger" onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
