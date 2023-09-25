import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";
import PizzaInfo from "./pages/PizzaInfo/PizzaInfo";

import "./scss/app.scss";

// import pizzas from "./assets/pizzaDB.json";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/react-pizza" element={<Home />} />
            <Route path="/pizza/:pizzaId" element={<PizzaInfo />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
