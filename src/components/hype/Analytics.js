import React, {Component} from 'react';
import analyysi from './analyysi.png';


class Analytics extends Component {


    render() {
        return (
            <div>
                <h2 className="centered">Analytics</h2>
                <hr/>
                <div className="imgContainer">
                    <img className="NikosImg" src={analyysi} alt="Analytics"/>
                    <div className="overlay">
                        <div className="text">
                            Utilise KasvIO's data-analytics to keep up with the daily life of your plant
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Analytics;