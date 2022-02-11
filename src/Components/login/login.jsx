import React from "react";
import { useState } from "react";
import "./login.styles.scss";

export default function Login() {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    retype: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    retype: "",
  });

  const { email, password, retype } = info;

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
    alert("Login succesfully");
  };

  return (
    <div className="login">
      <h1>Already have an account?</h1>
      <form className="login-form" onSubmit={handleSubmit} noValidate>
        <div className="login-email">
          <label className="email-label">
            <p className="labels">Email Address</p>
            <input
              className={errors.email ? "hasErrors" : "inputs"}
              onChange={handleChange}
              value={email}
              type="email"
              name="email"
              placeholder="e.g John@your-domain.com"
            ></input>
            <div className="errors">{errors.email}</div>
          </label>
        </div>

        <div>
          <label className="password">
            <p className="labels">Password</p>
            <input
              className={errors.password ? "hasErrors" : "inputs"}
              onChange={handleChange}
              value={password}
              type="password"
              name="password"
              //   value="fName"
              placeholder="Your Password"
            ></input>
            <div className="errors">{errors.password}</div>
          </label>
        </div>
        <div>
          <label className="password">
            <p className="labels">Re-type Password</p>
            <input
              className={errors.retype ? "hasErrors" : "inputs"}
              onChange={handleChange}
              value={retype}
              type="password"
              name="retype"
              //   value="fName"
              placeholder="Your Password"
            ></input>
            <div className="errors">{errors.retype}</div>
          </label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
