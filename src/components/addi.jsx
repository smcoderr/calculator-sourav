import { useState } from "react";
import "./Calculator.css"; // Importing the CSS file
import backgroundVideo from "./bg.mp4"; // Import your video file

function ScientificCalculator() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e, setInput) => {
    setInput(e.target.value);
  };

  const handleOperation = (operation) => {
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let calculatedResult = "";

    if (!isNaN(num1) && !isNaN(num2)) {
      switch (operation) {
        case "+":
          calculatedResult = num1 + num2;
          break;
        case "-":
          calculatedResult = num1 - num2;
          break;
        case "*":
          calculatedResult = num1 * num2;
          break;
        case "/":
          calculatedResult = num1 / num2;
          break;
        case "^":
          calculatedResult = Math.pow(num1, num2);
          break;
        default:
          break;
      }
      setResult(`Result: ${calculatedResult}`);
    }
  };

  const handleClear = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div className="calculator-container">
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="calculator-content">
        <div className="calculator">
          <label>
            Input 1:
            <input type="text" value={input1} onChange={(e) => handleInputChange(e, setInput1)} />
          </label>
          <br />
          <label>
            Input 2:
            <input type="text" value={input2} onChange={(e) => handleInputChange(e, setInput2)} />
          </label>
          <br />
          <button className="operation-btn" onClick={() => handleOperation("+")}>+</button>
          <button className="operation-btn" onClick={() => handleOperation("-")}>-</button>
          <button className="operation-btn" onClick={() => handleOperation("*")}>*</button>
          <button className="operation-btn" onClick={() => handleOperation("/")}>/</button>
          <button className="operation-btn" onClick={() => handleOperation("^")}>^</button>
          <button className="clear-btn" onClick={handleClear}>Clear</button>
          <br />
          <div className="result">{result}</div>
        </div>
      </div>
    </div>
  );
}

export default ScientificCalculator;
