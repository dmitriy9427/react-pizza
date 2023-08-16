import React from "react";

import "./Sort.scss";

function Sort() {
  return (
    <div className="sort">
      <label className="sort__label">Сортировка по: </label>
      <select className="sort__select">
        <option className="sort__select-option  active" value="По популярности">
          популярности
        </option>
        <option className="sort__select-option" value="цене">
          цене
        </option>
        <option className="sort__select-option" value="алфавиту">
          алфавиту
        </option>
      </select>
    </div>
  );
}

export default Sort;
