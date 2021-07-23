import { useState, useEffect } from "react";

const List = () => {
  const endPoint =
    "https://2u7k88arxk.execute-api.us-east-2.amazonaws.com/items";
  const [data, setData] = useState([]);

  //get data from api
  const load = () => {
    fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        setData(data.Items);
      });
  };

  //load data automatically
  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <p>
        Application must be connected to the internet to work. Endpoint:{" "}
        <a href={endPoint}>{endPoint}</a>
      </p>
      <ul>
        {data.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
