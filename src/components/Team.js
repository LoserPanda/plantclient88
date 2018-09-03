import React, {Component} from 'react';
import Horse from './pic/horse.jpeg'
class Team extends Component {

    render() {
        return (

            <div>
                <h1>TIIMI JEE</h1>
                <img src={Horse} alt="Team Behind The Banana Project"/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        );
    }
}

export default Team;
