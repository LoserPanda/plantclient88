import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, Voronoi} from 'react-vis';
import url from '../../config/sensordataurl';
import '../../../node_modules/react-vis/dist/style.css';
import Crosshair from "react-vis/es/plot/crosshair";

class Chart extends Component {


    state = {results: [], crosshairValues: []};

    componentDidMount() {
        fetch(url.url + "/sensordata/byuserid/" + localStorage.getItem("UID"))
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
                            console.log(datapoint, {index});
                            console.log(dataArr, "data");
                            this.setState({crosshairValues: dataArr.map(d => d[index])})
                            console.log("tama", this.state.crosshairValues);
                            }}
                        data={dataArr}
                    />
                    <Crosshair values={this.state.crosshairValues}/>
                </XYPlot>
            </div>
        );
    }
}

export default Chart;
