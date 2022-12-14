import axios from "axios";
import React, { useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOG_IN } from "../../redux/user/userActions";
function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  let navigate = useNavigate();

  // hanlde Click to login a registered user
  const handleClick = async () => {
    try {
      const signedIn = await axios.post(
        "http://localhost:8000/api/user/login",
        {
          email,
          password,
        }
      );
      dispatch({ type: LOG_IN, payload: signedIn.data });
      localStorage.setItem("user", JSON.stringify(signedIn.data));
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.response.data);
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
        {/* Error */}
        {error && <p className="error">{error}</p>}

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
          <button className="createBtn" onClick={() => navigate("/register")}>
            Create New Account
          </button>
        </div>
        <p>
          <b>Create a Page </b> for a celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}

export default Signin;
