import React from "react";
import app from "./base";
import Komponenttijoo from "./Komponenttijoo";
import LineChart from "./components/charts/LineChart";


const Home = () => {


    function logout() {
        app.auth().signOut().then(() => {
            console.log("logged out successfully");
        }, err => {
            console.log("unable to logout", err);
        });
    }

    return (
        <div>
            <h1>Home</h1>
            <button onClick={logout}>Logout</button>
            <Komponenttijoo/>
            <LineChart/>
        </div>
    );
};

export default Home;
