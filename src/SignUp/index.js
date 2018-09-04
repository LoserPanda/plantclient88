import React, {Component} from "react";
import SignUpView from "./SignUpView";
import {withRouter} from "react-router";
// import app from "../base";

class SignUpContainer extends Component {

    // handleSignUp = async event => {
    //     event.preventDefault();
    //     const {email, password} = event.target.elements;
    //     try {
    //         await app
    //             .auth()
    //             .createUserWithEmailAndPassword(email.value, password.value);
    //         this.props.history.push("/");
    //     } catch (error) {
    //         alert(error);
    //     }
    // };

    handleNothing = (e) => {
        e.preventDefault();
        alert("Check your entry!");
    };

    render() {
        // return <SignUpView onSubmit={this.handleSignUp} />;
        return <SignUpView onSubmit={this.handleNothing}/>;
    }
}

export default withRouter(SignUpContainer);
