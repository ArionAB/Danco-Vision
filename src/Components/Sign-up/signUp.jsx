import React from "react";
import { useState } from "react";

import "./signUp.styles.scss";

export default function SignUp() {
  const [agree, setAgree] = useState(false);
  const [info, setInfo] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    website: "",
    password: "",
    retype: "",
  });

  const [errors, setErrors] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    website: "",
    password: "",
    retype: "",
  });

  const { fName, lName, email, phone, website, password, retype } = info;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({ ...info, [name]: value });

    const newErrors = { ...errors };
    newErrors[name] = "";
    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    let newErrors = { ...errors };

    if (!fName) {
      hasErrors = true;
      newErrors.fName = "Please add your first name";
    }
    if (!lName) {
      hasErrors = true;
      newErrors.lName = "Please add your last name";
    }

    if (!email) {
      hasErrors = true;
      newErrors.email = "Please add your email address";
    }

    if (email && !email.includes("@")) {
      hasErrors = true;
      newErrors.email = "Email address must contain '@'";
    }
    if (email && email.includes("@") && !email.includes(".")) {
      hasErrors = true;
      newErrors.email = "Email address must contain '.'";
    }

    if (!phone) {
      hasErrors = true;
      newErrors.phone = "Please add phone number";
    }

    if (phone && phone.length < 10) {
      hasErrors = true;
      newErrors.phone = "Phone number must have 10 digits";
    }

    if (!website) {
      hasErrors = true;
      newErrors.website = "Please add your website";
    }

    if (website && !website.includes("http")) {
      hasErrors = true;
      newErrors.website = "URL should start with 'http'";
    }

    if (!password) {
      hasErrors = true;
      newErrors.password = "Please add a password";
    }

    if (password && password.length < 6) {
      hasErrors = true;
      newErrors.password = "Password must be at least 6 characters";
    }
    if (!retype) {
      hasErrors = true;
      newErrors.retype = "Please add a password";
    }

    if (retype && retype.length < 6) {
      hasErrors = true;
      newErrors.retype = "Password must be at least 6 characters";
    }

    if (password !== retype) {
      hasErrors = true;
      newErrors.retype = "Passwords don't match";
    }

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }
    alert("form has been sent");
  };

  const Agree = () => {
    setAgree(!agree);
  };

  return (
    <div className="register">
      <div>
        <h1>Register</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </div>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="first-last">
          <div className="same">
            <label className="column">
              <p>First name</p>
              <input
                type="text"
                name="fName"
                value={fName}
                onChange={handleChange}
                placeholder="e.g. John"
                className={errors.fName ? "hasErrors" : "inputs"}
              ></input>
              <div className="error">{errors.fName}</div>
            </label>
          </div>
          <div className="same">
            <label className="column">
              <p>Last name</p>
              <input
                className={errors.lName ? "hasErrors" : "inputs"}
                type="text"
                name="lName"
                value={lName}
                onChange={handleChange}
                placeholder="e.g. Cena"
              ></input>
              <div>{errors.lName}</div>
            </label>
          </div>
        </div>
        <div className="email">
          <label className="column">
            <p>Email Address</p>
            <input
              className={errors.email ? "email-hasErrors" : "email-input"}
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="e.g. John@your-domain.com"
            ></input>
            <div>{errors.email}</div>
          </label>
        </div>

        <div className="phone-web">
          {" "}
          <div className="same">
            <label className="column">
              <p>Phone name</p>
              <input
                className={errors.phone ? "hasErrors" : "inputs"}
                type="number"
                name="phone"
                value={phone}
                onChange={handleChange}
                placeholder="0741 680 054"
              ></input>
              <div>{errors.phone}</div>
            </label>
          </div>
          <div className="same">
            <label className="column">
              <p>Website</p>
              <input
                className={errors.website ? "hasErrors" : "inputs"}
                type="url"
                name="website"
                value={website}
                onChange={handleChange}
                placeholder="e.g www.google.com"
              ></input>
              <div>{errors.website}</div>
            </label>
          </div>
        </div>

        <div className="pass">
          <div className="same">
            <label className="column">
              <p>Password</p>
              <input
                className={errors.password ? "hasErrors" : "inputs"}
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                placeholder="Your Password"
              ></input>
              <div>{errors.password}</div>
            </label>
          </div>

          <div className="same">
            <label className="column">
              <p>Re-type Password</p>
              <input
                className={errors.retype ? "hasErrors" : "inputs"}
                type="password"
                name="retype"
                value={retype}
                onChange={handleChange}
                placeholder="Your Password"
              ></input>
              <div>{errors.retype}</div>
            </label>
          </div>
        </div>
        <div className="check">
          <input type="checkbox" onChange={Agree} />{" "}
          <p>
            I agree with the <a>Terms and Conditions</a> and{" "}
            <a>Privacy Policy</a>
          </p>
        </div>
        {agree ? (
          <button type="submit">Register</button>
        ) : (
          <div>You need to agree in order to Register</div>
        )}
      </form>
    </div>
  );
}
