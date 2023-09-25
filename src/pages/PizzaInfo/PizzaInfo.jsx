import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { obj } from "../../assets/other";
import { addPizza } from "../../redux/slices/cart";

function PizzaInfo() {
  const [pizza, setPizza] = useState([]);
  const dispatch = useDispatch();
  const { pizzaId } = useParams();
  const navigate = useNavigate();

  const { typeActivate, selectedSize } = useSelector((state) => state.filters);
  const counter = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === pizza.id)
  );

  useEffect(() => {
    async function fetchDataPizza() {
      const { data } = await axios.get(
        `https://64e1008250713530432ce0c5.mockapi.io/pizzas/${pizzaId}`
      );
      setPizza(data);
    }
    fetchDataPizza();
  }, []);

  const handleAddPizza = () => {
    const objPizza = {
      id: pizza.id,
      imageUrl: pizza.imageUrl,
      title: pizza.title,
      price: pizza.price,
      count: 1,
      countertBtn: 1,
      date: new Date().getMilliseconds(),
    };

    dispatch(addPizza(objPizza));
  };
  return (
    <div>
      <img src={pizza.imageUrl} alt="" />
      <h2>{pizza.title}</h2>
      <span onClick={() => handleAddPizza()}>Добавить</span>
      {counter && <i>{counter.countertBtn}</i>}

      <button onClick={() => navigate(`/react-pizza`)}>вернуться назад</button>
    </div>
  );
}

export default PizzaInfo;
