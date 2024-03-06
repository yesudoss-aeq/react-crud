import React from "react";
import styles from "./layout.module.css";
import Header from "../components/header";
import Page from "../components/pages";
import { Route, Routes } from "react-router-dom";

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
