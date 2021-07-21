import { useState, useEffect } from "react";

const Decrease = ({ initialCount }) => {
  let [count, setCount] = useState(initialCount);

  useEffect(() => {
    document.title = `Count = ${count}`;
  });

  return (
    <button
      onClick={() => {
        setCount(count - 1);
      }}
    >
      Decrease
    </button>
  );
};

export default Decrease;
