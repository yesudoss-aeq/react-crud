import React, { useState } from "react";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import StudentStatus from "./students";
import About from "./about";
import styles from "./pages.module.css";

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
