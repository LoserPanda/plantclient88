import React, {Component} from 'react';
import circuit from "./circuit.png";


class Sensors extends Component {


    render() {
        return (
            <div>
                <h2>Sensors</h2>
                <hr/>
                <div className="imgContainer">
                    <img className="NikosImg" src={circuit} alt="Sensors"/>
                    <div className="overlay">
                        <div className="text">Sensors</div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Sensors;