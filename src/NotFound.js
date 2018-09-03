import React, {Component} from 'react';
import './app.css';
import palmu from "./components/hype/palmu.png";

class NotFound extends Component {
    render() {
        return (
            <div className="jumbotron jt vertical-center">
                <div className="container">
                    <h1>404 Page Not Found</h1>
                    <br/>
                    <img className="Nikos404Img" src={palmu} alt="Analytics"/>
                </div>
            </div>
        );
    }
}

export default NotFound;