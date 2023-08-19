import React, { useState } from "react";

import "./Sort.scss";

function Sort() {
  const [selected, setSelected] = useState(true);
  const options = ["популярности", "цене", "алфавиту"];

  return (
    <div className="sort">
      <label className="sort__label">Сортировка по: </label>
      <select className="sort__select">
        {options.map((option, index) => (
          <option key={index} className="sort__select-option" value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
