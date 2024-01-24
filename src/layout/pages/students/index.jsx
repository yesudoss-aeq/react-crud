import React from "react";
import styles from "./students.module.css";

const StudentStatus = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h1>Students Detail</h1>
          <button>Add New</button>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>OSS</th>
                <th>PYTHON</th>
                <th>Cloud Computing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anbu</td>
                <td>27</td>
                <td>50</td>
                <td>50</td>
                <td>50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.backdrop}>
        <form action=""></form>
      </div>
    </>
  );
};

export default StudentStatus;
