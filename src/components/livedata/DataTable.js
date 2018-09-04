import React, {Component} from 'react'
import url from '../../config/sensordataurl';
import LightScale, {lightCalibration} from './sensorCalibration/LightScale'
import HumidityCalibration, {humidityCalibration} from './sensorCalibration/HumidityCalibration'
import TemperatureCalibration, {temperatureCalibration} from './sensorCalibration/TemperatureCalibration'
import SoilmoistureCalibration, {soilmoistureCalibration} from './sensorCalibration/SoilmoistureCalibration'


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
                // console.log(data);
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
            const optimum = this.state.lightAvg; // 3
            let lightLive = lightCalibration(Number(this.props.light)); // vaihteleva

            if (lightLive == optimum){
              this.setState({lightState: "Yes, this is perfect"});
            } else if (lightLive < optimum && lightLive > 0){
              this.setState({lightState: "Oh it's too shady now.."});
            } else if (lightLive > optimum){
              this.setState({lightState: "Gosh it's so SUNNY"});
            } else {
              this.setState({lightState: "It's night again.. dull.."});
            }


        }, 2000)
    };

    humLevels = () => {
        setInterval(() => {

            const optimum = this.state.humidityAvg;
            console.log("OPTIMI",optimum);
            let humLive = humidityCalibration(Number(this.props.humidity));
            console.log("HUMLIVE",humLive);
            console.log("perus", this.props.humidity)

            if (humLive == optimum) {
                this.setState({humidityState: "Just breezing!"});
            } else if (humLive < optimum && humLive > 0) {
                this.setState({humidityState: "I feel a bit dry out here!"});
            } else if (humLive > optimum){
              this.setState({humidityState: "Ugh, too TROPICAL for me!"});
            } else {
                this.setState({humidityState: "Like a sahara..."});
            }
        }, 2000)
    };

    tempLevels = () => {
        setInterval(() => {

          const optimum = this.state.temperatureAvg; // 3
          let tempLive = temperatureCalibration(Number(this.props.temperature)); // vaihteleva

          if (tempLive == optimum){
            this.setState({temperatureState: "Nice weather buddy!"});
          } else if (tempLive < optimum && tempLive > 0){
            this.setState({temperatureState: "So cold.."});
          } else if (tempLive > optimum){
            this.setState({temperatureState: "It's a bit sweaty now"});
          } else {
            this.setState({temperatureState: "IM DYING......."});
          }
        }, 2000)
    };

    soilLevels = () => {
        setInterval(() => {

          const optimum = this.state.soilAvg; // 3
          let soilLive = soilmoistureCalibration(Number(this.props.soilmoisture)); // vaihteleva

          if (soilLive == optimum){
            this.setState({soilState: "My roots are doing just fine!"});
          } else if (soilLive < optimum && soilLive > 0){
            this.setState({soilState: "I could use a drink"});
          } else if (soilLive > optimum){
            this.setState({soilState: "Don't drown me please"});
          } else {
            this.setState({soilState: "IM DYING......."});
          }
        }, 2000)
    };


    render() {
        return (
            <div className="table-responsive">
                <h2>Live Data Feed</h2>
                <p>Precise measurements from your beloved plant</p>
                <table className="table table-bordered">
                    <tbody>
                      <tr>
                          <td>Light {this.props.light} %</td>
                          <td>Humidity {this.props.humidity} %</td>
                          <td>Temperature {this.props.temperature} C´</td>
                          <td>Soil {this.props.soilmoisture}</td>
                      </tr>
                    </tbody>
                </table>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>Sensor</th>
                        <th>Value</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="warning">
                        <td>Light</td>
                        <td>{this.props.light}</td>
                        <td>{this.state.lightState}</td>
                    </tr>
                    <tr className="info">
                        <td>Humidity</td>
                        <td>{this.props.humidity}</td>
                        <td>{this.state.humidityState}</td>
                    </tr>
                    <tr className="danger">
                        <td>Temperature</td>
                        <td>{this.props.temperature}</td>
                        <td>{this.state.temperatureState}</td>
                    </tr>
                    <tr className="success">
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
