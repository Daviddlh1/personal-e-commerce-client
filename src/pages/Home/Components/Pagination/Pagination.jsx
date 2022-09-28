import React from "react";
import styles from "./Pagination.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faAngleLeft, faAngleRight} from "@fortawesome/free-solid-svg-icons"

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
        <span className={styles.pageNumber} onClick={previousPage}>
          <FontAwesomeIcon icon={faAngleLeft}/>
        </span>
        {pageNumber.map((number, i) => (
          <span
            className={styles.pageNumber}
            key={i}
            onClick={() => changePage(number)}
          >
            {number}
          </span>
        ))}
        <span className={styles.pageNumber} onClick={nextPage}>
        <FontAwesomeIcon icon={faAngleRight}/>
        </span>
      </div>
    </>
  );
}

export default Pagination;
