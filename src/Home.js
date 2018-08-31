import React, { Component } from "react";
import app from "./base";
import Komponenttijoo from "./Komponenttijoo";
import LineChart from "./components/charts/LineChart";

class Home extends Component {
    /*
        check = () => {
            fetch('http://localhost:3001/users/' + localStorage.getItem("UID"))
                .then((response) => {
                    return response.json();
                }).then(res => {
                    console.log(JSON.stringify(res));
                });
        }*/

    componentDidMount() {
        fetch('http://localhost:3001/users/', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                UID: localStorage.getItem("UID"),
                email: localStorage.getItem("email")
            })
        })
            .then((response) => {
                console.log("success");
            });
    }


    logout = () => {
        app.auth().signOut().then(() => {
            localStorage.removeItem("UID");
            localStorage.removeItem("email");
            console.log("logged out successfully");
        }, err => {
            console.log("unable to logout", err);
        });
    }

    render() {

        return (
            <div>
                <h1>Home</h1>
                <button className="btn btn-default" onClick={this.logout}>Logout</button>
                <Komponenttijoo />
                <LineChart />
            </div>
        );
    }
};

export default Home;
