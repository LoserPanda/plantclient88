import React, {Component} from 'react';
import Plantdata from './Plantdata';

class Plantform extends Component {
    state = {plantID: "", name: '', photolink: '', soilAvg: '', lightAvg: "", humidityAvg: "", temperatureAvg: ""};

    handleNameChange = (e) => {
        const uusinimi = e.target.value;
        this.setState({name: uusinimi});
    };
    handlePhotolinkChange = (e) => {
        this.setState({photolink: e.target.value});
    };
    handlePlantIDChange = (e) => {
        this.setState({plantID: e.target.value});
    };
    handleSoilAvgChange = (e) => {
        this.setState({soilAvg: e.target.value});
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
        e.preventDefault();
        this.props.addData(this.state);
        this.setState({name: '', photolink: '', soilAvg: '', lightAvg: "", humidityAvg: "", temperatureAvg: ""});
    };


    render() {
        return (
            <form>
                <label>
                    Plant Name
                </label>
                    <input type="text" placeholder="Plant Name" value={this.props.name} onChange={this.handleNameChange}/>
                <label>
                    Photo Link
                </label>
                <input type="text" placeholder="Photo Link" value={this.props.photolink}
                       onChange={this.handlePhotolinkChange}/>
                <label>
                    Target Light Conditions
                </label>
                <input type="text" placeholder="Target Light Conditions" value={this.props.lightAvg}
                       onChange={this.handleLightAvgChange}/>
                <label>
                    Target Humidity Conditions
                </label>
                <input type="text" placeholder="Target Humidity Conditions" value={this.props.humidityAvg}
                       onChange={this.handleHumidityAvgChange}/>
                <label>
                    Target Temperature Conditions
                </label>
                <input type="text" placeholder="Target Temperature Conditions" value={this.props.temperatureAvg}
                       onChange={this.handleTemperatureAvgChange}/>
                <label>
                    Target Soil Moisture Conditions
                </label>
                <input type="text" placeholder="Target Soil Moisture Conditions" value={this.props.soilAvg}
                       onChange={this.handleSoilAvgChange}/>

                <input className="btn" type="submit" value="Add plant" onClick={this.handleCreateClick}/>
            </form>
        );
    }
}

export default Plantform;
