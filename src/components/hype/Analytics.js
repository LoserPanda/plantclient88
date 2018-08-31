import React, {Component} from 'react';
import analyysi from './analyysi.png';


class Analytics extends Component {


    render() {
        return (
            <div>

                <h2>Analytics</h2>
                <hr/>
                <img src={analyysi} width="300" height="300" className="analytics" alt="joujou"/>
                <p>Interactive charts</p>

            </div>
        )
    }
}

export default Analytics;