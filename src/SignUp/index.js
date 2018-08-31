import React, { Component } from "react";
import SignUpView from "./SignUpView";
import { withRouter } from "react-router";
import app from "../base";

class SignUpContainer extends Component {

  postUserToDB = (UID, email) => {
    const url = "http://localhost:3001/users/";
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({UID:UID, email:email})
     
    })
      .then(res => {
        res.json();
      })
      .then(response => {
        console.log(response);
            })
      .catch(error => console.error('Error:', error));
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.postUserToDB(user.UID, user.email);
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
