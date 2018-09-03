import React, {Component} from 'react';

import Plant from "./Plant";

class PlantList extends Component {
    render() {
        var plantlist = this.props.plant.map(plant =>
            <Plant key={plant.plantID} plant={plant}/>
        );
        return (
            <div>
                {plantlist}
            </div>
        )
    }
}

export default PlantList;