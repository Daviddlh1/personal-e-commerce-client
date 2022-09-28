import React from "react";
import styles from "./Footer.module.css"

function Footer() {
  return (
    <>
      <div className={styles.mainContainer}>
        <h2>E-commerce-title</h2>
        <div className={styles.optionsContainer}>
          <div>
            <h3>Quick Links</h3>
            <ul></ul>
          </div>
          <div>
            <h3>About us</h3>
            <ul></ul>
          </div>
          <div>
            <h3>sign up and save</h3>
            <ul></ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
