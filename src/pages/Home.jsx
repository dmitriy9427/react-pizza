import React, { useState, useEffect } from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSceleton from "../components/Pizza/PizzaSceleton/PizzaSceleton";

function Home() {
  const [pizzas, setPizzas] = useState(null);
  const [width, setWidth] = useState(window.innerWidth);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sort, setSort] = useState("rating");

  async function getPizzas() {
    const sortby = `sortBy=${sort}&order=asc`;
    const category =
      selectedCategory > 0 ? `category=${selectedCategory}&order=desc` : "";
    let res = await fetch(
      `https://64e1008250713530432ce0c5.mockapi.io/pizzas?${sortby}&${category}`
    );
    let json = await res.json();
    setPizzas(json);
  }

  useEffect(() => {
    getPizzas();
  }, [selectedCategory, sort]);

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
      array();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  function array() {
    if (width < 1469 && width > 1169) {
      return [...new Array(8)];
    }
    if (width < 1170 && width > 864) {
      return [...new Array(6)];
    }
    if (width < 865 && width > 561) {
      return [...new Array(4)];
    }
    if (width < 562 && width > 0) {
      return [...new Array(2)];
    } else {
      return [...new Array(10)];
    }
  }

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__top">
        <Categories
          selectedCategory={selectedCategory}
          handleSelectedCategory={(i) => setSelectedCategory(i)}
        />
        <Sort sort={sort} handleSelectedSorted={(value) => setSort(value)} />
      </div>
      <div className="content__items">
        {pizzas
          ? pizzas.map((pizza) => <Pizza key={pizza.id} {...pizza} />)
          : array().map((_, index) => <PizzaSceleton key={index} />)}
      </div>
    </>
  );
}

export default Home;
