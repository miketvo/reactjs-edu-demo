const DrinkSelector = ({ callback }) => (
  <div className="form-group row my-3 justify-content-center">
    <label htmlFor="favorite-drink-type" className="col-2 col-form-label">
      Choose a favorite type of drink
    </label>
    <div className="col-5">
      <select
        onChange={() => {
          callback(document.getElementById("favorite-drink-type").value);
        }}
        id="favorite-drink-type"
        className="form-control"
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
  </div>
);

export default DrinkSelector;
