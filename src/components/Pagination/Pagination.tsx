import React from "react";
import { useDispatch } from "react-redux";
import styles from "./Pagination.module.scss";
import { nextPage, prevPage, setSelectedPage } from "../../redux/slices/filter.ts";

type PaginationProps = {
  currentPage: number,
};

const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.pagination}>
      {currentPage > 1 ? (
        <svg
          className={styles.svg}
          onClick={() => dispatch(prevPage())}
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ff4500"
            d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
          />
          <path
            fill="#ff4500"
            d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
          />
        </svg>
      ) : (
        ""
      )}
      <ul className={styles.list}>
        {[1, 2, 3].map((num: number) => {
          return (
            <li
              key={num}
              onClick={() => dispatch(setSelectedPage(num))}
              className={`${currentPage === num ? styles.active : styles.item}`}
            >
              {num}
            </li>
          );
        })}
      </ul>
      {currentPage < 3 ? (
        <svg
          className={styles.svg}
          onClick={() => dispatch(nextPage())}
          width="30px"
          height="30px"
          viewBox="0 0 1024 1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ff4500"
            d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312L754.752 480z"
          />
        </svg>
      ) : (
        ""
      )}
    </div>
  );
};

export default Pagination;
