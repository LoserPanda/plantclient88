import React, {Component} from 'react';
import Plantform from "./Plantform";

class Addplant extends Component {
    state = {data: []};

    handleDataAdded = (p) => {
        console.log(p);
        fetch('???????????????', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(p)
        })
            .then(res => {
                alert("Plant added!");
                this.componentDidMount();
            })
    };

    render() {
        return (
            <div id="content">
                <Plantform tiedot={this.state.data} addData={this.handleDataAdded}/>
            </div>
        );
    }
}

export default Addplant;
