import React, {Component} from "react";
import Light from "./Light";
import WaterChart from "./WaterChart";
import Humidity from "./Humidity";
import Temperature from "./Temperature";
import Chart from './Chart';

class ChartBox extends Component {

    render() {

        return (
            <div>
                <h2>Chart Box</h2>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Light />
                        </div>
                        <div className="col-sm-6">
                            <WaterChart />
                        </div>
                    </div>
                </div>
                <div className="Container">
                    <div className="row">
                        <div className="col-sm-6">
                            <Temperature />
                        </div>
                        <div className="col-sm-6">
                            <Humidity />
                        </div>
                    </div>
                </div>
                <Chart />
            </div>
        );
    }
}

export default ChartBox;