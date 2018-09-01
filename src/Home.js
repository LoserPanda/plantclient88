import React, {Component} from "react";
import Light from "./components/charts/Light";
import WaterChart from "./components/charts/WaterChart";
import Humidity from "./components/charts/Humidity";
import Temperature from "./components/charts/Temperature";
import TopNavigation from "./TopNavigation";
import Livedata from './components/livedata/Livedata';
import Chart from './components/charts/Chart';

class Home extends Component {

    componentDidMount() {
        fetch('http://localhost:3001/users/', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                userID: localStorage.getItem("UID"),
                email: localStorage.getItem("email")
            })
        })
            .then((response) => {
                console.log("success");
            });
    }

    render() {

        return (
            <div>
                <TopNavigation/>
                <h1>Home</h1>
                <div>
                  <Livedata/>
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Light/>
                        </div>
                        <div className="col-sm-6">
                            <WaterChart/>
                        </div>
                    </div>
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Temperature/>
                        </div>
                        <div className="col-sm-6">
                            <Humidity/>
                        </div>
                    </div>
                </div>
                <Chart/>
            </div>
        );
    }
};

export default Home;
