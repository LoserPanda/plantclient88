import React, {Component} from 'react';
import Livedata from "./livedata/Livedata"

class Welcome extends Component {

    render() {
        return (
            <div>
                <Livedata/>
                <h2>What happened if plants could speak?</h2>
                <p>Well, they can, now! The Banana Project has finally made it possible to communicate with your plants.</p>
            </div>
        );
    }
}

export default Welcome;
