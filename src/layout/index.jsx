import React from "react";
import styles from "./layout.module.css";
import Header from "./header";
import Page from "./pages";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        
        <Header />
        <Page />
      </div>
    </div>
  );
};

export default Layout;
