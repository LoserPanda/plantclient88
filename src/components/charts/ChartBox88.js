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

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
        console.log(this.state.time, "handleChange");
    }

    handleSubmit(event) {
        event.preventDefault();
        this.getData();
    }

    render() {

        return (
            <div>
                <h2>Browse Data</h2>

                <form onSubmit={this.handleSubmit}>
                    <h4>Choose time period to browse data</h4>
                    <p>Currently, you see
                        the <strong>{this.state.time === DAY ? "daily" : this.state.time + "ly"}</strong> average of each; light,
                        humidity, temperature and soil moisture.</p>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="hour"
                            checked={this.state.time === HOUR}
                            onChange={this.handleChange}
                        />
                        Hour
                    </label>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="day"
                            checked={this.state.time === DAY}
                            onChange={this.handleChange}
                        />
                        Day
                    </label>
                    <label className="radio-inline">
                        <input
                            type="radio"
                            value="month"
                            checked={this.state.time === MONTH}
                            onChange={this.handleChange}
                        />
                        Month
                    </label>
                    {/*<label className="radio-inline">*/}
                        {/*<input*/}
                            {/*type="radio"*/}
                            {/*value="year"*/}
                            {/*checked={this.state.time === YEAR}*/}
                            {/*onChange={this.handleChange}*/}
                        {/*/>*/}
                        {/*Year*/}
                    {/*</label>*/}
                    <br/>
                    <br/>
                    <button className="btn" type="submit">Implement filter</button>
                </form>
                <br/>
                <ChartList time={this.state.time} data={this.state.results}/>
            </div>
        );
    }
}

export default ChartBox88;