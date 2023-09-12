import React from "react";
import { obj } from "../../assets/other";

import "./Categories.scss";

function Categories({ categoryId, handleSlectedCategory }) {
  return (
    <div className="categories">
      <ul>
        {obj.categories.map((category, index) => (
          <li
            onClick={() => handleSlectedCategory(index)}
            key={index}
            className={categoryId === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
