// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();


  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    // Implement login logic here
    console.log('Login clicked');

    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="login-header">
          <span>Welcome</span> Back
        </h1>
        <p className="login-text">Welcome! Please login to continue.</p>

        <div className="input-group">
          <div>
            <label htmlFor="input-email" className="input-label">
              Usernama
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="input-field"
              id="input-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="password-container">
            <label htmlFor="input-pass" className="input-label">
              Password
            </label>
            <div className="password-container">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                required
                className="password-field"
                id="input-pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <i
                className={`ri-eye-${showPassword ? 'line' : 'off-line'} eye-icon`}
                id="input-icon"
                onClick={handleTogglePassword}
              ></i>
            </div>
          </div>
        </div>

        <div className="checkbox-container">
          <input
            type="checkbox"
            className="checkbox-input"
            id="input-check"
            checked={showPassword}
            onChange={handleTogglePassword}
          />
          <label htmlFor="input-check" className="checkbox-label">
            Show Password
          </label>
        </div>

        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
