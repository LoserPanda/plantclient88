import React, {Component} from "react";
import Chart from './Chart';

class ChartList extends Component {

    render() {

        return (
            <div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Chart title={"Light"} query={"light"} color={"orange"} time={this.props.time}/>
                        </div>
                        <div className="col-sm-6">
                            <Chart title={"Humidity"} query={"humidity"} color={"blue"} time={this.props.time}/>
                        </div>
                    </div>
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Chart title={"Temperature"} query={"temperature"} color={"red"} time={this.props.time}/>
                        </div>
                        <div className="col-sm-6">
                            <Chart title={"Soil Moisture"} query={"soilmoisture"} color={"green"} time={this.props.time}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChartList;