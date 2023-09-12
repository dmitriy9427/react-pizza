import React, { useContext } from "react";
import { SearchContext } from "../../App";
import deleteIcon from "../../img/cross-svgrepo-com.svg";
import styles from "./Search.module.scss";

function Search() {
  const { search, setSearch } = useContext(SearchContext);

  return (
    <div className={styles.div}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        type="text"
        placeholder="Введите название пиццы"
      />
      <svg
        className={styles.svg}
        width="20px"
        height="20px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {search && (
        <img
          onClick={() => setSearch("")}
          className={styles.icon}
          title="Очистить поле ввода"
          src={deleteIcon}
          alt="иконка удаления"
        />
      )}
    </div>
  );
}
export default Search;
