import React, { useState } from "react";

import "./Sort.scss";

function Sort({ handleSelectedSorted }) {
  const options = [
    {
      id: 1,
      name: "популярности",
      property: "rating",
    },
    {
      id: 2,
      name: "цене",
      property: "price",
    },
    {
      id: 3,
      name: "алфавиту",
      property: "title",
    },
  ];

  return (
    <div className="sort">
      <label className="sort__label">Сортировка по: </label>
      <select
        onChange={(e) => handleSelectedSorted(e.currentTarget.value)}
        className="sort__select"
      >
        {options.map((option) => (
          <option
            key={option.id}
            className="sort__select-option"
            value={option.property}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Sort;
