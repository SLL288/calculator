import React, {useState} from "react";
import CalculatorFormSli11 from "./Components/CalculatorFormSli11/CalculatorFormSli11.js";

import ResultDisplaySli11 from "./Components/ResultDisplaySli11/ResultDisplaySli11.js";


function App() {

  const [equation, setEquation] = useState({});
  const [result, setResult] = useState(0);

  function updateEquation(e){
    setEquation({
      ...equation,
      [e.target.id] : e.target.value
    })
  }


  function doOperation(){
    switch(equation.operation){
      case "add":
        setResult(parseFloat(equation.operand1) + parseFloat(equation.operand2));
        console.log("Result: " + result)
        break;
      default:
        console.log("Sorry we dont have that operation");
        break;
    }
  }



  return (
    <div className="App">
      <h1>Shaolun's Calculator</h1>
      <CalculatorFormSli11 action={doOperation} update={updateEquation}/>
      <ResultDisplaySli11 result={result}/>
    </div>
  );
}

export default App;
