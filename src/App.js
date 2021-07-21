import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Nav from "./components/Nav";
import LoginForm from "./components/LoginForm";
import Decrease from "./components/Decrease";
import Exponential from "./components/Exponential";
import "./App.css";

function App() {
  let links = [
    {
      href: "https://reactjs.org/",
      name: "ReactJS",
    },
    {
      href: "https://www.gatsbyjs.com/",
      name: "GatsbyJS",
    },
  ];

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
    </div>
  );
}

export default App;
