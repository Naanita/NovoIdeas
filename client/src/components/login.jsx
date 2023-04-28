import React, { useState } from "react";
import axios from "axios";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser, setPassword } from "../redux/authSlice";

const Login = () => {
  const [user, setUserLocal] = useState("");
  const [password, setPasswordLocal] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getUserAndPassword = () => {
    return { user, password };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { user, password } = getUserAndPassword();

    dispatch(setUser(user));
    dispatch(setPassword(password));

    const response = await axios.post(
      "https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing",
      {
        user: user,
        password: password,
      }
    );
    if (response.status === 200) {
      navigate("/dashboard");
    } else {
      alert("Información de inicio de sesión incorrecta");
    }
  };

  return (
    <div className="page-login">
      <div className="login">
        <div className="info">
          <a href="/">
            <svg className="logo" />
          </a>
          <h3>Administración Nacional de Aeronáutica y el Espacio</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <input
              className="input"
              type="text"
              placeholder="Usuario"
              required
              name="user"
              value={user}
              onChange={(event) => setUserLocal(event.target.value)}
            />
            <input
              className="input"
              type="password"
              placeholder="Contraseña"
              required
              name="password"
              value={password}
              onChange={(event) => setPasswordLocal(event.target.value)}
            />
          </div>
          <button className="btn" type="submit">
            INGRESAR
          </button>
        </form>
        <a className="forgot-password" href="/">
          ¿Olvidaste tu contraseña?
        </a>
      </div>
    </div>
  );
};

export default Login;
