import { useState } from "react";

const useForm = (initialData) => {
  const [data, setData] = useState(initialData);

  const handleChange = (key) => (e) => {
    const val = e.target.value;
    setData({ ...data, [key]: val });
  };

  const resetForm = () => {
    setData(initialData);
  };

  return [data, handleChange, resetForm];
};

const MyHook = () => {
  const [d, hc, rs] = useForm({ username: "", password: "" });
  console.log(d);
  console.log("form rendereds");
  return (
    <div>
      <form>
        <h4>Username</h4>
        <input
          type="text"
          value={d.username}
          onChange={(e) => hc("username")(e)}
        />
        <h4>Password</h4>
        <input type="password" value={d.password} onChange={hc("password")} />
      </form>
      <button onClick={rs}>Reset</button>
    </div>
  );
};

export default MyHook;
