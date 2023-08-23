import React, { useState, useEffect } from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";

function Home() {
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
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <div className="content__items">
        {pizzas ? (
          pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
        ) : (
          <h3>Загрузка пицц...</h3>
        )}
      </div>
    </>
  );
}

export default Home;
