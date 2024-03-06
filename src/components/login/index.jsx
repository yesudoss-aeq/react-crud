import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UseDispatch } from "react-redux";
import { setInitialLoading, setuser } from "../store/slices/userSlice";

const Login = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const cookies = document.cookie.split(";");

  const parsedCookies = (array) => {
    let obj = {};

    for (let element of array) {
      let [key, value] = element.split("=");
      obj[key?.trim()] = value?.trim();
    }
    return obj;
  };
  const { userName: user, password: key } = parsedCookies(cookies);

  const submitHandler = () => {
    const data = { userName, password };
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/info/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.login) {
          console.log("data", data);
          const expiryDate = new Date();
          expiryDate.setTime(expiryDate.getTime() + 60 * 60 * 1000); // Add one hour in milliseconds
          document.cookie = `userName=${
            data.data.userName
          }; path=/; expires=${expiryDate.toUTCString()} `;
          document.cookie = `password=${
            data.data.password
          }; path=/; expires=${expiryDate.toUTCString()} `;
          dispatch(setuser(data.data));
          setAuthenticated(true);
          navigate("/");
          dispatch(setInitialLoading(false));
        } else {
          window.alert(`${data.message}`);
        }
      })
      .catch((err) => {
        window.alert("fetching failed,check your internet connection");
        console.log(err);
      });
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
          <h5>Click here to login</h5>
          <div>
            <label htmlFor=""></label>
            <input
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
            />
          </div>
          <div>
            <label htmlFor=""></label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>
          click her for{" "}
          <Link to={"/signup"}>
            <span style={{ color: "green", cursor: "pointer", scale: 1.5 }}>
              signup
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
