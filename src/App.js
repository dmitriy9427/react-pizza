import React from "react";

import Header from "./components/Header/Header";

import "./scss/app.scss";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Pizza from "./components/Pizza/Pizza";

function App() {
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
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
            <Pizza />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
