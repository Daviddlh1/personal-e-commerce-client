import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AppFooter from "../../components/Footer/Footer";
import  styles  from "./MainLayout.module.css";

function MainLayout({children}) {
  return (
  <>
  <Navbar/>
  <main className={styles.mainContainer}>
    {children}
  </main>
  <AppFooter className={styles.footer}/>
  </>
  );
}

export default MainLayout;
