import React from "react";

const SignUpView = ({ onSubmit }) => {
  return (
    <div className="formdiv">
      <h1>Sign up</h1>
      <form onSubmit={onSubmit}>
        <label>
          Email
          </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
        />
        <label>
          Password
          </label>
        <input
          name="password"
          type="password"
          placeholder="Password"
        />
        <button className="btn btn-default" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpView;
