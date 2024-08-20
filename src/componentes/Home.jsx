import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "../pizzas"; // Asegúrate de que pizzas.js esté en la carpeta correcta

const Home = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <div className="row card-deck">
          {pizzas.map((pizza) => (
            <CardPizza
              key={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
