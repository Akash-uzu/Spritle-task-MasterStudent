import React, { useState } from "react";
import Logout from "../../components/logout/Logout.js";
import "./master.css";
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
        <div className="main-output-wrapper">
          <div className="heading1">
            <h1>Masters Page</h1>
          </div>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="heading">
              <h2>To the Students</h2>
            </div>
            <input type="text" value={input} onChange={handleInputChange} />
            <button type="submit">Send</button>
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
          <div className="logout">
          <Logout />
        </div>
        </div>

        
      </div>
    </>
  );
}

export default MastersPage;
