import React, { useState, useEffect } from "react";
import { app } from "./fb";
import Home from "./Home";
import Logeo from "./Logeo";

function App() {
  const [usuario, setUsuario] = useState(null);
  useEffect(() => {
    app.auth().onAuthStateChanged((firebaseUser) => {
      console.log("ya tienes sesion iniciada con ", firebaseUser);
      setUsuario(firebaseUser);
    });
  }, []);
  return <>{usuario ? <Home /> : <Logeo setUsuario={setUsuario} />}</>;
}

export default App;
