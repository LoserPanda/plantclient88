import React, {Component} from 'react';
import circuit from "./circuit.png";


class Sensors extends Component {


    render() {
        return (
            <div>
                <h2>Sensors</h2>
                <hr/>
                <img className="NikosImg" src={circuit} alt="Sensors"/>
                <hr/>
                <p>Sensor your plant with the latest technologies</p>
                <hr/>
            </div>
        )
    }
}

export default Sensors;