import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import Categories from "../../components/Categories/Categories.tsx";
import Sort from "../../components/Sort/Sort.tsx";
import Pizza from "../../components/Pizza/Pizza.tsx";
import PizzaSceleton from "../../components/Pizza/PizzaSceleton/PizzaSceleton.tsx";
import Pagination from "../../components/Pagination/Pagination.tsx";
import { fetchPizzas } from "../../redux/slices/pizza";
import {
  setSelectedCategory,
  setSelectedSort,
} from "../../redux/slices/filter";

import smile from "../../img/smile-svgrepo-com (1).svg";

const Home: React.FC = () => {
  const { pizzas, status } = useSelector((state) => state.pizza);
  const { categoryId, sort, currentPage, search } = useSelector(
    (state) => state.filters
  );

  const dispatch = useDispatch();

  function handleSelectedCategory(index: number) {
    dispatch(setSelectedCategory(index));
  };

  function handleSelectedSort(value: string) {
    dispatch(setSelectedSort(value));
  }

  useEffect(() => {
    dispatch(fetchPizzas({ sort, categoryId, search, currentPage }));
  }, [categoryId, sort, search, currentPage]);

  return (
    <>
      <h2 className="content__title">Все пиццы</h2>
      {status === "error" ? (
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
            {pizzas.length || status === "loading" ? (
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
            {status === "loading" &&
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
