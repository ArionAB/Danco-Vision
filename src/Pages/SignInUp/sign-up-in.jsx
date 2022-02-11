import React from "react";

import "./sign-up-in.styles.scss";
import Login from "../../Components/login/login";
import SignUp from "../../Components/Sign-up/signUp";

export default function SignUpIn() {
  return (
    <div className="form-container">
      <SignUp />
      <Login />
    </div>
  );
}
