
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
      {listeName.map((element) => (
        <div>
          <h1>{element.name}</h1>
          <Button />
        </div>
      ))}
    </div>
  );
}

export default App;
