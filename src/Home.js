import React from "react";
import { app } from "./fb";

export default function Home() {
  const cerrarSesion = () => {
    app.auth().signOut();
  };
  return (
    <div>
      <h1>Bienvenido sesion iniciada</h1>
      <button onClick={cerrarSesion}>Cerrar sesion</button>
    </div>
  );
}
