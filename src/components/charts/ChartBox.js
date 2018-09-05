import React, {Component} from "react";
import ChartList from "./ChartList";

const
    HOUR = "hour",
    DAY = "day",
    MONTH = "month",
    YEAR = "year";


class ChartBox extends Component {

    constructor() {
        super();

        this.state = {
            time: HOUR
        }
    }

    componentWillMount() {

    }

    handleChange() {

    }

    // changeToHour = () => {
    //     let itse = this;
    //     itse.setState({time: HOUR});
    //     console.log(this.state.time);
    // };
    //
    // changeToDay = () => {
    //     let itse = this;
    //     itse.setState({time: DAY});
    //     console.log(this.state.time);
    // };
    //
    // changeToMonth = () => {
    //     let itse = this;
    //     itse.setState({time: MONTH});
    //     console.log(this.state.time);
    // };
    //
    // changeToYear = () => {
    //     let itse = this;
    //     itse.setState({time: YEAR});
    //     console.log(this.state.time);
    // };

    render() {

        return (
            <div>
                <h2>Browse Data</h2>

                <form>
                    <label>
                        <input
                            type="radio"
                            value="hour"
                            checked={this.state.time === HOUR}
                            onChange={this.handleChange}
                        />
                        Hour
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="day"
                            checked={this.state.time === DAY}
                            onChange={this.handleChange}
                        />
                        Day
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="month"
                            checked={this.state.time === HOUR}
                            onChange={this.handleChange}
                        />
                        Hour
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="hour"
                            checked={this.state.time === HOUR}
                            onChange={this.handleChange}
                        />
                        Hour
                    </label>
                </form>

                {/*<button onClick={this.changeToHour}>HOUR</button>*/}
                {/*<button onClick={this.changeToDay}>DAY</button>*/}
                {/*<button onClick={this.changeToMonth}>MONTH</button>*/}
                {/*<button onClick={this.changeToYear}>YEAR</button>*/}
                <ChartList time={this.state.time}/>
            </div>
        );
    }
}

export default ChartBox;