import React, { useState } from "react";
import "./master.css";
import Header from "../../UI/header.js";
const {
  zero,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  plus,
  minus,
  times,
  divided_by,
} = require("../../calculations/Calculations.js");

function MastersPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [activityLog, setActivityLog] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the calculation
    if (input) {
      const value = () => {
        return eval(input);
      };
      try {
        let result = value();
        setActivityLog([...activityLog, { input, output: result }]);

        console.log(result);

        setOutput(result);
        setInput("");
        setError("");
      } catch {
        setError("Enter Valid Input");
      }
    } else {
      setError("Input should not be Empty");
    }
  };
  window.localStorage.setItem("activitylog", JSON.stringify(activityLog));

  return (
    <>
      <div className="main-container-master">
        <div>
          <Header />
        </div>
        <div className="main-output-wrapper">
          <form onSubmit={handleSubmit} className="form-container">
            <div className="heading">
              <h2>To the Students</h2>
            </div>
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Eg:six(times(seven()))"
            />
            <button type="submit">Send</button>
            <div className="examples">
              <h3>Examples:</h3>
              <li>seven(times(five())) # must return 35</li>
              <li>four(plus(nine())) # must return 13</li>
              <li> eight(minus(three())) # must return 5</li>
              <li> six(divided_by(two())) # must return 3</li>
            </div>
          </form>
          <div className="output-container">
            <h3>Calculated value: {output}</h3>
            <h3>Activity Log:</h3>
            {
              <ul>
                {activityLog.map((item, index) => (
                  <li key={index}>
                    Input: {item.input} - Calculated Value: {item.output}
                  </li>
                ))}
              </ul>
            }
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
}

export default MastersPage;
