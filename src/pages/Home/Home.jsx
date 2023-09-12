import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
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
  const { search } = useContext(SearchContext);

  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

  const sortby = `&sortBy=${sort}&order=asc`;
  const category = categoryId > 0 ? `&category=${categoryId}&order=asc` : "";
  const searching = search ? `&search=${search}` : "";
  const pages = `page=${currentPage}&limit=5`;

  // async function getPizzas() {
  //   setIsLoading(true);

  //   let res = await fetch(
  //     `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?${pages}${searching}${category}${sortby}`
  //   );
  //   let json = await res.json();
  //   setPizzas(json);
  //   setIsLoading(false);
  // }

  const handleSelectedCategory = (id) => {
    dispatch(setSelectedCategory(id));
  };

  function handleSelectedSort(value) {
    dispatch(setSelectedSort(value));
  }

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://64e1008250713530432ce0c5.mockapi.io/pizzas/?${pages}${searching}${category}${sortby}`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [categoryId, sort, search, currentPage]);

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
      {pizzas.length ? <Pagination currentPage={currentPage} /> : ""}
    </>
  );
}

export default Home;
