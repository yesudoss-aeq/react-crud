import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import Login from "./components/login";
import { useEffect, useState } from "react";
import ValueProvider from "./components/provider";
import Signup from "./components/signup";
import { useDispatch, useSelector } from "react-redux";
import {
  setInitialLoading,
  setuser,
} from "./components/store/slices/userSlice";
import { RingLoader } from "react-spinners";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const loading = useSelector((state) => state.user.initialLoading);

  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  useEffect(() => {
    const data = { userName: user, password: key };
    fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/info/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.login) {
          dispatch(setuser(data.data));
          setAuthenticated(true);
          navigate("/");
          dispatch(setInitialLoading(false));
        } else {
          navigate("/login");
          dispatch(setInitialLoading(false));
        }
      })
      .catch((err) => {
        setTimeout(() => {
          dispatch(setInitialLoading(false));
        }, 5000);
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100vw",
        }}
      >
        <RingLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <ValueProvider>
      <div>
        {!authenticated ? (
          <Routes>
            <Route
              path="login"
              element={<Login setAuthenticated={setAuthenticated} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/*" element={<Navigate to={"/login"} />} />
          </Routes>
        ) : (
          <Layout />
        )}
      </div>
    </ValueProvider>
  );
}

export default App;
