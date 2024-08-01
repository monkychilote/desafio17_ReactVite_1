// src/components/CardPizza.jsx
import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
          <p className="card-text">Precio: ${price.toLocaleString()}</p>
          <div className="mt-auto">
            <button className="btn btn-primary">Ver Más</button>
            <button className="btn btn-success">Añadir</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
