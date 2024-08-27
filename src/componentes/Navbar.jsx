// src/componentes/Navbar.jsx
//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        Pizzería Mamma Mia!
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              🍕 Inicio
            </a>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔓 Profile
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔒 Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔐 Login
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  🔐 Registrate
                </a>
              </li>
            </>
          )}
          <li className="nav-item">
            <a className="nav-link" href="#">
              🛒 Total: ${total.toLocaleString()}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
