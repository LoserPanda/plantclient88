import React, {Component} from 'react'
import url from '../../config/sensordataurl';

class DataTable extends Component {

  state = {results: []}

componentDidMount(){
  fetch(url.url + "/plants/lightAvg/" + localStorage.getItem("UID"))
      .then(response => {
          if (response.ok) {
              return response.json();
          }
          else {
              throw new Error('Data not found')
          }
      })
      .then(data => {
          this.setState({results: data});
      });
}


       render() {
         return (
           <div className="table-responsive col-md-4">
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
                      <td>Optimal</td>
                    </tr>
                    <tr className="danger">
                      <td>Humidity</td>
                      <td>{this.props.humidity}</td>
                      <td>Just breezing</td>
                    </tr>
                    <tr className="info">
                      <td>Temperature</td>
                      <td>{this.props.temperature}</td>
                      <td>Perfect</td>
                    </tr>
                    <tr className="warning">
                      <td>Soil Moisture</td>
                      <td>{this.props.soilmoisture}</td>
                      <td>{this.state.results}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
                 )
             }
         };

export default DataTable;
