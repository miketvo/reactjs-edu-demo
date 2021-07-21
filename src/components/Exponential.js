import { useState, useEffect } from "react";

const Exponential = ({ initialCount }) => {
  let [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `Count = ${count}`;
  });

  return (
    <button
      onClick={() => {
        setCount(count * 2);
      }}
    >
      Exponential
    </button>
  );
};

export default Exponential;
