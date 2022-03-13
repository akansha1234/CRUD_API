import React, { useState } from "react";
import "./Login.css";
const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // To handle the submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
    if (password.match(decimal)) {
      setUser(email);
    } else {
      alert(
        "Please enter password of length greater than 6 which have atleast one uppercase letter,numbers and a special character"
      );
      return false;
    }
  };

  // To check the password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className="signin-form">
      <h1>
        Sign in to Twitter <i className="fa fa-twitter"></i>
      </h1>
      <div className="fields">
        <label className="label">Email: </label>
        <input
          type="email"
          placeholder="Enter your email...."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="fields">
        <label className="label">Password: </label>
        <input
          type="password"
          placeholder="Enter your password...."
          value={password}
          onChange={handlePassword}
          required
        />
      </div>
      <button type="submit" className="signin-btn">
        Sign In
      </button>
    </form>
  );
};

export default Login;
