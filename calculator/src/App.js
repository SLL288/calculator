import React, {useState} from "react";
import CalculatorFormSli11 from "./Components/CalculatorFormSli11/CalculatorFormSli11.js";



function App() {

  const [equation, setEquation] = useState({});

  function updateEquation(e){
    setEquation({
      ...equation,
      [e.target.id] : e.target.value
    })
  }


  function doOperation(){
    switch(equation.operation){
      case "add":
        console.log("Result: " + (parseFloat(equation.operand1) + parseFloat(equation.operand2)))
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
    </div>
  );
}

export default App;
