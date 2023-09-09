import React, { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart/Cart";
import NotFound from "./pages/NotFound/NotFound";

import "./scss/app.scss";

export const SearchContext = createContext();

// import pizzas from "./assets/pizzaDB.json";

function App() {
  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Routes>
              <Route path="/react-pizza" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
