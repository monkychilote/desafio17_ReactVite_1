import React from "react";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Register from "./componentes/Register";
import Login from "./componentes/Login";

const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home />*/}
      {/* Descomenta el componente necesario según el formulario que quieras mostrar */}
      {/*<Register />*/}
      <Login />
      <Footer />
    </div>
  );
};

export default App;
