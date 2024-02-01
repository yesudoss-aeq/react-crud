import React from "react";
import styles from "./form.module.css";

const UserForm = ({
  name,
  Age,
  oss,
  python,
  cloud,
  setName,
  setAge,
  setOss,
  setPyton,
  setCloud,
  setForm,
  reset,
  submitHandler,
  formStatus,
}) => {
  return (
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
  );
};

export default UserForm;
