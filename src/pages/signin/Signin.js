import axios from "axios";
import React, { useState } from "react";
import "./Signin.css";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hanlde Click
  const handleClick = async () => {
    try {
      const signedIn = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );
      console.log(signedIn);
    } catch (err) {
      console.log(err.response.data);
      alert(err.response.data);
    }
  };

  return (
    <div className="signin">
      {/* Left Section of the page */}
      <div className="left">
        {/* Facebook logo */}
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="Facebook logo"
        />
        <p>
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      {/* Right Section of the page */}
      <div className="right">
        {/* Form Container */}
        <div className="form__container">
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address or phone number"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <button className="loginBtn" onClick={handleClick}>
            Log In
          </button>
          <a href="#">Forgotton Password?</a>
          <div className="line"></div>
          <button className="createBtn">Create New Account</button>
        </div>
        <p>
          <b>Create a Page </b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}

export default Signin;
