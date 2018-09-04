import React, {Component} from "react";
import ChartList from "./ChartList";

const
    HOUR = "hour",
    DAY = "day",
    MONTH = "month",
    YEAR = "year";


class ChartBox extends Component {

    state = {
        time: []
    };

    componentWillMount() {
        this.setState({time: HOUR});
    }

    changeToHour = () => {
        let itse = this;
        itse.setState({time: HOUR});
        console.log(this.state.time);
    };

    changeToDay = () => {
        let itse = this;
        itse.setState({time: DAY});
        console.log(this.state.time);
    };

    changeToMonth = () => {
        let itse = this;
        itse.setState({time: MONTH});
        console.log(this.state.time);
    };

    changeToYear = () => {
        let itse = this;
        itse.setState({time: YEAR});
        console.log(this.state.time);
    };

    render() {

        return (
            <div>
                <h2>Browse Data</h2>
                <button onClick={this.changeToHour}>HOUR</button>
                <button onClick={this.changeToDay}>DAY</button>
                <button onClick={this.changeToMonth}>MONTH</button>
                <button onClick={this.changeToYear}>YEAR</button>
                <ChartList time={this.state.time}/>
            </div>
        );
    }
}

export default ChartBox;