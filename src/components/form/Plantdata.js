import React, {Component} from 'react';

class Plantdata extends Component {
    // handleDeleteClick = (e) => {
    //     alert("==???==");
    //     e.preventDefault();
    //     this.props.deleteData(this.props.data._id);
    // };
    //
    // handleUpdateClick = (e) => {
    //     e.preventDefault();
    //     this.props.updateData(this.props.data._id);
    // };

    render() {
        return (
            <tr>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.photolink}</td>
                <td>{this.props.data.soilAvg}</td>
                <td>{this.props.data.lightAvg}</td>
                <td>{this.props.data.humidityAvg}</td>
                <td>{this.props.data.temperatureAvg}</td>
                // <td><a href="" onClick={this.handleUpdateClick}>Update</a></td>
                // <td><a href="" onClick={this.handleDeleteClick}>Delete</a></td>
            </tr>
        )
    }
}

export default Plantdata;
