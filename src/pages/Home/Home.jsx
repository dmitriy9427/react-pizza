import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedCategory,
  setSelectedSort,
} from "../../redux/slices/filter";

import Categories from "../../components/Categories/Categories";
import Sort from "../../components/Sort/Sort";
import Pizza from "../../components/Pizza/Pizza";
import PizzaSceleton from "../../components/Pizza/PizzaSceleton/PizzaSceleton";
import Pagination from "../../components/Pagination/Pagination";
import { SearchContext } from "../../App";
import { fetchPizzas } from "../../redux/slices/pizza";

function Home() {
  const { search } = useContext(SearchContext);
  const { pizzas, status } = useSelector((state) => state.pizza);
  const { categoryId, sort, currentPage } = useSelector(
    (state) => state.filters
  );
  const dispatch = useDispatch();

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
    dispatch(fetchPizzas({ sort, categoryId, search, currentPage }));
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
        {status === "sucsess" &&
          pizzas
            .filter((pizza) =>
              pizza.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((pizza) => <Pizza key={pizza.id} {...pizza} />)}
        {status === "loading" &&
          [...new Array(5)].map((_, index) => <PizzaSceleton key={index} />)}
      </div>
      <Pagination currentPage={currentPage} />
    </>
  );
}

export default Home;
