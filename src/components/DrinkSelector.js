const DrinkSelector = ({ callback }) => (
  <div>
    <label htmlFor="favorite-drink-type">Choose a favorite type of drink</label>
    <select
      onChange={() => {
        callback(document.getElementById("favorite-drink-type").value);
      }}
      id="favorite-drink-type"
    >
      <option selected />
      <option>Milk</option>
      <option>Juice</option>
      <option>Coffee</option>
      <option>Tea</option>
      <option>Beer</option>
      <option>Wine</option>
      <option>Champagne</option>
      <option>Sake</option>
      <option>Cocktail</option>
      <option>Liquor</option>
    </select>
  </div>
);

export default DrinkSelector;
