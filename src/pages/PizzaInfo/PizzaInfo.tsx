import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import axios from "axios";

import { addPizza } from "../../redux/slices/cart.ts";

import closes from "../../img/close-svgrepo-com.svg";

import { RootState, useAppDispatch } from "../../redux/store.ts";
import styles from "./PizzaInfo.module.scss";

type PizzaInfoProps = {
  id: string;
  imageUrl: string;
  title: string;
  types: string[];
  sizes: number[];
  price: number;
  count: number;
  countertBtn: number;
  structure: string;
  date: number;
}

const PizzaInfo: React.FC = () => {
  const [pizza, setPizza] = useState<PizzaInfoProps>({
    id: '',
    imageUrl: '',
    title: '',
    types: [],
    sizes: [],
    price: 0,
    count: 0,
    countertBtn: 0,
    structure: '',
    date: new Date().getMilliseconds(),
  })
  const [typeActivate, setTypeActivate] = useState<number>(0);
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const arrTypePizza: string[] = ["Тонкое", "Традиционное", "Пышное"];

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pizzaId } = useParams();

  const counter = useSelector((state: RootState) =>
    state.cart.items.find((obj) => obj.id === pizza.id)
  );

  const selectedType = (index: number) => {
    setTypeActivate(index);
  };

  const handleAddPizza = () => {
    const objPizza: {
      id: string;
      imageUrl: string;
      title: string;
      types: string;
      sizes: number;
      price: number;
      count: number;
      countertBtn: number;
      date: number
    } = {
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

    return () => {
      document.body.style.overflow = "unset"
    };
  }, []);

  return (
    <div className={styles.window}>
      <div className={styles.pizza}>
        <img
          onClick={() => navigate("/react-pizza")}
          src={closes}
          className={styles.close}
          alt="закрыть"
        />
        <img className={styles.image} src={pizza.imageUrl} alt={pizza.title} />
        <div className={styles.div}>
          <h2>{pizza.title}</h2>
          <div className={styles.selector}>
            <ul className={styles.ul}>
              {pizza?.types.map((indexType, i: number) => (
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
              {pizza?.sizes.map((size, index) => (
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
