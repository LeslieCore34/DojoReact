
import "./App.css";
import Button from "./components/Button";

const listeName = [
  {
    name: "Lili",
    review: "",
  },
  {
    name: "Dada",
    review: "",
  },
  {
    name: "Lele",
    review: "",
  },
  {
    name: "Nana",
    review: "",
  },
];

function App() {
  return (
    <div>
      <h1>Did you like React ?</h1>
      {listeName.map((element, index) => (
        <div key={index}>
          <h2>{element.name}</h2>
          <Button />
        </div>
      ))}
    </div>
  );
}

export default App;
