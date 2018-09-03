import React, {Component} from 'react';
import PlantList from './PlantList';
import url from '../../config/sensordataurl';

class PlantBox extends Component {
    state = {plant: []};

    componentDidMount() {
        let self = this;
        fetch(url.url + '/plants/' + localStorage.getItem('UID'))
            .then((resp) => {
                return resp.json();
            })
            .then((obj) => {
                self.setState({plant: obj});
                console.log("Object", obj);
            })

    };

    render() {
        return (
            <div>
                <PlantList plant={this.state.plant}/>
            </div>
        );
    }
}

export default PlantBox;