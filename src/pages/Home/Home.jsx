import React, { useState, useEffect, useContext } from "react";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import PizzaSceleton from "../../components/Pizza/PizzaSceleton/PizzaSceleton";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [sort, setSort] = useState("rating");
  const [page, setPage] = useState(1);
  const { search } = useContext(SearchContext);

  console.log(page);
  async function getPizzas() {
    setIsLoading(true);
    const sortby = `&sortBy=${sort}&order=asc`;
    const category =
      selectedCategory > 0 ? `&category=${selectedCategory}&order=asc` : "";
    const searching = search ? `&search=${search}` : "";
    let res = await fetch(
      `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?page=${page}&limit=4${sortby}${category}${searching}`
    );
    let json = await res.json();
    setPizzas(json);
    setIsLoading(false);
  }

  useEffect(() => {
    getPizzas();
  }, [selectedCategory, sort, search, page]);

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
      {pizzas.length ? <Pagination page={page} setPage={setPage} /> : ""}
    </>
  );
}

export default Home;
