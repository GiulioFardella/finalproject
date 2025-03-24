import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

function AdminPage() {
  const { loggedUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser || loggedUser.ruolo !== "admin") {
      navigate("/"); 
    }
  }, [loggedUser, navigate]);

  return (
    <div>
      <h2>Benvenuto nell'Area Admin</h2>
    
    </div>
  );
}

export default AdminPage;
