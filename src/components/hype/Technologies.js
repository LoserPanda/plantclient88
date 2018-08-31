import React, {Component} from 'react';
import analyysi from "./analyysi.png";


class Technologies extends Component {


    render() {
        return (
            <div>
                <h2>Plants</h2>
                <hr/>
                <img src={analyysi} width="300" height="300" className="analytics" alt="joujou"/>
                <hr/>
                <p>Hits from the bong</p>
                <hr/>
            </div>
        )
    }
}

export default Technologies;