import React from "react";
import { obj } from "../../assets/other.ts";

import "./Sort.scss";

type SortProps = {
  handleSelectedSorted: (value: "rating" | "price" | "title") => void;
}

const Sort: React.FC<SortProps> = ({ handleSelectedSorted }) => {
  return (
    <div className="sort">
      <label className="sort__label">Сортировка по: </label>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelectedSorted(e.currentTarget.value)}
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
