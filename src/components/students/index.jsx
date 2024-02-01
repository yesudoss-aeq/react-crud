import React, { useState } from "react";
import styles from "./students.module.css";
import UserForm from "../form";
import UserTable from "../table";

const StudentStatus = () => {
  const [table, setTable] = useState([
    { name: "anbu", age: 30, oss: 50, python: 50, cloud: 50 },
    { name: "kjhfjdsjfsaf", age: 30, oss: 50, python: 50, cloud: 50 },
  ]);
  const [test, setTest] = useState([
    { name: "anbu arockia doss", age: 30, oss: 50, python: 50, cloud: 50 },
    { name: "Arun", age: 30, oss: 50, python: 50, cloud: 50 },
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
      <UserTable
        setForm={setForm}
        table={table}
        updateHandler={updateHandler}
        deleteHandler={deleteHandler}
      />

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
