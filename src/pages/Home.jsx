import React, { useState, useEffect, useContext } from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Pizza from "../components/Pizza/Pizza";
import PizzaSceleton from "../components/Pizza/PizzaSceleton/PizzaSceleton";
import { SearchContext } from "../App";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sort, setSort] = useState("rating");
  const { search, setSearch } = useContext(SearchContext);

  async function getPizzas() {
    setIsLoading(true);
    const sortby = `sortBy=${sort}&order=asc`;
    const category =
      selectedCategory > 0 ? `category=${selectedCategory}&order=asc` : "";
    let res = await fetch(
      `https://64e1008250713530432ce0c5.mockapi.io/pizzas?${sortby}&${category}`
    );
    let json = await res.json();
    setPizzas(json);
    setIsLoading(false);
  }

  useEffect(() => {
    getPizzas();
  }, [selectedCategory, sort]);

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
        {pizzas && !isLoading
          ? pizzas
              .filter((pizza) =>
                pizza.title.toLowerCase().includes(search.toLowerCase())
              )
              .map((pizza) => <Pizza key={pizza.id} {...pizza} />)
          : [...new Array(5)].map((_, index) => <PizzaSceleton key={index} />)}
      </div>
    </>
  );
}

export default Home;
