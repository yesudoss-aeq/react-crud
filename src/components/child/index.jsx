import React, { useEffect } from "react";

const Child = React.memo(({ callback }) => {
  console.log("child rendering");
  useEffect(() => {
    console.log("triggerd");
    callback();
  }, [callback]);
  return <div>Child</div>;
});

export default Child;
