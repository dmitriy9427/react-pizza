import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useSelector } from "react-redux";

import Categories from "../../components/Categories/Categories.tsx";
import Sort from "../../components/Sort/Sort.tsx";
import Pizza from "../../components/Pizza/Pizza.tsx";
import PizzaSceleton from "../../components/Pizza/PizzaSceleton/PizzaSceleton.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import { RootState, useAppDispatch } from "../../redux/store.ts";
import { Status, fetchPizzas } from "../../redux/slices/pizza.ts";
import {
  setSelectedCategory,
  setSelectedSort,
} from "../../redux/slices/filter.ts";

import smile from "../../img/smile-svgrepo-com (1).svg";


const Home: React.FC = () => {
  const { pizzas, status } = useSelector((state: RootState) => state.pizza);
  const { categoryId, sort, currentPage, search } = useSelector(
    (state: RootState) => state.filters
  );

  const dispatch = useAppDispatch();

  function handleSelectedCategory(index: number) {
    dispatch(setSelectedCategory(index));
  };

  function handleSelectedSort(value: "rating" | "price" | "title") {
    dispatch(setSelectedSort(value));
  }

  useEffect(() => {
    dispatch(fetchPizzas({ sort, categoryId, search, currentPage }));
  }, [categoryId, sort, search, currentPage, dispatch]);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      {status === Status.ERROR ? (
        <div className="error">
          <h3>
            Список пуст ...
            <img style={{ marginLeft: "10px" }} src={smile} alt="smile" />
          </h3>
          <p style={{ textAlign: "center" }}>
            Вероятно ошибка на сервере, попробуйте зайти позже!
          </p>
        </div>
      ) : (
        <>
          <div className="content__top">
            <Categories
              categoryId={categoryId}
              handleSlectedCategory={handleSelectedCategory}
            />
            <Sort handleSelectedSorted={handleSelectedSort} />
          </div>
          <div className="content__items">
            {pizzas.length || status === Status.LOADING ? (
              pizzas
                .filter((pizza: any) =>
                  pizza.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((pizza: any) => <Pizza key={pizza.id} {...pizza} />)
            ) : (
              <h3>
                Таких пицц нет ...
                <img style={{ marginLeft: "10px" }} src={smile} alt="smile" />
              </h3>
            )}
            {status === Status.LOADING &&
              [...new Array(4)].map((_, index) => (
                <PizzaSceleton key={index} />
              ))}
          </div>
          <Pagination currentPage={currentPage} />
          <Outlet />
        </>
      )}
    </>
  );
};

export default Home;
