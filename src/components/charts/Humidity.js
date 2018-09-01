import React, {Component} from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries, MarkSeries, Voronoi} from 'react-vis';
import url from '../../config/sensordataurl';
import '../../../node_modules/react-vis/dist/style.css';

class Humidity extends Component {


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
                y: parseFloat(d.humidity)
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
                    <YAxis title="Humidity"/>
                    <LineSeries
                        data={dataArr}
                        style={{stroke: 'green', strokeWidth: 2}}/>
                </XYPlot>
            </div>
        );
    }
}

export default Humidity;
