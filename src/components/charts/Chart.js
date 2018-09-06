import React, {Component} from 'react';
import {XYPlot, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
import '../../../node_modules/react-vis/dist/style.css';

class Chart extends Component {

    handleTime = (time) => {
        let heatOfTheMoment = new Date(time);
        return heatOfTheMoment.toLocaleString();
    };

    giveInfo = (jou) => {
        if (jou === "minute") {
            return "Results from last 1 hour"
        } else if (jou === "hour") {
            return "Results from last 7 days"
        } else if (jou === "day") {
            return "Results from last 14 days"
        } else if (jou === "month") {
            return "Results from last 12 months"
        }
    };


    render() {
        const query = this.props.query;
        var dataArr;
        if (query === "light") {
            dataArr = this.props.data.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.light)
                }
            });
        } else if (query === "humidity") {
            dataArr = this.props.data.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.humidity)
                }
            });
        } else if (query === "soilmoisture") {
            dataArr = this.props.data.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.soilmoisture)
                }
            });
        } else if (query === "temperature") {
            dataArr = this.props.data.map((d) => {
                return {
                    x: d.time,
                    y: parseFloat(d.temperature)
                }
            });
        }

        return (
            <div className="table-responsive">
                <h2>{this.props.title} <span className="chart-info">
                    ({this.giveInfo(this.props.time)})
                </span></h2>
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