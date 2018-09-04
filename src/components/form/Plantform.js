import React, {Component} from 'react';
import Plantdata from './Plantdata';

class Plantform extends Component {
  state = {plantID: "",name: '', photolink: '', soilAvg: '', lightAvg: "", humidityAvg: "", temperatureAvg: ""};

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
                <input type="text" placeholder="Plant Name" value={this.props.name} onChange={this.handleNameChange}/>
                <input type="text" placeholder="Photo Link" value={this.props.photolink} onChange={this.handlePhotolinkChange}/>
                <input type="text" placeholder="Soil Average" value={this.props.soilAvg} onChange={this.handleSoilAvgChange}/>
                <input type="text" placeholder="Light Average" value={this.props.lightAvg} onChange={this.handleLightAvgChange}/>
                <input type="text" placeholder="Humidity Average" value={this.props.humidityAvg} onChange={this.handleHumidityAvgChange}/>
                <input type="text" placeholder="Temperature Average" value={this.props.temperatureAvg} onChange={this.handleTemperatureAvgChange}/>

                <input type="submit" value="Add plant" onClick={this.handleCreateClick}/>
            </form>
        );
    }
}

export default Plantform;
