import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCategory } from "../../redux/slices/FilterSlice";
import { obj } from "../../assets/other";

import "./Categories.scss";

function Categories() {
  const categoryId = useSelector((state) => state.filters.categoryId);
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {obj.categories.map((category, index) => (
          <li
            onClick={() => dispatch(setSelectedCategory(index))}
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
