import React, { Component } from "react";

import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Hype from "./components/hype/Hype";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";

class Auth extends Component {

    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <Header />
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Welcome />
                        </div>
                        <div className="col-sm-6">
                            <LogIn />
                            <SignUp />
                        </div>
                    </div>
                </div>
                <Hype/>
                <Team/>
                <Testimonials/>
                <Contact/>
                <div className="jumbotron">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default Auth;