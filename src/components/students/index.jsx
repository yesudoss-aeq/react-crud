import React, { useEffect, useState } from "react";
import styles from "./students.module.css";
import UserForm from "../form";
import UserTable from "../table";

const StudentStatus = () => {
  const [table, setTable] = useState([
    // { name: "anbu", age: 30, oss: 50, python: 50, cloud: 50 },
  ]);

  const [form, setForm] = useState(false);
  const [name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [oss, setOss] = useState("");
  const [python, setPyton] = useState("");
  const [cloud, setCloud] = useState("");
  const [formStatus, setFormStatus] = useState("submit");
  const [updateIndex, setUpdateIndex] = useState(null);

  const [updateId, setUpdateId] = useState(null);

  const [tableLoading, setTableLoading] = useState(true);

  //this is new line

  //fetch operation
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/info");
    const data = await response.json();
    setTable(data);
    setTableLoading(false);
  };

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
      cloudComputing: cloud,
    };
    if (formStatus === "submit") {
      // setTable([...table, data]);
      fetch("http://localhost:5000/info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          fetchData();
        }
      });
    }
    if (formStatus === "update") {
      fetch(`http://localhost:5000/info/${updateId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          fetchData();
        }
      });

      // const myArr = [...table];
      // myArr[updateIndex] = data;
      // setTable(myArr);
      setFormStatus("submit");
      setUpdateIndex(null);
      setUpdateId(null);
    }
    setForm(false);
    reset();
  };

  const updateHandler = (index, id) => {
    setUpdateIndex(index);
    setUpdateId(id);
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

  const deleteHandler = (index, id) => {
    fetch(`http://localhost:5000/info/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        fetchData();
      }
    });

    // const data = [...table];
    // data.splice(index, 1);
    // setTable(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {tableLoading ? (
        <h1>Loading...</h1>
      ) : (
        <UserTable
          setForm={setForm}
          table={table}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      )}

      {form && (
        <UserForm
          setForm={setForm}
          reset={reset}
          submitHandler={submitHandler}
          name={name}
          setName={setName}
          Age={Age}
          setAge={setAge}
          oss={oss}
          setOss={setOss}
          python={python}
          setPyton={setPyton}
          cloud={cloud}
          setCloud={setCloud}
          formStatus={formStatus}
        />
      )}
    </>
  );
};

export default StudentStatus;
