import React, { Component } from 'react';
import analyysi from './analyysi.png';


class Analytics extends Component {


    render() {
        return (
            <div className="imgContainer">

                <h2>Analytics</h2>
                <hr />
                <img className="NikosImg" src={analyysi} alt="Analytics" />
                <hr />
                <p>Interactive charts</p>
                <hr />
                <div className="overlay">
                    <div className="text">Analytics</div>
                </div>

            </div>
        )
    }
}

export default Analytics;