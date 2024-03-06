import React from "react";
import styles from "./header.module.css";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const { pathname } = useLocation();

  const routes = [
    { name: "Home", path: "/" },
    { name: "Student Status", path: "/students" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className={styles.navbar}>
      <div style={{ display: "flex", gap: "30px" }}>
        {routes.map((val, i) => (
          <Link
            style={{ color: `${pathname === val.path ? "blue" : ""}` }}
            key={i}
            to={val.path}
          >
            {val.name}
          </Link>
        ))}
      </div>
      <div>
        <Link to="/login"> logout</Link>
      </div>
    </div>
  );
};

export default Header;
