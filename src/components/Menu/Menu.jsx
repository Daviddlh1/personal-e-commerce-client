import React from "react";
import styles from "./Menu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Menu({isActive, handleToggle}) {
  return <div className={isActive? `${styles.active} ${styles.container}`: styles.container}>
    <div>
        <FontAwesomeIcon onClick={handleToggle} icon={faXmark}/>
    </div>
  </div>;
}

export default Menu;
