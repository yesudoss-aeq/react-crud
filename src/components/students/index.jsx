import React, { useState } from "react";
import styles from "./students.module.css";
import UserForm from "../form";

const StudentStatus = () => {
  const [table, setTable] = useState([
    { name: "anbu", age: 30, oss: 50, python: 50, cloud: 50 },
    { name: "kjhfjdsjfsaf", age: 30, oss: 50, python: 50, cloud: 50 },
  ]);
  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [oss, setOss] = useState("");
  const [python, setPyton] = useState("");
  const [cloud, setCloud] = useState("");
  const [formStatus, setFormStatus] = useState("submit");
  const [updateIndex, setUpdateIndex] = useState(null);

  //this is new line

  const reset = () => {
    setName("");
    setAge("");
    setOss("");
    setCloud("");
    setPyton("");
  };

  const submitHandler = () => {
    const data = {
      name: name,
      age: Age,
      oss: oss,
      python: python,
      cloud: cloud,
    };
    if (formStatus === "submit") {
      setTable([...table, data]);
    }
    if (formStatus === "update") {
      const myArr = [...table];
      myArr[updateIndex] = data;
      setTable(myArr);
      setFormStatus("submit");
      setUpdateIndex(null);
    }
    setForm(false);
    reset();
  };

  const updateHandler = (index) => {
    setUpdateIndex(index);
    setFormStatus("update");
    const tableData = [...table];
    const upadteObject = tableData[index];
    setName(upadteObject.name);
    setAge(upadteObject.age);
    setOss(upadteObject.oss);
    setPyton(upadteObject.python);
    setCloud(upadteObject.cloud);
    setForm(true);
  };

  const deleteHandler = (index) => {
    const data = [...table];
    data.splice(index, 1);
    setTable(data);
  };

  return (
    <>
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
      {form && (
        <>
          <div
            onClick={() => {
              setForm(false);
              reset();
            }}
            className={styles.backdrop}
          ></div>
          <div className={styles.formContainer}>
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                submitHandler();
              }}
            >
              <label htmlFor="">Name</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name}
              />
              <label htmlFor="">Age</label>
              <input
                onChange={(e) => setAge(e.target.value)}
                type="text"
                value={Age}
              />
              <label htmlFor="">OSS</label>
              <input
                onChange={(e) => setOss(e.target.value)}
                type="text"
                value={oss}
              />
              <label htmlFor="">Python</label>
              <input
                onChange={(e) => setPyton(e.target.value)}
                type="text"
                value={python}
              />
              <label htmlFor="">Cloud Computing</label>
              <input
                onChange={(e) => setCloud(e.target.value)}
                type="text"
                value={cloud}
              />
              <button type="submit">{formStatus}</button>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default StudentStatus;
