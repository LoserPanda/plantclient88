import React, {Component} from "react";

class RadioButtons extends Component {


    render() {

        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                        <form>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option1"
                                           checked={this.state.selectedOption === 'option1'}
                                           onChange={this.handleOptionChange}/>
                                    Option 1
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option2"
                                           checked={this.state.selectedOption === 'option2'}
                                           onChange={this.handleOptionChange}/>
                                    Option 2
                                </label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" value="option3"
                                           checked={this.state.selectedOption === 'option3'}
                                           onChange={this.handleOptionChange}/>
                                    Option 3
                                </label>
                            </div>
                        </form>

                    </div>
                </div>
            </div>


        );
    }
}

export default RadioButtons;