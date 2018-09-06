import React, {Component} from "react";
import SignUp from "../SignUp";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SignUpInstructions from "./SignUpInstructions";

class SignUpWindow extends Component {

    render() {

        return (
            <div>
                <div className="jumbotron header-footer">
                    <div className="container">
                        <Header/>
                    </div>
                </div>
                <div className="container">
                    <div className="Container">
                        <div className="row">
                            <div className="col-sm-4">
                                <SignUpInstructions/>
                            </div>
                            <div className="col-sm-8">
                                <SignUp/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="jumbotron header-footer">
                    <div className="container">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUpWindow;