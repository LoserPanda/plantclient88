import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './app.css'

import PrivateRoute from "./PrivateRoute";
import app from "./base";

import Home from "./Home";
import Auth from "./Auth";

class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem("UID", user.uid);
        localStorage.setItem("email", user.email);
        this.setState({
          // livedata: "",
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <div>
        <Router>
          <div>
            <PrivateRoute
              exact
              path="/"
              component={Home}
              authenticated={authenticated}
            />
            <Route exact path="/login" component={Auth} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;