import React, {Component} from 'react';
import circuit from "./circuit.png";


class Sensors extends Component {


    render() {
        return (
            <div>
                <h2 className="centered">Hardware</h2>
                <hr/>
                <div className="imgContainer">
                    <img className="NikosImg" src={circuit} alt="Sensors"/>
                    <div className="overlay">
                        <div className="text">
                            Orange PI zero, Arduino Uno,
                            DHT11 temperature and humidity sensor module,
                            YL-69 soil moisture sensor module,
                            Photoresistor sensor module
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Sensors;