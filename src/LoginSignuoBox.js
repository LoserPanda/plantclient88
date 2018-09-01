import React, { Component } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

class LoginSignupBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showComponent: false,
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    _onButtonClick() {
        this.setState({
            showComponent: true,
        });
    }

    render() {

        return (
            <div>
                <LogIn />
                <button className="btn btn-default" onClick={this._onButtonClick}>Or Sign up</button>
                {this.state.showComponent ?
                    <SignUp /> :
                    null
                }
            </div>
        );
    }
}

export default LoginSignupBox;