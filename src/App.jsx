import { data } from "./data";
import "./App.css";
import Card from "./Card";

function App() {
  return (
    <main>
      {data.map((el, i) => (
        <Card key={i} {...el} />
      ))}
    </main>
  );
}

export default App;
