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
