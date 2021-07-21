import "./App.css";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";
import Nav from "./components/Nav";

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
    </div>
  );
}

export default App;
