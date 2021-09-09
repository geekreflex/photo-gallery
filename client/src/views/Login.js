import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearError, loginUserAsync } from '../redux/userSlice';
import Error from '../components/Error';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, []);

  const handleLoginSubmit = (event) => {
    event.preventDefault();

    const payload = {
      email,
      password,
    };

    dispatch(loginUserAsync(payload));
  };

  return (
    <div className="form-page">
      <div className="form-wrap">
        <h1>Sign In</h1>
        <form onSubmit={handleLoginSubmit}>
          <div className="input-wrap">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrap">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Error />
          <button type="submit" className="btn form-btn">
            Sign In
          </button>
        </form>
        <div>
          <p>
            Already a member? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
