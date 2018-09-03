import React, { Component } from 'react';
import Analytics from './Analytics';
import Sensors from './Sensors';
import Technologies from './Technologies';

class Hype extends Component {


    render() {
        return (
            <div className="minHeight">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <Analytics />
                        </div>
                        <div className="col-sm-4">
                            <Sensors />
                        </div>
                        <div className="col-sm-4">
                            <Technologies />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hype;
