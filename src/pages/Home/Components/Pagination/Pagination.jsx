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
        <a className={styles.pageNumber} onClick={previousPage}>
          <FontAwesomeIcon icon={faAngleLeft}/>
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
        <FontAwesomeIcon icon={faAngleRight}/>
        </a>
      </div>
    </>
  );
}

export default Pagination;
