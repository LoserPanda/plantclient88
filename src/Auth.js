import React, {Component} from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Hype from "./components/hype/Hype";
// import Team from "./components/team/Team";
import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
import LoginSignupBox from "./LoginSignuoBox";
import TeamMembers from "./components/team/TeamMembers";

class Auth extends Component {

    render() {

        return (
            <div className="container">
                <div className="minHeight">
                    <div className="jumbotron">
                        <Header/>
                    </div>
                    <div className="Container">
                        <div className="row">
                            <div className="col-sm-6">
                                <Welcome/>
                            </div>
                            <div className="col-sm-6">
                                <LoginSignupBox/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="minHeight">
                    <Hype/>
                </div>
                {/*<Team />*/}
                <div className="minHeight">
                    <TeamMembers/>
                </div>
                {/*<Testimonials />*/}
                <div className="minHeight">
                    <Contact/>
                    <div className="jumbotron">
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;