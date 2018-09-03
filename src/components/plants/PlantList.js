import React, {Component} from 'react';

import Plant from "./Plant";

class PlantList extends Component {
    render() {
        var plantlist = this.props.plant.map(plant =>
            <Plant key={plant.plantID} plant={plant}/>
        );
        return (
            <table className="table-responsive table-hover">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Image</th>
                </tr>
                </thead>
                <tbody>
                {plantlist}
                </tbody>
            </table>
        )
    }
}

export default PlantList;