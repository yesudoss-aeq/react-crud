import React from "react";
import styles from "./header.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/">Home</Link>
      <Link to="/students">students status</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
