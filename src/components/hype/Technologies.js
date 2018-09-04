import React, {Component} from 'react';
import palmu from "./palmu.png";


class Technologies extends Component {


    render() {
        return (
            <div>
                <h2>Plants</h2>
                <hr/>
                <div className="imgContainer">
                    <img className="NikosImg" src={palmu} alt="Plants"/>
                    <div className="overlay">
                        <div className="text">Plants</div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Technologies;