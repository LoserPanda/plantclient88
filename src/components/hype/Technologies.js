import React, {Component} from 'react';
import plant from "./plant.jpg";


class Technologies extends Component {


    render() {
        return (
            <div>
                <h2 className="centered">Plants</h2>
                <hr/>
                <div className="imgContainer">
                    <img className="NikosImg" src={plant} alt="Plants"/>
                    <div className="overlay">
                        <div className="text">
                            KasvIO cares about your plant's well-being
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Technologies;