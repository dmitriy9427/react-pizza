import React from "react";
import { obj } from "../../assets/other";

import "./Sort.scss";

const Sort = ({ handleSelectedSorted }) => {
  return (
    <div className="sort">
      <label className="sort__label">Сортировка по: </label>
      <select
        onChange={(e) => handleSelectedSorted(e.currentTarget.value)}
        className="sort__select"
      >
        {obj.options.map((option) => (
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
};

export default Sort;
