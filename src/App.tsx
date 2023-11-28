import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.tsx";
import Home from "./pages/Home/Home.tsx";
import Cart from "./pages/Cart/Cart.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";
import PizzaInfo from "./pages/PizzaInfo/PizzaInfo.tsx";

import "./scss/app.scss";

// import pizzas from "./assets/pizzaDB.json";

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/react-pizza/" element={<Home />}>
              <Route path=":pizzaId" element={<PizzaInfo />} />
            </Route>

            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
