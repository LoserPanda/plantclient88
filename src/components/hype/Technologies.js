import React, {Component} from 'react';
import palmu from "./palmu.png";


class Technologies extends Component {


    render() {
        return (
            <div>
                <h2>Plants</h2>
                <hr/>
                <img src={palmu} width="300" height="300" className="analytics" alt="joujou"/>
                <hr/>
                <p>Hits from the bong</p>
                <hr/>
            </div>
        )
    }
}

export default Technologies;