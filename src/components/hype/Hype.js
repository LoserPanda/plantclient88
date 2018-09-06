import React, {Component} from 'react';
import Analytics from './Analytics';
import Sensors from './Sensors';
import Technologies from './Technologies';

class Hype extends Component {


    render() {
        return (
            <div>
                <h2 className="centered">Invention</h2>
                <hr/>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Analytics/>
                        </div>
                        <div className="col-sm-4">
                            <Sensors/>
                        </div>
                        <div className="col-sm-4">
                            <Technologies/>
                        </div>
                    </div>
                </div>
                <div>
                    <h4 className="centered">
                        KasvIO is designed to understand the needs of your beloved plant. You can conveniently track the
                        level of moisture, air humidity, lighting and temperature.
                        Photosynthesis is a phenomenon, which requires water, sunlight and optimal temperature.
                        Furthermore,
                        these values may vary significantly for different plants.
                        With KasvIo you can easily choose the best conditions for your plant to grow in.
                    </h4>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Hype;
