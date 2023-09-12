import styles from "./Pagination.module.scss";

function Pagination({ page, setPage }) {
  return (
    <div className={styles.pagination}>
      {page > 1 ? (
        <svg
          onClick={() => setPage((prev) => prev - 1)}
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
        {[1, 2, 3].map((num, i) => {
          return (
            <li
              key={num}
              onClick={() => setPage(num)}
              className={`${page === num ? styles.active : styles.item}`}
            >
              {num}
            </li>
          );
        })}
      </ul>
      {page < 3 ? (
        <svg
          onClick={() => setPage((prev) => prev + 1)}
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
}

export default Pagination;
