import React from "react";

const SignUpView = ({onSubmit}) => {
    return (
        <div>
            <div className="formdiv">
                <span><a className="signuploginlink" href="/login">Or Log in</a></span>
                <h1>Sign up</h1>
                <form onSubmit={onSubmit}>
                    <label>
                        Device Serial Number*
                    </label>
                    <input
                        name="deviceserialnumber"
                        type="text"
                        placeholder="Device Serial Number"
                    />
                    <label>
                        Plant's Name
                    </label>
                    <input
                        name="plantsname"
                        type="text"
                        placeholder="Plant's Name"
                    />
                    <label>
                        Email*
                    </label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                    />
                    <label>
                        Password*
                    </label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="btn btn-default" type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpView;
