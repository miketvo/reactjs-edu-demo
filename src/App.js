import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import Decrease from "./components/Decrease";
import Exponential from "./components/Exponential";
import useOnline from "./hooks/useOnline";
import "./App.css";

function App() {
  const links = [
    {
      href: "https://reactjs.org/",
      name: "ReactJS",
    },
    {
      href: "https://www.gatsbyjs.com/",
      name: "GatsbyJS",
    },
  ];

  const online = useOnline();

  return (
    <div className="App">
      <Header title="Mike Vo">
        <Nav links={links} />
      </Header>
      <Jumbotron
        title="Hello World"
        subtitle="This is my first ReactJS application"
      />
      <LoginForm />
      {/*<Decrease initialCount={0} />*/}
      <Exponential initialCount={1} />
      <div>
        {online
          ? "App is connected to the internet"
          : "App is not connected to the internet"}
      </div>
    </div>
  );
}

export default App;
