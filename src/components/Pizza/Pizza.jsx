import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addPizza } from "../../redux/slices/cart";
import { obj } from "../../assets/other";

import "./Pizza.scss";
import {
  setSelectedTypeActivate,
  setSelectedSize,
} from "../../redux/slices/filter";

function Pizza({ id, imageUrl, title, types, sizes, price }) {
  // const [typeActivate, setTypeActivate] = useState(0);
  // const [selectedSize, setSelectedSize] = useState(0);

  const counter = useSelector((state) =>
    state.cart.items.find((obj) => obj.id === id)
  );

  const { typeActivate, selectedSize } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const selectedType = (index) => {
    dispatch(setSelectedTypeActivate(index));
  };

  const handleAddPizza = () => {
    const objPizza = {
      id,
      imageUrl,
      title,
      types: obj.arrTypePizza[typeActivate],
      sizes: sizes[selectedSize],
      price,
      count: 1,
      countertBtn: 1,
      date: new Date().getMilliseconds(),
    };

    dispatch(addPizza(objPizza));
  };

  return (
    <div className="pizza-block">
      <Link to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt={title} />
        <h4 className="pizza-block__title">{title}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((indexType, i) => (
            <li
              className={typeActivate === i ? "active" : ""}
              onClick={() => selectedType(i)}
              key={indexType}
            >
              {obj.arrTypePizza[indexType]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, index) => (
            <li
              onClick={() => dispatch(setSelectedSize(index))}
              className={selectedSize === index ? "active" : ""}
              key={index}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span onClick={() => handleAddPizza()}>Добавить</span>
          {counter && <i>{counter.countertBtn}</i>}
        </div>
      </div>
    </div>
  );
}

export default Pizza;
