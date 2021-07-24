const Counter = ({ count, callback }) => (
  <div>
    <button
      onClick={() => {
        callback(count - 1);
      }}
      className="btn btn-outline-primary mx-1 my-3"
    >
      Decrease
    </button>
    <button
      onClick={() => {
        callback(count + 1);
      }}
      className="btn btn-outline-primary mx-1 my-3"
    >
      Increase
    </button>
    <button
      onClick={() => {
        callback(count * 2);
      }}
      className="btn btn-outline-primary mx-1 my-3"
    >
      Exponential
    </button>
    <button
      onClick={() => {
        callback(0);
      }}
      className="btn btn-primary mx-1 my-3"
    >
      Reset
    </button>
  </div>
);

export default Counter;
