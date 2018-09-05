import React, {Component} from 'react';
import url from '../../config/sensordataurl';
import {lightCalibration} from "../livedata/sensorCalibration/LightScale";
import {temperatureCalibration} from "../livedata/sensorCalibration/TemperatureCalibration";
import {humidityCalibration} from "../livedata/sensorCalibration/HumidityCalibration";
import {soilmoistureCalibration} from "../livedata/sensorCalibration/SoilmoistureCalibration";

class PlantBox extends Component {
    state = {
        plant: [],

        lightState: 'Hello',
        humidityState: 'nice to have you back',
        temperatureState: 'please wait a moment',
        soilState: 'I will come back to you!',

        soilAvg: [],
        lightAvg: [],
        humidityAvg: [],
        temperatureAvg: [],

        light: '',
        humidity: '',
        temperature: '',
        soilmoisture: ''
    };

    componentDidMount() {
        let self = this;
        fetch(url.url + '/plants/getphoto/' + localStorage.getItem('UID'))
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                self.setState({plant: obj[0]});
            });

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
                let hum = data[0].humidityAvg;
                let soil = data[0].soilAvg;
                let light = data[0].lightAvg;
                let tempe = data[0].temperatureAvg;
                this.setState({humidityAvg: hum});
                this.setState({soilAvg: soil});
                this.setState({lightAvg: light});
                this.setState({temperatureAvg: tempe});
            });
    }

    getMessage = () => {
        let itse = this;
        fetch(url.url + '/plants/plantconditions/' + localStorage.getItem('UID'))
            .then((resp) => {
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    window.responsiveVoice.speak("I am sorry for the inconvenience but I can not talk to you right now. Please come back to me on later time.", "UK English Male");
                }
            })
            .then((obj) => {

                itse.setState({light: obj[0].light});
                itse.setState({humidity: obj[0].humidity});
                itse.setState({temperature: obj[0].temperature});
                itse.setState({soilmoisture: obj[0].soilmoisture});
                this.soilLevels();
                this.tempLevels();
                this.humLevels();
                this.lightLevels();
                let message = this.state.lightState + ", " + this.state.humidityState + ", " + this.state.temperatureState + " and " + this.state.soilState;
                window.responsiveVoice.speak(message, "UK English Male");
            });
    };

    lightLevels = () => {
        setInterval(() => {
            const optimum = this.state.lightAvg;
            let lightLive = lightCalibration(Number(this.state.light));

            if (lightLive === optimum) {
                this.setState({lightState: "the lighting is just perfect"});
            } else if (lightLive < optimum && lightLive > 0) {
                this.setState({lightState: "it is too shady out here"});
            } else if (lightLive > optimum) {
                this.setState({lightState: "I am burning alive"});
            } else {
                this.setState({lightState: "I guess it is night time"});
            }

        }, 2000)
    };

    humLevels = () => {
        setInterval(() => {

            const optimum = this.state.humidityAvg;
            let humLive = humidityCalibration(Number(this.state.humidity));

            if (humLive === optimum) {
                this.setState({humidityState: "the air feels quite nice"});
            } else if (humLive < optimum && humLive > 0) {
                this.setState({humidityState: "the air is a bit dry"});
            } else if (humLive > optimum) {
                this.setState({humidityState: "it is like a jungle out here"});
            } else {
                this.setState({humidityState: "the air is dry like a damn desert"});
            }
        }, 2000)
    };

    tempLevels = () => {
        setInterval(() => {

            const optimum = this.state.temperatureAvg;
            let tempLive = temperatureCalibration(Number(this.state.temperature));

            if (tempLive === optimum) {
                this.setState({temperatureState: "the temperature is jolly good"});
            } else if (tempLive < optimum && tempLive > 0) {
                this.setState({temperatureState: "it is quite cold now"});
            } else if (tempLive > optimum) {
                this.setState({temperatureState: "I am sweating my roots off"});
            } else {
                this.setState({temperatureState: "this temperature might actually kill me"});
            }
        }, 2000)
    };

    soilLevels = () => {
        setInterval(() => {

            const optimum = this.state.soilAvg;
            let soilLive = soilmoistureCalibration(Number(this.state.soilmoisture));

            if (soilLive === optimum) {
                this.setState({soilState: "my roots are doing just fine"});
            } else if (soilLive < optimum && soilLive > 0) {
                this.setState({soilState: "I could use a drink, would you pour some to me and yourself"});
            } else if (soilLive > optimum) {
                this.setState({soilState: "do not drown me please"});
            } else {
                this.setState({soilState: "soil moisture wise I am dying"});
            }
        }, 2000)
    };

    render() {

        var lightAmount;
        if (this.state.plant.lightAvg === 3) {
            lightAmount = (
                <div>
                    <span className="glyphicon glyphicon-certificate lighticon"></span>
                    <span className="glyphicon glyphicon-certificate lighticon"></span>
                    <span className="glyphicon glyphicon-certificate lighticon"></span>
                </div>)
        } else if (this.state.plant.lightAvg === 2) {
            lightAmount = (
                <div>
                    <span className="glyphicon glyphicon-certificate lighticon"></span>
                    <span className="glyphicon glyphicon-certificate lighticon"></span>
                </div>)
        } else if (this.state.plant.lightAvg === 1) {
            lightAmount = (
                <div>
                    <span className="glyphicon glyphicon-certificate lighticon"></span>
                </div>)
        } else {
            lightAmount = (<div>No light settings found!</div>)
        }

        var humidityAmount;
        if (this.state.plant.humidityAvg === 3) {
            humidityAmount = (
                <div>
                    <span className="glyphicon glyphicon-cloud humidityicon"></span>
                    <span className="glyphicon glyphicon-cloud humidityicon"></span>
                    <span className="glyphicon glyphicon-cloud humidityicon"></span>
                </div>)
        } else if (this.state.plant.humidityAvg === 2) {
            humidityAmount = (
                <div>
                    <span className="glyphicon glyphicon-cloud humidityicon"></span>
                    <span className="glyphicon glyphicon-cloud humidityicon"></span>
                </div>)
        } else if (this.state.plant.humidityAvg === 1) {
            humidityAmount = (
                <div>
                    <span className="glyphicon glyphicon-cloud humidityicon"></span>
                </div>)
        } else {
            humidityAmount = (<div>No humidity settings found!</div>)
        }

        var temperatureAmount;
        if (this.state.plant.temperatureAvg === 3) {
            temperatureAmount = (
                <div>
                    <span className="glyphicon glyphicon-fire temperatureicon"></span>
                    <span className="glyphicon glyphicon-fire temperatureicon"></span>
                    <span className="glyphicon glyphicon-fire temperatureicon"></span>
                </div>)
        } else if (this.state.plant.temperatureAvg === 2) {
            temperatureAmount = (
                <div>
                    <span className="glyphicon glyphicon-fire temperatureicon"></span>
                    <span className="glyphicon glyphicon-fire temperatureicon"></span>
                </div>)
        } else if (this.state.plant.temperatureAvg === 1) {
            temperatureAmount = (
                <div>
                    <span className="glyphicon glyphicon-fire temperatureicon"></span>
                </div>)
        } else {
            temperatureAmount = (<div>No temperature settings found!</div>)
        }

        var soilmoistureAmount;
        if (this.state.plant.soilAvg === 3) {
            soilmoistureAmount = (
                <div>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                </div>)
        } else if (this.state.plant.soilAvg === 2) {
            soilmoistureAmount = (
                <div>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                </div>)
        } else if (this.state.plant.soilAvg === 1) {
            soilmoistureAmount = (
                <div>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                </div>)
        } else {
            soilmoistureAmount = (<div>No soil moisture settings found!</div>)
        }

        return (
            <div>
                <div align="right" className="table-responsive">
                    <table className="care-regime-table-all">
                        <thead>
                        <tr>
                            <th colSpan="2">
                                <h2 className="care-regime-table-to-right">{this.state.plant.name}'s Care Regime</h2>
                                <br/>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <table className="care-regime-table">
                                    <thead>
                                    <tr>
                                        <th className="care-regime-table-to-right">
                                            Optimal Conditions would be
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td className="care-regime-table-to-right">
                                            <div id="optlight">
                                                {lightAmount}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="care-regime-table-to-right">
                                            <div id="opthumidity">
                                                {humidityAmount}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="care-regime-table-to-right">
                                            <div id="opttemperature">
                                                {temperatureAmount}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="care-regime-table-to-right">
                                            <div id="optsoilmoisture">
                                                {soilmoistureAmount}
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>

                                <img className='care-regime-img' alt={'Image of ' + this.state.plant.name}
                                     src={this.state.plant.photolink}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="align-left">
                    <button className="btn" onClick={this.getMessage} type='button'>
                        Let Me Talk to You<span> </span>
                        <span className="glyphicon glyphicon-volume-up"></span>
                    </button>
                </div>
            </div>
        );
    }
}

export default PlantBox;