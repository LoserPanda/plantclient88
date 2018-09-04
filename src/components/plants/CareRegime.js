import React, {Component} from 'react';
import url from '../../config/sensordataurl';

class PlantBox extends Component {
    state = {plant: []};

    componentDidMount() {
        let self = this;
        fetch(url.url + '/plants/getphoto/' + localStorage.getItem('UID'))
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                self.setState({plant: obj[0]});
            })

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
        if (this.state.plant.temperatureAvg === 3) {
            soilmoistureAmount = (
                <div>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                </div>)
        } else if (this.state.plant.temperatureAvg === 2) {
            soilmoistureAmount = (
                <div>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                    <span className="glyphicon glyphicon-tint soilmoistureicon"></span>
                </div>)
        } else if (this.state.plant.temperatureAvg === 1) {
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
                            <th colspan="2">
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
            </div>
        );
    }
}

export default PlantBox;