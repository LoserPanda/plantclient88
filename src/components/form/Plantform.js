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

      componentDidMount(){
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
      let olio = {
        plantID: this.state.plantID,
        name: this.state.name,
        photolink: this.state.photolink,
        soilAvg: this.state.soilAvg,
        lightAvg: this.state.lightAvg,
        humidityAvg: this.state.humidityAvg,
        temperatureAvg: this.state.temperatureAvg
      };
        e.preventDefault();
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
    handleInitialState = () =>{
      setTimeout((e) => {
        this.setState({name: this.props.name, plantID: this.props.plantID,
        photolink: this.props.photolink,
        soilAvg: this.props.soilAvg,
        lightAvg: this.props.lightAvg,
        humidityAvg: this.props.humidityAvg,
        temperatureAvg: this.props.temperatureAvg});

        console.log(this.state);
      }, 1000)
}

    render() {

        return (
            <form>
                <label>
                    Plant Name
                </label>
                    <input type="text" placeholder="Plant Name" value={this.state.name}  onChange={this.handleNameChange}/>
                <label>
                    Photo Link
                </label>
                <input type="text" placeholder="Photo Link" value={this.state.photolink}
                       onChange={this.handlePhotolinkChange}/>
                <label>
                    Target Light Conditions
                </label>
                <input type="text" placeholder="Target Light Conditions" value={this.state.lightAvg}
                       onChange={this.handleLightAvgChange}/>
                <label>
                    Target Humidity Conditions
                </label>
                <input type="text" placeholder="Target Humidity Conditions" value={this.state.humidityAvg}
                       onChange={this.handleHumidityAvgChange}/>
                <label>
                    Target Temperature Conditions
                </label>
                <input type="text" placeholder="Target Temperature Conditions" value={this.state.temperatureAvg}
                       onChange={this.handleTemperatureAvgChange}/>
                <label>
                    Target Soil Moisture Conditions
                </label>
                <input type="text" placeholder="Target Soil Moisture Conditions" value={this.state.soilAvg}
                       onChange={this.handleSoilAvgChange}/>

                <input className="btn" type="submit" value="Update plant profile" onClick={this.handleCreateClick}/>
            </form>
        );
    }
}

export default Plantform;
