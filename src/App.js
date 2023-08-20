import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";

import "./scss/app.scss";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Pizza from "./components/Pizza/Pizza";

// import pizzas from "./assets/pizzaDB.json";

function App() {
  const [pizzas, setPizzas] = useState(null);

  async function getPizzas() {
    let res = await fetch("https://64e1008250713530432ce0c5.mockapi.io/pizzas");
    let json = await res.json();
    setPizzas(json);
  }

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas ? (
              pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
            ) : (
              <h3>Загрузка пицц...</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
