import React, { Component } from "react";
import SignUp from "../SignUp";
import Header from "../components/Header";
import Footer from "../bootstrapcomponents/Footer";
import SignUpInstructions from "./SignUpInstructions";

class SignUpWindow extends Component {

    render() {

        return (
            <div className="container">
                <div className="jumbotron">
                    <Header />
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-4">
                            <SignUpInstructions />
                        </div>
                        <div className="col-sm-8">
                            <SignUp />
                        </div>
                    </div>
                </div>
                <div className="jumbotron">
                    <Footer />
                </div>
            </div>
        );
    }
}

export default SignUpWindow;