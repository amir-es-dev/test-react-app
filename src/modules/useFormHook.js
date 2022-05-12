import { useState } from "react";

const useForm = (initialData) => {
  const [data, setData] = useState(initialData);

  const handleChange = (key, CB) => (e) => {
    const val = e.target.value;
    if (!CB || CB(val)) {
      setData({ ...data, [key]: val });
    }
  };

  const resetForm = () => {
    setData(initialData);
  };

  return [data, handleChange, resetForm];
};

export default useForm;
