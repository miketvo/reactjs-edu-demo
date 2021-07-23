const DrinkDisplay = ({ drink }) => {
  switch (drink) {
    case "Milk":
      return <>🥛</>;
    case "Juice":
      return <>🧃</>;
    case "Coffee":
      return <>☕</>;
    case "Tea":
      return <>🍵</>;
    case "Soda":
      return <>🥤</>;
    case "Beer":
      return <>🍺</>;
    case "Wine":
      return <>🍷</>;
    case "Champagne":
      return <>🥂</>;
    case "Sake":
      return <>🍶</>;
    case "Cocktail":
      return <>🍸</>;
    case "Liquor":
      return <>🥃</>;
    default:
      return <>Please select a drink</>;
  }
};

export default DrinkDisplay;
