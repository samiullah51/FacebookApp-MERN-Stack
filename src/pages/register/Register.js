import React from "react";
import { data } from "./data";
import "./Register.css";
function Register() {
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
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Sure name" />
          </div>
          {/* Group 2 */}
          <div className="group2">
            <input type="text" placeholder="Mobile number or email address" />
            <input type="password" placeholder="New password" />
          </div>
          {/* Group 3 */}
          <div className="group3">
            <p>Date of Birth</p>
            <div className="selection">
              {/* Day */}
              <select>
                {data.days.map((day) => (
                  <option>{day}</option>
                ))}
              </select>
              {/* Month */}
              <select>
                {data.months.map((month) => (
                  <option>{month}</option>
                ))}
              </select>
              {/* Year */}
              <select>
                {data.years.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>
          {/* Group 4*/}
          <div className="group4">
            <p>Gender</p>
            <div className="selection">
              <div className="select">
                <input type="radio" id="male" name="gender" value="Male" />
                <label for="male">Male</label>
              </div>
              <div className="select">
                <input type="radio" id="female" name="gender" value="Female" />
                <label for="female">Female</label>
              </div>
              <div className="select">
                <input type="radio" id="custom" name="gender" value="Custom" />
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
          <button>Sign Up</button>
        </div>
        <p className="dismiss">&times;</p>
      </div>
    </div>
  );
}

export default Register;
