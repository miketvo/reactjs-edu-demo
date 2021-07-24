const SwitchDisplay = ({ value, className }) => {
  return (
    <div className={className} style={{ fontSize: "2rem" }}>
      {value ? <div>😃</div> : <div>😴</div>}
    </div>
  );
};

export default SwitchDisplay;
