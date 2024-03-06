import React, { useEffect, useState } from "react";
import styles from "./students.module.css";
import UserForm from "../form";
import UserTable from "../table";
import Wrapper from "../wrapper";
import { useSelector } from "react-redux";

const StudentStatus = () => {
  const userId = useSelector((s) => s.user.userData);

  console.log("userId", userId._id);

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
  const [error, setError] = useState(false);
  const [crudLoading, setCrudLoading] = useState(false);

  //this is new line

  //fetch operation
  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_ENDPOINT}/info?userId=${userId._id}`
      );
      const data = await response.json();
      setTable(data);
      setTableLoading(false);
    } catch (err) {
      console.log("err", err);
      if (err) {
        setError(true);
      }
    }
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
      author: userId._id,
    };

    if (formStatus === "submit") {
      setCrudLoading(true);
      // setTable([...table, data]);
      fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/info`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            fetchData();
            setCrudLoading(false);
          }
        })
        .catch((err) => console.log(err));
    }
    if (formStatus === "update") {
      setCrudLoading(true);

      fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/info/${updateId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          fetchData();
          setCrudLoading(false);
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
    setCrudLoading(true);

    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/info/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.ok) {
        fetchData();
        setCrudLoading(false);
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
      {crudLoading && (
        <Wrapper>
          <h1 style={{ color: "white" }}>Loading...</h1>
        </Wrapper>
      )}
      {tableLoading ? (
        <h1>{error ? "someting went wrong..." : "Loading..."}</h1>
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
