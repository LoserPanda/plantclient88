import React, {Component} from 'react';
import TopNavigation from "../TopNavigation";

class PlantProfile extends Component {

    render() {
        return (
            <div>
                <TopNavigation/>
                <div className="container">
                    <h2>Plant Profile</h2>
                    <p>Possibility to view and update plant profile and care regime settings here!</p>
                </div>
            </div>
        );
    }
}

export default PlantProfile;