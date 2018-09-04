import React, {Component} from 'react'
import io from "socket.io-client";
import DataTable from './DataTable'

var socket = io('http://176.34.158.245:3005');

class Livedata extends Component {

    state = {
        livedata: [],
        light: "",
        humidity: "",
        temperature: "",
        soilmoisture: "",
    };

    componentDidMount() {
        let itse = this;
        socket.emit('live', "client socket connected");
        socket.on('live', function (data) {
            var dataHandled = data.split(" ");

            let light = parseInt(dataHandled[0]);
            let humidity = parseFloat(dataHandled[1]);
            let temperature = parseFloat(dataHandled[2]);
            let soilmoisture = parseInt(dataHandled[3]);

            itse.setState({light: light});
            itse.setState({humidity: humidity});
            itse.setState({temperature: temperature});
            itse.setState({soilmoisture: soilmoisture});

            itse.setState({livedata: data});
        });
    };

    render() {
        return (
            <div>
                <DataTable light={this.state.light} humidity={this.state.humidity} temperature={this.state.temperature}
                           soilmoisture={this.state.soilmoisture}/>
            </div>
        );
    }
}

export default Livedata;
