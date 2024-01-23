import "./App.css";
import { Value } from "./components/counter/counter.jsx";
import { Filter } from "./components/filter/filter.jsx";

function App() {
  return (
    <>
      <h1>Counter</h1>
      <Value></Value>
      
      <Filter></Filter>
      <div className="test">
        <input list="names"></input>
        <datalist id="names">
          <option value="germany"></option>
          <option value="test"></option>
        </datalist>
      </div>
    </>
  );
}

export default App;
