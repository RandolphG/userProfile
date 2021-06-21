import { motion } from "framer-motion";
import React, { memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { signUpMotionSettings, slideOut } from "../motionSettings";

const Signup: React.FC = memo(() => {
  let history = useHistory();
  const [inputType, setInputType] = useState("password");

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  function handleSubmit(e: any) {
    e.preventDefault();
    fetch("http://localhost:4001/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((data) => data.user);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function showPassword() {
    setInputType(inputType === "text" ? "password" : "text");
  }

  const Terms = () => (
    <div className="terms">
      <label className="terms__label">
        <input className="terms__description" type="checkbox" /> Creating an
        account means you’re okay with our
        <a href="#">Terms of Service, Privacy Policy</a>, and our default{" "}
        <a href="#">Notification Settings</a>.
      </label>
    </div>
  );

  const GoogleSignUpButton = () => (
    <button className="button__google-sign-in">Sign up with Google</button>
  );

  const AlternativeButton = () => (
    <button className="button__alternative-options">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="mk9s29m6gr78unextthl39u2a8vxp8r"
        role="img"
        viewBox="0 0 24 24"
        className="button__alternative-options__icon"
      >
        <title id="mk9s29m6gr78unextthl39u2a8vxp8r">Twitter icon</title>
        <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
      </svg>
    </button>
  );

  const CreateAccountButton = () => (
    <button className="button__create_account" type="submit">
      Create Account
    </button>
  );

  const SignOut = () => (
    <div className="account-sign-in">
      <label className="account-sign-in__text">
        Already have an account? <Link to="/">Sign in</Link>
      </label>
    </div>
  );

  const SignIn = () => (
    <div className="account-sign-in">
      <label className="account-sign-in__text">
        Already have an account?{" "}
        <a
          onClick={() => {
            history.push("/");
          }}
          href="#"
        >
          Sign in
        </a>
      </label>
    </div>
  );

  return (
    <motion.div {...signUpMotionSettings} className="login" key="signup">
      <div className="border">
        <motion.h3 {...slideOut} className="login-label">
          Sign up to _default
        </motion.h3>
        <div className="alternative-sign-in">
          <GoogleSignUpButton />
          <AlternativeButton />
        </div>
        <hr className="border__divider" />
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              className="input-group__input"
              onChange={handleChange}
              value={credentials.username}
              type="text"
              name="username"
              id="username"
              placeholder="&nbsp;"
              autoComplete="off"
              required
            />
            <label className="input-group__label">Username</label>
          </div>
          <div className="input-group">
            <input
              onChange={handleChange}
              className="input-group__input"
              type="text"
              name="email"
              id="email"
              placeholder="&nbsp;"
              required
            />
            <label className="input-group__label">Email</label>
          </div>
          <div className="input-group">
            <input
              className="input-group__input"
              onChange={handleChange}
              value={credentials.password}
              type={inputType}
              name="password"
              id="password"
              placeholder="&nbsp;"
              required
            />
            <label className="input-group__label">Password</label>
            <span className="input-group__password_show" onClick={showPassword}>
              {inputType === "text" ? "Hide" : "show"}
            </span>
          </div>
          <Terms />
          <CreateAccountButton />
          <SignIn />
        </form>
      </div>
    </motion.div>
  );
});

export default Signup;
