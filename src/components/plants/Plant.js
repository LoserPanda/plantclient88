import React, {Component} from 'react';

class Plant extends Component {

    render() {
        return (
            <tr>
                <td>{this.props.plant.name}</td>
                <td><img className='imageResizer' alt={'Image of ' + this.props.plant.name} src={this.props.plant.photolink}/></td>
            </tr>
        )
    }
}

export default Plant;