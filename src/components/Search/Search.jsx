import React, { useContext, useRef, useCallback, useState } from "react";
import { SearchContext } from "../../App";
import debounce from "lodash.debounce";

import deleteIcon from "../../img/cross-svgrepo-com.svg";
import styles from "./Search.module.scss";

function Search() {
  const { search, setSearch } = useContext(SearchContext);
  const [text, setText] = useState("");
  const inputRef = useRef();

  const handleClearInput = () => {
    setSearch("");
    inputRef.current.focus();
  };

  const debounceChange = useCallback(
    debounce((value) => setSearch(value), 700),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setText(value);
    debounceChange(value);
  };

  return (
    <div className={styles.div}>
      <input
        ref={inputRef}
        value={text}
        // onChange={(e) => setSearch(e.target.value)}
        onChange={handleChange}
        className={styles.input}
        type="text"
        placeholder="Введите название пиццы ..."
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
          onClick={() => handleClearInput()}
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
