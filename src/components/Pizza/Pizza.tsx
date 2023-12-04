import React from "react";
import { Link } from "react-router-dom";

import "./Pizza.scss";

type PizzaProps = {
  id: string,
  imageUrl: string;
  title: string;
  structure: string;
  price: number;
};

const Pizza: React.FC<PizzaProps> = ({ id, imageUrl, title, structure, price }) => {
  return (
    <div className="pizza-block">
      <Link to={`/react-pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt={title} />
        <h4 className="pizza-block__title">{title}</h4>
        <div className="pizza-block__structure">
          <p>{structure}</p>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <button className="pizza-block__button">Выбрать</button>
        </div>
      </Link>
    </div>
  );
};

export default Pizza;
