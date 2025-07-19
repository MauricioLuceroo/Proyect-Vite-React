import { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthContext";
import { AdminContext } from "../../Context/AdminContext";
import { useNavigate } from "react-router-dom";
import './StyleLogin.css';

const Login = () => {
  const { login: userLogin } = useContext(AuthContext);
  const { login: adminLogin } = useContext(AdminContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!email) validationErrors.email = "El email es requerido";
    if (!password) validationErrors.password = "La contraseña es requerida";

    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

    
    if (email === "admin@admin.com" && password === "Admin1") {
      adminLogin();  
      navigate("/admin");
    }
    
    else if (email === "user@user.com" && password === "User1") {
      userLogin();   
      navigate("/");
    } else {
      setError({ login: "Credenciales incorrectas" });
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register'); 
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Iniciar sesión</h2>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {error.email && <p style={{ color: 'red' }}>{error.email}</p>}

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error.password && <p style={{ color: 'red' }}>{error.password}</p>}

      {error.login && <p style={{ color: 'red' }}>{error.login}</p>}

      <button type="submit">Entrar</button>
      <button type="button" onClick={handleRegisterRedirect} style={{ marginTop: '10px' }}>
        Registrate
      </button>
    </form>
  );
};

export default Login;
