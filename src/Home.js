import React, {Component} from "react";
import TopNavigation from "./TopNavigation";
import Livedata from './components/livedata/Livedata';
import ChartBox from "./components/charts/ChartBox";
import PlantBox from "./components/plants/PlantBox";

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
                <div>
                  {/*<Livedata/>*/}
                </div>
                <ChartBox/>
                {/*<PlantBox/>*/}
            </div>
        );
    }
};

export default Home;
