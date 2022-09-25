import React from "react";
import styles from "./Pagination.module.css";

function Pagination({
  productsPerPage,
  productsAmount,
  changePage,
  previousPage,
  nextPage,
}) {
  let pageNumber = [];

  for (let i = 1; i <= Math.ceil(productsAmount / productsPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <>
      <div className={styles.container}>
        <a className={styles.pageNumber} onClick={previousPage}>
          Prev
        </a>
        {pageNumber.map((number, i) => (
          <a
            className={styles.pageNumber}
            key={i}
            onClick={() => changePage(number)}
          >
            {number}
          </a>
        ))}
        <a className={styles.pageNumber} onClick={nextPage}>
          Next
        </a>
      </div>
    </>
  );
}

export default Pagination;
