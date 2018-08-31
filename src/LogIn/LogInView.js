import React from "react";

const LogInView = ({ onSubmit }) => {
  return (
    <div className="formdiv">
      <h1>Log in</h1>
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
        <button className="btn btn-default" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogInView;
