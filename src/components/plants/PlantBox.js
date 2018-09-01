import React, {Component} from 'react';
import PlantList from './PlantList';
import url from '../../config/sensordataurl';

class PlantBox extends Component {
    state = {plant: []};

    componentDidMount() {
        var itse = this;
        fetch(url.url + '/plants/' + localStorage.getItem('UID'))
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                itse.setState({plant: obj});
                console.log("Object", obj);
            })

    };

    render() {
        return (
            <div>
                <h2>List of User's Plants</h2>
                <PlantList plant={this.state.plant}/>
            </div>
        );
    }
}

export default PlantBox;