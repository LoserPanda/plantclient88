import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, Voronoi} from 'react-vis';
import url from '../../config/sensordataurl';
import '../../../node_modules/react-vis/dist/style.css';

class Chart extends Component {


    state = {results: []};

    componentDidMount() {
        fetch(url.url + "/sensordata/hour/byuserid/" + localStorage.getItem("UID"))
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
        const dataArr = this.state.results.map((d) => {
            return {
                x: d.time,
                y: parseFloat(d.light)
            }
        });

        return (
            <div>
                <h2>Light</h2>
                <div id="datapoint">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Time
                            </td>
                            <td id="time">

                            </td>
                        </tr>
                        <tr>
                            <td>
                                Light
                            </td>
                            <td id="light">

                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <XYPlot
                    onMouseLeave={() => this.setState({crosshairValues: []})}
                    xType="ordinal"
                    width={600}
                    height={300}
                    yDomain={[0, 100]}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="Time"/>
                    <YAxis title="Light"/>
                    <LineSeries
                        style={{stroke: 'red', strokeWidth: 2}}
                        onNearestX={(datapoint, {index}) => {
                            document.getElementById("time").innerText = datapoint.x;
                            document.getElementById("light").innerText = datapoint.y;
                        }}
                        data={dataArr}
                    />
                </XYPlot>
            </div>
        );
    }
}

export default Chart;
