import React, {Component} from 'react';
import palmu from "./palmu.png";


class Technologies extends Component {


    render() {
        return (
            <div>
                <h2>Plants</h2>
                <hr/>
                <img className="NikosImg" src={palmu} alt="Analytics"/>
                <hr/>
                <p>Hits from the bong</p>
                <hr/>
            </div>
        )
    }
}

export default Technologies;