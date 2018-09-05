import React, {Component} from "react";
import ChartList from "./ChartList88";
import url from "../../config/sensordataurl";

const
    HOUR = "hour",
    DAY = "day",
    MONTH = "month",
    YEAR = "year";


class ChartBox88 extends Component {

    constructor() {
        super();

        this.state = {
            time: HOUR,
            results: []
        };

    }

    getData = () => {
        console.log(this.state.time, "johuighniohujk");
        fetch(url.url + "/sensordata/" + this.state.time + "/byuserid/" + localStorage.getItem("UID"))
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Data not found')
                }
            })
            .then(data => {
                this.setState({results: data});
            });
    };

    componentDidMount() {
        console.log("Ollaan componentMountissa", this.state.time);
        this.getData();
    };

    handleChange(event) {
        let itse = this;
        console.log(event.target.value, "target")
        itse.setState({
            time: event.target.value
        });
        itse.getData();
        console.log(this.state.time, "handleChange");
    }

    render() {

        const aika = this.state.time;

        return (
            <div>
                <h2>Browse Data</h2>

                <form>
                    <h4>Choose time period to browse data</h4>
                    <p>Currently, you see
                        the <u>{this.state.time === DAY ? "daily" : this.state.time + "ly"}</u> average of each; light,
                        humidity, temperature and soil moisture.</p>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="hour"
                            checked={aika === HOUR}
                            onChange={this.handleChange.bind(this)}
                        />
                        Hour
                    </label>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="day"
                            checked={aika === DAY}
                            onChange={this.handleChange.bind(this)}
                        />
                        Day
                    </label>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="month"
                            checked={aika === MONTH}
                            onChange={this.handleChange.bind(this)}
                        />
                        Month
                    </label>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="year"
                            checked={aika === YEAR}
                            onChange={this.handleChange.bind(this)}
                        />
                        Year
                    </label>
                </form>
                <br/>
                <ChartList time={this.state.time} data={this.state.results}/>
            </div>
        );
    }
}

export default ChartBox88;