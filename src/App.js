// Library
import { useState } from "react";

// Hooks
import useOnline from "./hooks/useOnline";

// Components
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import SwitchDisplay from "./components/SwitchDisplay";
import Counter from "./components/Counter";
import DrinkSelector from "./components/DrinkSelector";
import DrinkDisplay from "./components/DrinkDisplay";

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

  const online = useOnline();

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
        subtitle="This is my first ReactJS application"
      />
      <LoginForm />

      <main>
        <section>
          <h2>Example: Passing data from parent element to child element</h2>
          <p>Just pass it into the child element as a prop</p>
          <SwitchDisplay value={isAwake} />
          <button
            onClick={() => {
              setAwake(true);
            }}
          >
            Wake up!
          </button>
          <button
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
      </main>

      <div className={style["network-status"]}>
        {online ? (
          <div className={style["online"]}>
            App is connected to the internet
          </div>
        ) : (
          <div className={style["offline"]}>
            App is not connected to the internet
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
