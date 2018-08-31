import React, {Component} from 'react';
import analyysi from "./analyysi.png";


class Sensors extends Component {


    render() {
        return (
            <div>
                <h2>Sensors</h2>
                <hr/>
                <img src={analyysi} width="300" height="300" className="sensors" alt="joujou"/>
                <p>Sensor your plant with the latest technologies</p>

            </div>
        )
    }
}

export default Sensors;