import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedCategory,
  setSelectedSort,
} from "../../redux/slices/FilterSlice";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import PizzaSceleton from "../../components/Pizza/PizzaSceleton/PizzaSceleton";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";

function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { search } = useContext(SearchContext);

  const categoryId = useSelector((state) => state.filters.categoryId);
  const sort = useSelector((state) => state.filters.sort);
  const dispatch = useDispatch();

  async function getPizzas() {
    setIsLoading(true);
    const sortby = `&sortBy=${sort}&order=asc`;
    const category = categoryId > 0 ? `&category=${categoryId}&order=asc` : "";
    const searching = search ? `&search=${search}` : "";
    const pages = `page=${page}&limit=5`;
    let res = await fetch(
      `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?${pages}${sortby}${category}${searching}`
    );
    let json = await res.json();
    setPizzas(json);
    setIsLoading(false);
  }

  const handleSelectedCategory = (id) => {
    dispatch(setSelectedCategory(id));
  };

  function handleSelectedSort(value) {
    dispatch(setSelectedSort(value));
  }

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort, search, page]);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__top">
        <Categories
          categoryId={categoryId}
          handleSlectedCategory={handleSelectedCategory}
        />
        <Sort handleSelectedSorted={handleSelectedSort} />
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
      {/* <Pagination page={page} setPage={setPage} /> */}
      {pizzas.length ? <Pagination page={page} setPage={setPage} /> : ""}
    </>
  );
}

export default Home;
