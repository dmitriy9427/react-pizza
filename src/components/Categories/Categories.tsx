import React from "react";
import { obj } from "../../assets/other.ts";

import "./Categories.scss";

type CategoriesProps = {
  categoryId: number;
  handleSlectedCategory: (index: number) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categoryId, handleSlectedCategory }) => {
  return (
    <div className="categories">
      <ul>
        {obj.categories.map((category: string, index: number) => (
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
};

export default Categories;
