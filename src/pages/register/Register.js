import axios from "axios";
import React, { useState } from "react";
import { data } from "./data";
import "./Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirtName] = useState("");
  const [sureName, setSureName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  let navigate = useNavigate();

  // handle Submit
  const handleSubmit = async () => {
    try {
      const newUser = await axios.post(
        "http://localhost:8000/api/user/register",
        {
          firstName,
          sureName,
          email,
          password,
          dob,
          gender,
        }
      );
      console.log(newUser);
      navigate("/signin", { replace: true });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <div className="register">
      <div className="overlay"></div>
      <div className="register__form">
        {/* header */}
        <div className="form__header">
          <h1>Sign Up</h1>
          <p>It's quick and easy.</p>
        </div>
        {/* body */}
        <div className="line"></div>
        <div className="form__body">
          {/* Group1 */}
          <div className="group1">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirtName(e.target.value)}
              placeholder="First name"
            />
            <input
              type="text"
              value={sureName}
              onChange={(e) => setSureName(e.target.value)}
              placeholder="Sure name"
            />
          </div>
          {/* Group 2 */}
          <div className="group2">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Mobile number or email address"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New password"
            />
          </div>
          {/* Group 3 */}
          <div className="group3">
            <p>Date of Birth</p>
            <div className="selection">
              {/* Day */}
              <select onChange={(e) => setDob(e.target.value)}>
                {data.days.map((day) => (
                  <option>{day}</option>
                ))}
              </select>
              {/* Month */}
              <select onChange={(e) => setDob(dob + "-" + e.target.value)}>
                {data.months.map((month) => (
                  <option>{month}</option>
                ))}
              </select>
              {/* Year */}
              <select onChange={(e) => setDob(dob + "-" + e.target.value)}>
                {data.years.map((year) => (
                  <option value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Group 4*/}
          <div className="group4">
            <p>Gender</p>
            <div className="selection">
              <div className="select">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="male">Male</label>
              </div>
              <div className="select">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="female">Female</label>
              </div>
              <div className="select">
                <input
                  type="radio"
                  id="custom"
                  name="gender"
                  value="Custom"
                  onChange={(e) => setGender(e.target.value)}
                />
                <label for="custom">Custom</label>
              </div>
            </div>
          </div>
          {/* Content for Privacy */}
          <div className="privacy__content">
            <p>
              People who use our service may have uploaded your contact
              information to Facebook. <span>Learn more</span>.
            </p>
            <p>
              By clicking Sign Up, you agree to our{" "}
              <span> Terms, Privacy Policy </span> and
              <span> Cookies Policy </span>. You may receive SMS notifications
              from us and can opt out at any time.
            </p>
          </div>
          <button onClick={handleSubmit}>Sign Up</button>
        </div>
        <p className="dismiss">&times;</p>
      </div>
    </div>
  );
}

export default Register;
