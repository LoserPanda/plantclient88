import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, Voronoi} from 'react-vis';
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

    render() {
        const dataArr = this.state.results.map((d) => {
            return {
                x: d.time,
                y: parseFloat(d.light)
            }
        });

        return (
            <div className="jou">
                <h2>{this.props.title}</h2>
                <div id="datapoint">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                Time
                            </td>
                            <td id={this.props.title + "time"}>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                {this.props.title}
                            </td>
                            <td id={this.props.title}>

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
                    width={600}
                    height={300}
                    yDomain={[0, 100]}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="Time"/>
                    <YAxis title={this.props.title}/>
                    <LineSeries
                        style={{stroke: this.props.color, strokeWidth: 2}}
                        onNearestX={(datapoint, {index}) => {
                            document.getElementById(this.props.title + "time").innerText = datapoint.x;
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
