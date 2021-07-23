const Counter = ({ count, callback }) => (
  <div>
    <button
      onClick={() => {
        callback(count - 1);
      }}
    >
      Decrease
    </button>
    <button
      onClick={() => {
        callback(count + 1);
      }}
    >
      Increase
    </button>
    <button
      onClick={() => {
        callback(count * 2);
      }}
    >
      Exponential
    </button>
    <button
      onClick={() => {
        callback(0);
      }}
    >
      Reset
    </button>
  </div>
);

export default Counter;
