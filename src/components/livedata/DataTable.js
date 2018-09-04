import React, {Component} from 'react'
import url from '../../config/sensordataurl';

class DataTable extends Component {

    state = {
        soilState: [],
        lightState: [],
        humidityState: [],
        temperatureState: [],
        soilAvg: [],
        lightAvg: [],
        humidityAvg: [],
        temperatureAvg: []
    };

    componentDidMount() {
        fetch(url.url + "/plants/averages/" + localStorage.getItem("UID"))
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Data not found')
                }
            })
            .then(data => {
                console.log(data);
                let hum = data[0].humidityAvg;
                let soil = data[0].soilAvg;
                let light = data[0].lightAvg;
                let tempe = data[0].temperatureAvg;
                this.setState({humidityAvg: hum});
                this.setState({soilAvg: soil});
                this.setState({lightAvg: light});
                this.setState({temperatureAvg: tempe});
            });

        this.soilLevels();
        this.tempLevels();
        this.humLevels();
        this.lightLevels();
    }

    lightLevels = () => {
        setInterval(() => {

            const maxVal = Number(this.state.lightAvg + 20);
            const minVal = Number(this.state.lightAvg - 20);
            let lightLive = Number(this.props.light);

            if (lightLive >= maxVal) {
                let value1 = "Ugh, too SUNNY for me!";
                this.setState({lightState: value1});
            } else if ((lightLive < maxVal) && (lightLive > minVal)) {
                let value2 = "Im ok :)";
                this.setState({lightState: value2});
            } else {
                let value3 = "It's propably night again..!";
                this.setState({lightState: value3});
            }
        }, 2000)
    };

    humLevels = () => {
        setInterval(() => {

            const maxVal = Number(this.state.humidityAvg + 15);
            const minVal = Number(this.state.humidityAvg - 15);
            let humLive = Number(this.props.humidity);

            if (humLive >= maxVal) {
                let value1 = "Ugh, too TROPICAL for me!";
                this.setState({humidityState: value1});
            } else if (humLive < maxVal && humLive >= minVal) {
                let value2 = "Im ok :)";
                this.setState({humidityState: value2});
            } else {
                let value3 = "Like a sahara...";
                this.setState({humidityState: value3});
            }
        }, 2000)
    };

    tempLevels = () => {
        setInterval(() => {

            const maxVal = Number(this.state.temperatureAvg) + 10;
            const minVal = Number(this.state.temperatureAvg) - 10;
            let tempLive = Number(this.props.temperature);
            console.log(maxVal);
            if (tempLive >= maxVal) {
                let value1 = "Ugh, too HOT for me!";
                this.setState({temperatureState: value1});
            } else if ((tempLive < maxVal) && (tempLive > minVal)) {
                let value2 = "Im ok :)";
                this.setState({temperatureState: value2});
            } else {
                let value3 = "Shit it's freezing";
                this.setState({temperatureState: value3});
            }
        }, 2000)
    };

    soilLevels = () => {
        setInterval(() => {

            const maxVal = Number(this.state.soilAvg + 10);
            const minVal = Number(this.state.soilAvg - 10);
            let soilLive = Number(this.props.soilmoisture);

            if (soilLive >= maxVal) {
                let value1 = "Ugh, too wet for me!";
                this.setState({soilState: value1});
            } else if (soilLive < maxVal && soilLive > minVal) {
                let value2 = "Im ok :)";
                this.setState({soilState: value2});
            } else {
                let value3 = "Water me please!";
                this.setState({soilState: value3});
            }
        }, 2000)
    };


    render() {
        return (
            <div className="table-responsive">
                <h2>Live Data Feed</h2>
                <p>Precise measurements from your beloved plant</p>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Sensor</th>
                        <th>Value</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="success">
                        <td>Light</td>
                        <td>{this.props.light}</td>
                        <td>{this.state.lightState}</td>
                    </tr>
                    <tr className="danger">
                        <td>Humidity</td>
                        <td>{this.props.humidity}</td>
                        <td>{this.state.humidityState}</td>
                    </tr>
                    <tr className="info">
                        <td>Temperature</td>
                        <td>{this.props.temperature}</td>
                        <td>{this.state.temperatureState}</td>
                    </tr>
                    <tr className="warning">
                        <td>Soil Moisture</td>
                        <td>{this.props.soilmoisture}</td>
                        <td>{this.state.soilState}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default DataTable;
