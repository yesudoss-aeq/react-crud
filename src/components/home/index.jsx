import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const userData = useSelector((state) => state.user.userData);

  return (
    <div>
      <div>
        welcome{" "}
        <span style={{ fontSize: "20px ", color: "#4d7d3b" }}>
          {userData.userName}
        </span>
      </div>
    </div>
  );
};

export default Home;
