import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, Voronoi} from 'react-vis';
import url from '../../config/sensordataurl';
import '../../../node_modules/react-vis/dist/style.css';

class Chart extends Component {


    state = {results: []};

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
                    xType="ordinal"
                    width={600}
                    height={300}
                    yDomain={[0, 100]}>
                    <VerticalGridLines/>
                    <HorizontalGridLines/>
                    <XAxis title="Time"/>
                    <YAxis title="Light"/>
                    <LineSeries
                        data={dataArr}
                        style={{stroke: 'red', strokeWidth: 2}}
                        onNearestXY={(datapoint, {index}) => {
                            console.log({index});
                        }}
                    />
                </XYPlot>
            </div>
        );
    }
}

export default Chart;
