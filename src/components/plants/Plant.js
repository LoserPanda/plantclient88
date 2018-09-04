import React, {Component} from 'react';

class Plant extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div>
                            <h1>{this.props.plant.name}'s Care Regime</h1>
                        </div>
                        <div>
                            <img className='imageResizer' alt={'Image of ' + this.props.plant.name}
                                 src={this.props.plant.photolink}/>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Plant;