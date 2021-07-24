const DrinkDisplay = ({ drink }) => {
  switch (drink) {
    case "Milk":
      return <div style={{ fontSize: "2rem" }}>🥛</div>;
    case "Juice":
      return <div style={{ fontSize: "2rem" }}>🧃</div>;
    case "Coffee":
      return <div style={{ fontSize: "2rem" }}>☕</div>;
    case "Tea":
      return <div style={{ fontSize: "2rem" }}>🍵</div>;
    case "Soda":
      return <div style={{ fontSize: "2rem" }}>🥤</div>;
    case "Beer":
      return <div style={{ fontSize: "2rem" }}>🍺</div>;
    case "Wine":
      return <div style={{ fontSize: "2rem" }}>🍷</div>;
    case "Champagne":
      return <div style={{ fontSize: "2rem" }}>🥂</div>;
    case "Sake":
      return <div style={{ fontSize: "2rem" }}>🍶</div>;
    case "Cocktail":
      return <div style={{ fontSize: "2rem" }}>🍸</div>;
    case "Liquor":
      return <div style={{ fontSize: "2rem" }}>🥃</div>;
    default:
      return <>Please select a drink</>;
  }
};

export default DrinkDisplay;
