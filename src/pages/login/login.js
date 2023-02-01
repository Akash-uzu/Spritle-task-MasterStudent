import React, { useState } from 'react';
import "./login.css"

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from local storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    // Validate user credentials
    if (!user) {
      setError('Incorrect username or password');
      return;
    }

    // Log in as master or student
    if (user.role === 'Master') {
      window.location.href = '/master';
      localStorage.setItem("role","master")
    } else if (user.role === 'Student') {
      window.location.href = '/student';
      localStorage.setItem("role","student")


    }
  };

  return (
    <div className='main-container'>

    <form onSubmit={handleSubmit} className="login-container">
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div className='input-form'>
      <input
      
      type="text"
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />
      </div>
      <div className="input-form">
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      </div>
      
      <button type="submit">Login</button>
    </form>
    </div>

  );
};

export default LoginPage;
