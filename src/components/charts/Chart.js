import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries } from 'react-vis';
import url from '../../config/sensordataurl';
import '../../../node_modules/react-vis/dist/style.css';

class Chart extends Component {

    state = {results: []};

    componentDidMount() {
        console.log(this.props.time, "johuighniohujk");
        fetch(url.url + "/sensordata/" + this.props.time + "/byuserid/" + localStorage.getItem("UID"))
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

    handleTime = (time) => {
        let heatOfTheMoment = new Date(time);
        return heatOfTheMoment.toLocaleString();
    };

    render() {
        const query = this.props.query;
        var dataArr;
        if (query === "light") {
            dataArr = this.state.results.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.light)
                }
            });
        } else if (query === "humidity") {
            dataArr = this.state.results.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.humidity)
                }
            });
        } else if (query === "soilmoisture") {
            dataArr = this.state.results.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.soilmoisture)
                }
            });
        } else if (query === "temperature") {
            dataArr = this.state.results.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.temperature)
                }
            });
        }

        return (
            <div className="table-responsive">
                    <h2>{this.props.title}</h2>
                    <div id="datapoint">
                        <table>
                            <tbody>
                            <tr>
                                <td className="chart-info-left">
                                    Time
                                </td>
                                <td className="chart-info-right" id={this.props.title + "time"}>

                                </td>
                            </tr>
                            <tr>
                                <td className="chart-info-left">
                                    {this.props.title}
                                </td>
                                <td className="chart-info-right" id={this.props.title}>

                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <XYPlot
                        onMouseLeave={() => {
                            document.getElementById(this.props.title + "time").innerText = null;
                            document.getElementById(this.props.title).innerText = null;
                        }} xType="ordinal"
                        width={400}
                        height={200}
                        yDomain={[0, 100]}>
                        <VerticalGridLines/>
                        <HorizontalGridLines/>
                        {/*<XAxis title="Time"/>*/}
                        <YAxis title={this.props.title}/>
                        <LineSeries
                            style={{stroke: this.props.color, strokeWidth: 2}}
                            onNearestX={(datapoint, {index}) => {
                                document.getElementById(this.props.title + "time").innerText = this.handleTime(datapoint.x);
                                document.getElementById(this.props.title).innerText = datapoint.y;
                            }}
                            data={dataArr}
                        />
                    </XYPlot>
                </div>
        );
    }
}


export default Chart;
