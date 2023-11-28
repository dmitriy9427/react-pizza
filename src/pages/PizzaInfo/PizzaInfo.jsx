import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { addPizza } from "../../redux/slices/cart";

import close from "../../img/close-svgrepo-com.svg";
import styles from "./PizzaInfo.module.scss";

function PizzaInfo() {
  const [pizza, setPizza] = useState([]);
  const [typeActivate, setTypeActivate] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const arrTypePizza = ["Тонкое", "Традиционное", "Пышное"];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pizzaId } = useParams();

  const counter = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === pizza.id)
  );

  const selectedType = (index) => {
    setTypeActivate(index);
  };

  const handleAddPizza = () => {
    const objPizza = {
      id: pizza.id,
      imageUrl: pizza.imageUrl,
      title: pizza.title,
      types: arrTypePizza[typeActivate],
      sizes: pizza.sizes[selectedSize],
      price: pizza.price,
      count: 1,
      countertBtn: 1,
      date: new Date().getMilliseconds(),
    };

    dispatch(addPizza(objPizza));
  };

  useEffect(() => {
    async function fetchDataPizza() {
      const { data } = await axios.get(
        `https://64e1008250713530432ce0c5.mockapi.io/pizzas/${pizzaId}`
      );
      setPizza(data);
    }
    fetchDataPizza();
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div className={styles.window}>
      <div className={styles.pizza}>
        <img
          onClick={() => navigate("/react-pizza")}
          src={close}
          className={styles.close}
          alt="закрыть"
        />
        <img className={styles.image} src={pizza.imageUrl} alt={pizza.title} />
        <div className={styles.div}>
          <h2>{pizza.title}</h2>
          <div className={styles.selector}>
            <ul className={styles.ul}>
              {pizza.types &&
                pizza.types.map((indexType, i) => (
                  <li
                    className={typeActivate === i ? styles.active : ""}
                    onClick={() => selectedType(i)}
                    key={indexType}
                  >
                    {arrTypePizza[indexType]}
                  </li>
                ))}
            </ul>
            <ul className={styles.ul}>
              {pizza.sizes &&
                pizza.sizes.map((size, index) => (
                  <li
                    onClick={() => setSelectedSize(index)}
                    className={selectedSize === index ? styles.active : ""}
                    key={index}
                  >
                    {size} см.
                  </li>
                ))}
            </ul>
          </div>

          <p className={styles.p}>{pizza.structure}</p>

          <div className={styles.buttons}>
            <button
              className={styles.back}
              onClick={() => navigate(`/react-pizza`)}
            >
              Вернуться назад
            </button>
            <div className={styles.span}>
              <span className={styles.spa} onClick={() => handleAddPizza()}>
                {!counter ? "Добавить" : "Добавлено"}
              </span>
              {counter && <i>{counter.countertBtn}</i>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PizzaInfo;
