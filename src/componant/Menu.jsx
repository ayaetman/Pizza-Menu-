import React from "react";
import Pizza from "./Pizza";
import { pizzaData } from "../data";

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt
            accusantium laudantium fugit
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}

export default Menu;
