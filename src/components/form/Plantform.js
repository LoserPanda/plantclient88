import React, {Component} from 'react';
// import Plantdata from './Plantdata';
import url from '../../config/sensordataurl';


class Plantform extends Component {
    state = {
        plantID: "",
        name: "",
        photolink: '',
        soilAvg: '',
        lightAvg: "",
        humidityAvg: "",
        temperatureAvg: ""
    };

    componentDidMount() {
        this.handleInitialState();

    }

    handleNameChange = (e) => {
        const uusinimi = e.target.value;
        this.setState({name: uusinimi});
    };
    handlePhotolinkChange = (e) => {
        this.setState({photolink: e.target.value});
    };
    // handlePlantIDChange = (e) => {
    //     this.setState({plantID: e.target.value});
    // };
    handleSoilAvgChange = (e) => {
        console.log(e.target.value)
        this.setState({soilAvg: e.target.value});
        console.log(this.state.soilAvg)
    };
    handleLightAvgChange = (e) => {
        this.setState({lightAvg: e.target.value});
    };
    handleHumidityAvgChange = (e) => {
        this.setState({humidityAvg: e.target.value});
    };
    handleTemperatureAvgChange = (e) => {
        this.setState({temperatureAvg: e.target.value});
    };
    handleCreateClick = (e) => {
        console.log(this.state.soilAvg, "fgvjkhn")
        let olio = {
            plantID: this.state.plantID,
            name: this.state.name,
            photolink: this.state.photolink,
            soilAvg: Number(this.state.soilAvg),
            lightAvg: this.state.lightAvg,
            humidityAvg: this.state.humidityAvg,
            temperatureAvg: this.state.temperatureAvg
        };
        e.preventDefault();
        console.log(olio)
        fetch(url.url + "/plants/update", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(olio)
        })
            .then(res => {
                alert("Plant added!");
            })

    };
    handleInitialState = () => {
        setTimeout((e) => {
            this.setState({
                name: this.props.name, plantID: this.props.plantID,
                photolink: this.props.photolink,
                soilAvg: this.props.soilAvg,
                lightAvg: this.props.lightAvg,
                humidityAvg: this.props.humidityAvg,
                temperatureAvg: this.props.temperatureAvg
            });

            console.log(this.state);
        }, 1000)
    };

    render() {

        return (
            <form>
                <label>
                    Plant Name
                </label>
                <input type="text" placeholder="Plant Name" value={this.state.name} onChange={this.handleNameChange}/>
                <label>
                    Photo Link
                </label>
                <input type="text" placeholder="Photo Link" value={this.state.photolink}
                       onChange={this.handlePhotolinkChange}/>
                {/*<label>*/}
                {/*Target Light Conditions*/}
                {/*</label>*/}
                {/*<input type="text" placeholder="Target Light Conditions" value={this.state.lightAvg}*/}
                {/*onChange={this.handleLightAvgChange}/>*/}
                {/*<label>*/}
                {/*Target Humidity Conditions*/}
                {/*</label>*/}
                {/*<input type="text" placeholder="Target Humidity Conditions" value={this.state.humidityAvg}*/}
                {/*onChange={this.handleHumidityAvgChange}/>*/}
                {/*<label>*/}
                {/*Target Temperature Conditions*/}
                {/*</label>*/}
                {/*<input type="text" placeholder="Target Temperature Conditions" value={this.state.temperatureAvg}*/}
                {/*onChange={this.handleTemperatureAvgChange}/>*/}
                {/*<label>*/}
                {/*Target Soil Moisture Conditions*/}
                {/*</label>*/}
                {/*<input type="number" placeholder="Target Soil Moisture Conditions" value={this.state.soilAvg}*/}
                {/*onChange={this.handleSoilAvgChange}/>*/}
                <div className="Container">
                    <br/>
                    <div className="row">
                        <div className="col-sm-4">
                            <label>
                                Target Light Conditions
                            </label>
                            <div className="form-group padd-radios">
                                <div className="radio">
                                    <input type="radio" name="lightAvg" value={3} checked={this.state.lightAvg == 3}
                                           onChange={this.handleLightAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-certificate lighticon"></span>
                                        <span className="glyphicon glyphicon-certificate lighticon"></span>
                                        <span className="glyphicon glyphicon-certificate lighticon"></span>
                                    </label>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="lightAvg" value={2} checked={this.state.lightAvg == 2}
                                           onChange={this.handleLightAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-certificate lighticon"></span>
                                        <span className="glyphicon glyphicon-certificate lighticon"></span>
                                    </label>
                                </div>
                                <div className="radio disabled">
                                    <input type="radio" name="lightAvg" value={1} checked={this.state.lightAvg == 1}
                                           onChange={this.handleLightAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-certificate lighticon"></span>
                                    </label>
                                </div>
                            </div>

                            <label>
                                Target Humidity Conditions
                            </label>
                            <div className="form-group padd-radios">
                                <div className="radio">
                                    <input type="radio" name="humidityAvg" value={3}
                                           checked={this.state.humidityAvg == 3}
                                           onChange={this.handleHumidityAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-cloud humidityicon"></span>
                                        <span className="glyphicon glyphicon-cloud humidityicon"></span>
                                        <span className="glyphicon glyphicon-cloud humidityicon"></span>
                                    </label>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="humidityAvg" value={2}
                                           checked={this.state.humidityAvg == 2}
                                           onChange={this.handleHumidityAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-cloud humidityicon"></span>
                                        <span className="glyphicon glyphicon-cloud humidityicon"></span>
                                    </label>
                                </div>
                                <div className="radio disabled">
                                    <input type="radio" name="humidityAvg" value={1}
                                           checked={this.state.humidityAvg == 1}
                                           onChange={this.handleHumidityAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-cloud humidityicon"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <label>
                                Target Temperature Conditions
                            </label>
                            <div className="form-group padd-radios">
                                <div className="radio">
                                    <input type="radio" name="temperatureAvg" value={3}
                                           checked={this.state.temperatureAvg == 3}
                                           onChange={this.handleTemperatureAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-fire temperatureicon"></span>
                                        <span className="glyphicon glyphicon-fire temperatureicon"></span>
                                        <span className="glyphicon glyphicon-fire temperatureicon"></span>
                                    </label>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="temperatureAvg" value={2}
                                           checked={this.state.temperatureAvg == 2}
                                           onChange={this.handleTemperatureAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-fire temperatureicon"></span>
                                        <span className="glyphicon glyphicon-fire temperatureicon"></span>
                                    </label>
                                </div>
                                <div className="radio disabled">
                                    <input type="radio" name="temperatureAvg" value={1}
                                           checked={this.state.temperatureAvg == 1}
                                           onChange={this.handleTemperatureAvgChange}/>
                                    <label>
                                        <span className="glyphicon glyphicon-fire temperatureicon"></span>
                                    </label>
                                </div>
                            </div>

                            <label>
                                Target Soil Moisture Conditions
                            </label>
                            <div className="form-group padd-radios">
                                <div className="radio">
                                    <input type="radio" name="soilAvg" value={3} checked={this.state.soilAvg == 3}
                                           onChange={this.handleSoilAvgChange}/><label><span
                                    className="glyphicon glyphicon-tint soilmoistureicon"></span>
                                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span></label>
                                </div>
                                <div className="radio">
                                    <input type="radio" name="soilAvg" value={2} checked={this.state.soilAvg == 2}
                                           onChange={this.handleSoilAvgChange}/><label>
                                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                                </label>
                                </div>
                                <div className="radio disabled">
                                    <input type="radio" name="soilAvg" value={1} checked={this.state.soilAvg == 1}
                                           onChange={this.handleSoilAvgChange}/><label>
                                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                                </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <input className="btn" type="submit" value="Update plant profile" onClick={this.handleCreateClick}/>
            </form>
        );
    }
}

export default Plantform;
