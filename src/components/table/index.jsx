import React from "react";
import styles from "./table.module.css";

const UserTable = ({ table, setForm, updateHandler, deleteHandler }) => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1>Students Detail</h1>
        <button onClick={() => setForm(true)}>Add New</button>
      </div>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>OSS</th>
              <th>Python</th>
              <th>Cloud Computing</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {table.map((val, i) => (
              <tr key={i}>
                <td>{val.name}</td>
                <td>{val.age}</td>
                <td>{val.oss}</td>
                <td>{val.python}</td>
                <td>{val.cloud}</td>
                <td>
                  <button onClick={() => updateHandler(i)}>Update</button>
                  <button onClick={() => deleteHandler(i)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
