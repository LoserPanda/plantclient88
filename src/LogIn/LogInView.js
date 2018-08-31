import React from "react";

const LogInView = ({ onSubmit }) => {
  return (
    <div>
      <h1>Log in</h1>
      <form className="form-inline" onSubmit={onSubmit}>
      <div clasNames="form-group">
        <label>
          Email
          <input
            style={{ width: "100%" }}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
        </div>
        <div className="form-group">
        <label>
          Password
          <input
            style={{ width: "100%" }}
            name="password"
            type="password"
            placeholder="Password"
          />
        </label>
        </div>
        <button className="btn btn-default" type="submit">Log in</button>
      </form>
    </div>
  );
};

export default LogInView;
