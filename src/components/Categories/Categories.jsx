import React, { useState } from "react";

// import "./Categories.scss";

function Categories({}) {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const сhoosePizzaСategories = (index) => {
    setSelectedCategory(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => сhoosePizzaСategories(index)}
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
