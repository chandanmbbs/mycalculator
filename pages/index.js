import React, { useState } from 'react';

export default function Calculator() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  //checking

  const clear = () => {
    setResult("");
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  const calculateSin = () => {
    try {
      setResult(Math.sin(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  const calculateCos = () => {
    try {
      setResult(Math.cos(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  const calculateTan = () => {
    try {
      setResult(Math.tan(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  const calculatePercentage = () => {
    try {
      setResult((result / 100).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  const calculateLog = () => {
    try {
      setResult(Math.log(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  const calculateSqrt = () => {
    try {
      setResult(Math.sqrt(result).toString());
    } catch(err) {
      setResult("Error")
    }
  }

  return (
    <div>
      <div>
        <input type="text" value={result} />
      </div>
      <div>
        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>
      </div>
      <div>
        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>
      </div>
      <div>
        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>*</button>
      </div>
      <div>
        <button name="." onClick={handleClick}>.</button>
        <button name="0" onClick={handleClick}>0</button>
        <button onClick={clear} id="clear">Clearrr</button>
        <button name="/" onClick={handleClick}>/</button>
      </div>
      <div>
        <button onClick={calculateSin} id="sin">Sin</button>
        <button onClick={calculateCos} id="cos">Cos</button>
        <button onClick={calculateTan} id="cot">Tann</button>
        <button onClick={calculatePercentage} id="percentage">%</button>
        <button onClick={calculateLog} id="log">Log</button>
        <button onClick={calculateSqrt} id="sqrt">Sqrt</button>
      </div>
      <div>
        <button onClick={calculate} id="result">Result</button>
      </div>
    </div>
  )
}


