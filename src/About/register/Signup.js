import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validation
      if (!name.trim() || !email.trim() || !password.trim()) {
        alert("All fields are required");
        return;
      }


      // Make API call to register user only if validation passes
      await axios.post('http://localhost:5001/student', {
        name: name.trim(),
        email: email.trim(),
        password: password.trim(),
      });

      // Reset input fields
      setName("");
      setEmail("");
      setPassword("");

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
    } catch (error) {
      // Handle error response
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2 style={{ fontFamily: "cursive" }}>Dr.Deol <br></br> Homeopathy</h2>
        <form onSubmit={handleSubmit}>
          <div className="user-box">
            <input
              type="text"
              name=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Username</label>
          </div>
          <div className="user-box">
            <input
              type="email"
              name=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button type="submit" className="login-button">
          
            <span></span>
            <span></span>
            <span></span>
            <span></span>
           Submit
          </button>

          <p className='agreeCheckbox' style={{ marginTop: '10px' ,color: '#fff', fontFamily: "cursive"}}>
            <input
              type="checkbox"
              id="agreeCheckbox"
            />
            I agree to the terms and conditions.
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
