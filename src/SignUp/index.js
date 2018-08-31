import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import app from "../base";

class SignUpContainer extends Component {

  postUserToDB = () => {
    const url = "http://localhost:3001/users/add";
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: { "UID": "jouojoojo", "email": "jou@joujou.jou" }

    })

  }

  getUser = () => {
    const url = "http://localhost:3001/users/";
    fetch(url).then(res => {
      if (res.ok) return res.json()
      else throw new Error("jou")
    }).then(res => {
      console.log(res);
    })
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.postUserToDB();
      console.log(user.email, user.uid);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return <SignUpView onSubmit={this.handleSignUp} />;
  }
}

export default withRouter(SignUpContainer);
