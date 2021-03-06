import React, {Component} from "react";
import TopNavigation from "./TopNavigation";
import Livedata from './components/livedata/Livedata';
import ChartBox from "./components/charts/ChartBox";
import CareRegime from "./components/plants/CareRegime";

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
            });
    }

    render() {

        return (
            <div>
                <TopNavigation/>
                <div className="container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <Livedata/>
                            </div>
                            {/*<div className="col-sm-2">*/}
                            {/*</div>*/}
                            <div className="col-sm-6">
                                <CareRegime/>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <ChartBox/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
