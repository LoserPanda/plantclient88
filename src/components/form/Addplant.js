import React, {Component} from 'react';
import Plantform from "./Plantform";
import url from '../../config/sensordataurl';


class Addplant extends Component {
    state = {
      data: [],
      name: "",
      plantID: "",
      photolink: '',
      soilAvg: '',
      lightAvg: "",
      humidityAvg: "",
      temperatureAvg: ""
    };

    componentDidMount(){
      //TSEKKAA ONKO PLÄNT JO
      fetch(url.url + "/plants/getbyuserid/" + localStorage.getItem("UID"))
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
          this.setState({data: data});
          this.setState({plantID: data[0].plantID});
          this.setState({name: data[0].name});
          this.setState({photolink: data[0].photolink});
          this.setState({soilAvg: data[0].soilAvg});
          this.setState({lightAvg: data[0].lightAvg});
          this.setState({humidityAvg: data[0].humidityAvg});
          this.setState({temperatureAvg: data[0].temperatureAvg});
      });
    }
    //


    render() {
        return (
            <div id="content">
                <Plantform name={this.state.name} photolink={this.state.photolink} soilAvg={this.state.soilAvg} lightAvg={this.state.lightAvg} humidityAvg={this.state.humidityAvg} temperatureAvg={this.state.temperatureAvg} plantID={this.state.plantID} />
            </div>
        );
    }
}

export default Addplant;
