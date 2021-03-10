import React from "react";

function CalculatorFormSli11(props){
    return(
        <div className="row">
            <div className="col-4">
                <label htmlFor="operand2" className="col-2 col-form--label">Operand 2</label>
                <input type="text" className="form-control-plaintext" id="operand1" onChange={props.update}/>
            </div>
            <div className="col-4">
            <select className="form-select" id="operation" onChange={props.update}>
                <option selected value="default">Please select an operation</option>
                <option value="add">+</option>
                <option value="minus">-</option>
            </select>
            </div>
            <div className="col-4">
                <label htmlFor="operand2" className="col-2 col-form--label">Operand 2</label>
                <input type="text" className="form-control-plaintext" id="operand2" onChange={props.update} />
            </div>
            <button onClick={props.action}>Go!</button>
        </div>
    )
}



export default CalculatorFormSli11;