import React, {Component} from 'react';
import johannes from './johannes.jpg';
import niko from './niko.jpg';
import saana from './saana.jpg';

class TeamMembers extends Component {


    render() {
        return (
            <div>
                <div className="container">
                    <h2 className="centered">Team</h2>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3 className="centered">Johannes</h3>
                            <hr/>
                            <div className="imgContainer">
                                <img className="NikosImg" src={johannes} alt="Analytics"/>
                                <div className="overlay">
                                    <div className="text">Technology & performance artist, startup-NGO coordinator and enthusiastic arduino hacker</div>
                                </div>
                            </div>
                            <hr/>
                            <h4 className="centered">Root Master</h4>
                            <hr/>
                        </div>
                        <div className="col-sm-4">
                            <h3 className="centered">Niko</h3>
                            <hr/>
                            <div className="imgContainer">
                                <img className="NikosImg" src={niko} alt="Analytics"/>
                                <div className="overlay">
                                    <div className="text">Data Driven Social Scientist with Experience in Customer Data Analysis</div>
                                </div>
                            </div>
                            <hr/>
                            <h4 className="centered">Plant Managing Director</h4>
                            <hr/>
                        </div>
                        <div className="col-sm-4">
                            <h3 className="centered">Saana</h3>
                            <hr/>
                            <div className="imgContainer">
                                <img className="NikosImg" src={saana} alt="Analytics"/>
                                <div className="overlay">
                                    <div className="text">Backgroud in Management Studies, Mathematics and Intelligent Electronic Devices</div>
                                </div>
                            </div>
                            <hr/>
                            <h4 className="centered">Chief Ecosystem Officer</h4>
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TeamMembers;