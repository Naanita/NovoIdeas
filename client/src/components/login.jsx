import React from "react";
import swal from "sweetalert2"
import {useNavigate} from "react-router-dom"
import { useState } from "react";
import "../styles/login.css"

export default function Login(){

    const history = useNavigate();
    const [error, setError] = useState({});
    const [formData, setFormdata] = useState({
        email: "",
        password: "",
    })

    const handlerChange = (e) => {
        e.preventDefault();
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    
      
    }
    const handlerSubmit = (e) =>{
        e.preventDefault();
      
      // Verificar si hay errores en el objeto "errors"
      const hasErrors = Object.keys(error).some((key) => error[key] !== undefined);
    if(hasErrors){
        new swal("Ups!", "Revisa tus datos, tienes errores", "error");
    }
      // Si no hay errores, continuar con el siguiente paso
      else {
        new swal ("Estupendo!", "disfruta", "success") && history("/table")
      }
    };
    

    return(
<div className="page-login">
  <div className="login">
    <div className="info">
      <a href="/"><svg className="logo"/></a>
      <h3>El lado feliz de la vida</h3>
    </div>
    <form onsubmit="(e) => handlerSubmit(e)">
      <div className="form">
        <input
          className="input"
          type="email"
          placeholder="Usuario"
          required
          value={formData.email}
          name="email"
          onChange="(e) => handlerChange(e)"
        />
        <input
          className="input"
          type="password"
          placeholder="Contraseña"
          value={formData.password}
          required
          name="password"
          onChange="(e) => handlerChange(e)"
        />
      </div>
      <button
        className="btn"
        type="submit"
        disabled={error.email || error.password}
      >
        INGRESAR
      </button>
    </form>
    <a className="forgot-password" href="#">¿Olvidaste tu contraseña?</a>
  </div>
</div>


    )
}