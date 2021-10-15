import "./style.css"
import React, {useState} from "react"

function App() {
  const [result, setResult] = useState("")

  const enterDigit = (digit) => {
    setResult((prevState) => prevState + digit)
  }

  const cleareEverything = () => {
    setResult("")
  }

  const addition = () => {
    setResult((prevState) => prevState + "+")
  }

  const substraction = () => {
    setResult((prevState) => prevState + "-")
  }

  const division = () => {
    setResult((prevState) => prevState + "/")
  }

  const multiplication = () => {
    setResult((prevState) => prevState + "*")
  }

  const calculateResult = () => {
    //take result split it find operation and calcluate
    if (result.includes("+")) {
      const numbers = result.split("+")
      const transofmedArray = numbers.map((number) => Number(number))
      const additionResult = transofmedArray.reduce((a, b) => a + b)
      setResult(additionResult)
    } else if (result.includes("-")) {
      const numbers = result.split("-")
      const transofmedArray = numbers.map((number) => Number(number))
      const substractionResult = transofmedArray.reduce((a, b) => a - b)
      console.log(transofmedArray)
      console.log(substractionResult)
      setResult(substractionResult)
    } else if (result.includes("*")) {
      const numbers = result.split("*")
      const transofmedArray = numbers.map((number) => Number(number))
      const multiplicationResult = transofmedArray.reduce((a, b) => a * b)
      console.log(transofmedArray)
      console.log(multiplicationResult)
      setResult(multiplicationResult)
    } else if (result.includes("/")) {
      const numbers = result.split("/")
      const transofmedArray = numbers.map((number) => Number(number))
      const divisionResult = transofmedArray.reduce((a, b) => a / b)
      setResult(divisionResult)
    }
  }

  return (
    <div className='App'>
      <div>
        <input type='text' disabled className='calculation-screen' value={result} />
      </div>
      <div className='buttons'>
        {/* operations */}
        <button onClick={addition}>+</button>
        <button onClick={substraction}>-</button>
        <button onClick={multiplication}>*</button>
        <button onClick={division}>/</button>
        {/* digits */}
        <button onClick={() => enterDigit(1)}>1</button>
        <button onClick={() => enterDigit(2)}>2</button>
        <button onClick={() => enterDigit(3)}>3</button>
        <button onClick={() => enterDigit(4)}>4</button>
        <button onClick={() => enterDigit(5)}>5</button>
        <button onClick={() => enterDigit(6)}>6</button>
        <button onClick={() => enterDigit(7)}>7</button>
        <button onClick={() => enterDigit(8)}>8</button>
        <button onClick={() => enterDigit(9)}>9</button>
        <button onClick={() => enterDigit(0)}>0</button>
        {/*calculate result*/}
        <button onClick={calculateResult}>=</button>
        <button onClick={cleareEverything}>CE</button>
      </div>
    </div>
  )
}

export default App
