import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setAdmin }) => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@admin.com" && code === "admin") {
      // Set isAdmin flag in local storage and state
      localStorage.setItem("isAdmin", "true");
      setAdmin(true);
      // Redirect to home page
      navigate("/");
    } else {
      // Handle incorrect email or code
      alert("Incorrect email or code");
    }
  };

  return (
    <div className="login-section">
      <form className="login-form-wrapper" onSubmit={handleSubmit}>
        <div className="login-form-header cinzel-decorative-bold">
          Hi, gorgeous
        </div>
        <div className="form-inputs-wrapper">
          <label htmlFor="login-email">email</label>
          <input
            type="email"
            id="login-email"
            className="form-input"
            autoComplete="false"
            placeholder="Please provide the email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="login-code">password</label>
          <input
            type="password"
            id="login-code"
            className="form-input"
            placeholder="Please provide the code from the invite"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="login-window-footer">
          <button type="submit" className="button primary-button">
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
