import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get("http://localhost:5001/student"); // Assuming your API endpoint is "/users"

      const users = response.data;
      const userLoginData = users.find(
        (user) => user.email === email && user.password === password
      );

      if (userLoginData) {
        alert("Login successful!");
     
        sessionStorage.setItem('token', "true");
        console.log(sessionStorage.getItem('token'));
        //navigate("/");

      } else {
        alert("Invalid email or password. Please try again.");

      }
    } catch (error) {

      console.error("Login error", error);
    }
  };

  return (
    <div className="login-page1">
      <div className="login-box">
        <h2 style={{ fontFamily: "cursive" }}>Dr.Deol <br></br>Homeopathy</h2>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input type="email" name="" value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <button type="submit" className="login-button" >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </button>
          <br />
          <p className='agreeCheckbox' style={{ marginTop: '10px' ,color: '#fff', fontFamily: "cursive"}}>
            Don't Have an Account?<Link to="/signup">Signup</Link> 
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
