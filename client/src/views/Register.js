import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Error from '../components/Error';
import { registerUserAsync, clearError } from '../redux/userSlice';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    const payload = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(registerUserAsync(payload));
  };

  return (
    <div className="form-page">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <form onSubmit={handleRegisterSubmit}>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="First Name*"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Last Name*"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Email*"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-wrap">
            <input
              type="text"
              placeholder="Password*"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Error />
          <button type="submit" className="btn form-btn">
            Sign Up
          </button>
        </form>
        <div>
          <p>
            Already a member? <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
