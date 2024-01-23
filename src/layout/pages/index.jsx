import React, { useState } from "react";
import Home from "./home";
import { Route, Routes } from "react-router-dom";
import StudentStatus from "./students";
import About from "./about";
import styles from "./pages.module.css";

const Page = () => {
  const [name, setName] = useState("sample");

  return (
    <div className={styles.pagesContainer}>
      <div className={styles.innerContent}>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="students" element={<StudentStatus />} />
          <Route path="about" element={<About />} />
          {/* <Route path="/*" element={<About />} /> */}
        </Routes>

        <h1 onClick={() => setName("changed")}>{name}</h1>
      </div>
    </div>
  );
};

export default Page;
