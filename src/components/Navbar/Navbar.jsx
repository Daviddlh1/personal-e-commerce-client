import React, { useState } from "react";
import styles from "./Navbar.module.css";
import Menu from "../Menu/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBagShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
    console.log(!toggle);
  };

  return (
    <>
      <nav className={styles.container_smallScreens}>
        <div className={styles.leftSide} onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size="xl" />
        </div>
        <h1>E-commerce-title</h1>
        <div className={styles.rightSide}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
        </div>
        {toggle && <Menu handleToggle={handleToggle} />}
      </nav>
      <nav className={styles.container_bigScreens}>
        <div>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="xl" />
        </div>
        <div>
          <h1>E-commerce-title</h1>
        </div>
        <div className={styles.rightSide} styles="display: none">
          <FontAwesomeIcon icon={faUser} size="xl" />
          <FontAwesomeIcon icon={faBagShopping} size="xl" />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
