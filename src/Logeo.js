import React, { useState } from "react";
import { app } from "./fb";

export default function Logeo(props) {
  const [isRegistrando, setIsRegistrando] = useState(false);

  const createUser = (correo, password) => {
    app
      .auth()
      .createUserWithEmailAndPassword(correo, password)
      .then((userFirebase) => {
        console.log({ userFirebase });
        props.setUsuario(userFirebase);
      });
  };

  const initSesion = (correo, password) => {
    app
      .auth()
      .signInWithEmailAndPassword(correo, password)
      .then((userFirebase) => {
        console.log({ userFirebase });
        props.setUsuario(userFirebase);
      });
  };

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();
    const correo = e.target.emailField.value;
    const password = e.target.passwordField.value;

    if (isRegistrando) {
      createUser(correo, password);
    } else {
      initSesion(correo, password);
    }
  };
  return (
    <div>
      <h1>{isRegistrando ? "Registrate" : "Inicia sesion"}</h1>
      <form onSubmit={submitHandler}>
        <input type="email" id="emailField" />
        <input type="password" id="passwordField" />
        <button type="submit">
          {isRegistrando ? "Registrate" : "Inicia sesion"}
        </button>
      </form>
      <button onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando
          ? "¿Ya tienes cuenta? Registrate"
          : "¿No tienes cuenta? Inicia sesion"}
      </button>
    </div>
  );
}
