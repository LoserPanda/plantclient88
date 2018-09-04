import React, {Component} from 'react';
import analyysi from './analyysi.png';


class Analytics extends Component {


    render() {
        return (
            <div>
                <h2>Analytics</h2>
                <hr/>
                <div className="imgContainer">
                    <img className="NikosImg" src={analyysi} alt="Analytics"/>
                    <div className="overlay">
                        <div className="text">Analytics</div>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Analytics;