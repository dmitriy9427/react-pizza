import React, { useState } from "react";

import "./Categories.scss";

function Categories({ selectedCategory, handleSelectedCategory }) {
  console.log(selectedCategory);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => handleSelectedCategory(index)}
            key={index}
            className={selectedCategory === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
