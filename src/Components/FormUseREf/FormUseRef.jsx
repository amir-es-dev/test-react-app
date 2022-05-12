import { useRef, useState } from "react";
import useForm from "../../modules/useFormHook";
import styles from "./FormUseRef.module.css";

const FormUseRef = () => {
  const [d, hc] = useForm({ email: "", password: "" });
  const inputRef = useRef();
  const [valid, setValid] = useState({
    email: true,
    password: true,
  });

  console.log("hi", d);

  const checkValidation = () => {
    let isEmailValid = true;
    let isPasswordValid = true;

    if (
      !d.email.includes("@") ||
      !d.email.includes(".com") ||
      !d.email.length
    ) {
      isEmailValid = false;
    }

    if (d.password.length < 8) {
      isPasswordValid = false;
    }

    setValid({ email: isEmailValid, password: isPasswordValid });

    if (isEmailValid && isPasswordValid) {
      setTimeout(() => {
        alert("OKKKKKK");
      }, 0);
    }
  };

  const handleClick = () => {
    console.log(inputRef, inputRef.current.value);
  };

  return (
    <div>
      <form>
        <h4>Email</h4>
        <input type="email" value={d.email} onChange={hc("email")} />
        {!valid.email && (
          <p className={styles.redText}>Email Moshkel dare lamasab.</p>
        )}
        <h4>Password</h4>
        <input
          type="password"
          value={d.password}
          onChange={hc("password", (input) => {
            return input.length <= 16;
          })}
        />
        {!valid.password && (
          <p className={styles.redText}>Password Moshkel dare lamasab.</p>
        )}
      </form>
      <button onClick={checkValidation}>Submit</button>
      <div>
        <h4>useRef check</h4>
        <input ref={inputRef} />
        <button onClick={handleClick}>submit</button>
      </div>
    </div>
  );
};

export default FormUseRef;
