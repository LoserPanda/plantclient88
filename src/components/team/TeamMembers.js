import React, {Component} from 'react';
import johannes from './johannes.jpg';
import niko from './niko.jpg';
import saana from './saana.jpg';

class TeamMembers extends Component {


    render() {
        return (
            <div>
                <div className="container">
                    <h2>Team Members</h2>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Johannes</h3>
                            <hr/>
                            <div className="imgContainer">
                                <img className="NikosImg" src={johannes} alt="Analytics"/>
                                <div className="overlay">
                                    <div className="text">Johannetics</div>
                                </div>
                            </div>
                            <hr/>
                            <p>Interactive charts</p>
                            <hr/>
                        </div>
                        <div className="col-sm-4">
                            <h3>Niko</h3>
                            <hr/>
                            <div className="imgContainer">
                                <img className="NikosImg" src={niko} alt="Analytics"/>
                                <div className="overlay">
                                    <div className="text">Nikotics</div>
                                </div>
                            </div>
                            <hr/>
                            <p>Interactive charts</p>
                            <hr/>
                        </div>
                        <div className="col-sm-4">
                            <h3>Saana</h3>
                            <hr/>
                            <div className="imgContainer">
                                <img className="NikosImg" src={saana} alt="Analytics"/>
                                <div className="overlay">
                                    <div className="text">Saanatics</div>
                                </div>
                            </div>
                            <hr/>
                            <p>Interactive charts</p>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamMembers;