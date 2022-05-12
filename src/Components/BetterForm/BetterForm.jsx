import React, { useState } from "react";

const BetterForm = () => {
  const [data, setData] = useState({ username: "", password: "" });

  const handleChange = (key, e) => {
    const val = e.target.value;
    const newData = { ...data };
    newData[key] = val;
    setData(newData);
  };

  console.log(data);
  console.log("form rendered");
  return (
    <>
      <form>
        <h4>Username</h4>
        <input
          type="text"
          value={data.username}
          onChange={(e) => handleChange("username", e)}
        />
        <h4>Password</h4>
        <input
          type="password"
          value={data.password}
          onChange={(e) => handleChange("password", e)}
        />
      </form>
    </>
  );
};

export default BetterForm;
