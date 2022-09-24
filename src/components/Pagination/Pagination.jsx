import React from "react";
import styles from "./Pagination.modules.css"

function Pagination({ productsPerPage, productsAmount, changePage }) {
    let pageNumber = []

    for(let i= 1; i <= Math.ceil(productsAmount / productsPerPage); i++) {
        pageNumber.push(i)
    }

    return (
    <>
    <div>
        <div>
            {pageNumber.map((number,i) => (
            <a className={styles.pagination} key={i} onClick={() => changePage(number)} >{number}</a>
            )
            )}
        </div>
    </div>
    </>
    )
}

export default Pagination