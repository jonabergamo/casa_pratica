import { useState } from "react";
import "./App.css";
import Key from "./components/Key/Key";

function App() {
  const [display, setDisplay] = useState("0");

  const handleKeyClick = (value) => {
    if (display === "0" && value !== ".") {
      setDisplay(value);
      return;
    }
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const computeValues = () => {
    try {
      setDisplay(eval(display).toString());
    } catch (error) {
      setDisplay("Erro");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <h1>{display}</h1>
        </div>
        <div className="keycaps">
          <Key value="0" onClick={handleKeyClick} />
          <Key value="1" onClick={handleKeyClick} />
          <Key value="2" onClick={handleKeyClick} />
          <Key value="3" onClick={handleKeyClick} />
          <Key value="4" onClick={handleKeyClick} />
          <Key value="5" onClick={handleKeyClick} />
          <Key value="6" onClick={handleKeyClick} />
          <Key value="7" onClick={handleKeyClick} />
          <Key value="8" onClick={handleKeyClick} />
          <Key value="9" onClick={handleKeyClick} />
          <Key value="*" onClick={handleKeyClick} />
          <Key value="/" onClick={handleKeyClick} />
          <Key value="-" onClick={handleKeyClick} />
          <Key value="+" onClick={handleKeyClick} />
          <Key value="=" onClick={computeValues} />
          <Key value="." onClick={handleKeyClick} />
          <Key
            value="C"
            onClick={() => {
              setDisplay("0");
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
