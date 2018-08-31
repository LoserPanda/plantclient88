import React, {Component} from 'react';
import analyysi from "./analyysi.png";


class Technologies extends Component {


    render() {
        return (
            <div>
                <h2>Technologies</h2>
                <hr/>
                <img src={analyysi} width="300" height="300" className="analytics" alt="joujou"/>
                <p>Lorem ipsum</p>

            </div>
        )
    }
}

export default Technologies;