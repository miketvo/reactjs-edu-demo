// Library
import { useState } from "react";

// Components
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SwitchDisplay from "./components/SwitchDisplay";
import Counter from "./components/Counter";
import DrinkSelector from "./components/DrinkSelector";
import DrinkDisplay from "./components/DrinkDisplay";
import List from "./components/List";

// Styles
import style from "./App.module.css";

function App() {
  const links = [
    {
      href: "https://reactjs.org/",
      name: "ReactJS",
    },
    {
      href: "https://reactjs.org/docs/getting-started.html",
      name: "Documentations",
    },
  ];

  let [isAwake, setAwake] = useState(true);
  let [count, setCount] = useState(0);
  let [drink, setDrink] = useState("");

  return (
    <div className={style["app"]}>
      <Header title="A ReactJS Application">
        <Nav links={links} />
      </Header>

      <Jumbotron
        title="Hello World"
        subtitle="I'm a lightning fast application built with ReactJS using create-react-app and styled with Bootstrap"
      />
      <main className={style["main"]}>
        <LoginForm />
        <section>
          <h2>Example: Passing data from parent element to child element</h2>
          <p>Just pass it into the child element as a prop</p>
          <SwitchDisplay
            value={isAwake}
            className="container justify-content-center align-items-center"
          />
          <button
            className="btn btn-light mx-1 my-3"
            onClick={() => {
              setAwake(true);
            }}
          >
            Wake up!
          </button>
          <button
            className="btn btn-dark mx-1 my-3"
            onClick={() => {
              setAwake(false);
            }}
          >
            Good night
          </button>
        </section>

        <section>
          <h2>Example: Passing data from child element to parent element</h2>
          <p>Use a callback function</p>
          <div>Count: {count}</div>
          <Counter count={count} callback={setCount} />
        </section>

        <section>
          <h2>Example: Passing data between siblings element</h2>
          <p>Combine the two methods above</p>
          <DrinkDisplay drink={drink} />
          <DrinkSelector callback={setDrink} />
        </section>

        <section>
          <h2>Advanced example: retrieve data from a REST API</h2>
          <p>
            Use <code>fetch()</code>
          </p>
          <List />
        </section>
      </main>
    </div>
  );
}

export default App;
