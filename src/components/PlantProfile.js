import React, {Component} from 'react';
import TopNavigation from "../TopNavigation";
import Addplant from "./form/Addplant"


class PlantProfile extends Component {

    render() {
        return (
            <div>
                <TopNavigation/>
                <div className="container">
                    <h2>Plant Profile</h2>
                    <p>Here you can update your plant profile to help your plant to communicate with you better. Please be careful with choosing the right target conditions. This will quarantee you the best possible outcome.</p>
                    <br/>
                    <Addplant/>
                </div>
            </div>
        );
    }
}

export default PlantProfile;
