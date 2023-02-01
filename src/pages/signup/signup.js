import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emailRegex } from "../utli/regex";
import "./signup.css";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Master");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const roleHandler = (event) => {
    console.log(event.target.value);
    setRole(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "" || password === "" || email === "") {
      setErrorMessage("Username and password cannot be empty");
      return;
    }
    if (password.length < 3) {
      setErrorMessage("Password must be at least 8 characters");
      return;
    }
    if (email.match(emailRegex)) {
      setErrorMessage("Enter a valid Email");
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ username, password, email, role });
    localStorage.setItem("users", JSON.stringify(users));
    setErrorMessage("");
    setUsername("");
    setPassword("");
    setEmail("");
    setTimeout(() => {
      navigate("/login");
    }, 500);
  };

  return (
    <div className="main-container">
      <form className="signup-container" onSubmit={handleSubmit}>
        <h2>Sign-up</h2>
        <div className="input-form">
          <input
            
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="input-form">
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-form">
          <select name="" id="role" onChange={roleHandler}>
            <option value="Master">Master</option>
            <option value="Student">Student</option>
          </select>
        </div>

        <div className="input-form">
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="error">{errorMessage}</div>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;
