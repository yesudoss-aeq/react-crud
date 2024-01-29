import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../home";
import About from "../about";
import styles from "./pages.module.css";
import StudentStatus from "../students";

const Page = () => {
  return (
    <div className={styles.pagesContainer}>
      <div className={styles.innerContent}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="students" element={<StudentStatus />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/*" element={<About />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default Page;
