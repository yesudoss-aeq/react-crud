import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [mail, setMail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, seConfirmPassword] = useState("");

  const navigate = useNavigate();

  const submitHandler = () => {
    if (password !== confirmPassword) {
      window.alert("password mismatch");
      return;
    }

    const data = { mail: mail, userName: userName, password: password };

    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/info/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.signup) {
          navigate("/login");
        } else {
          window.alert(data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        background: "#68bbb9",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <div
        style={{
          padding: "30px",
          borderRadius: "20px",
          background: "#69b0ef",
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <form
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler();
          }}
          action=""
        >
          <h5>Click here to signup</h5>
          <div>
            <label htmlFor="">Enter your mail id</label>
            <input
              value={mail}
              onChange={(e) => setMail(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Enter username</label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="">Enter password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="">Re-Enter password</label>
            <input
              value={confirmPassword}
              onChange={(e) => seConfirmPassword(e.target.value)}
              type="password"
            />
          </div>
          <button type="submit">Signup</button>
        </form>
        <p>
          click her for{" "}
          <Link to={"/login"}>
            <span style={{ color: "green", cursor: "pointer", scale: 1.5 }}>
              Login
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
