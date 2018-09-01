import React, {Component} from 'react';

class Plantform extends Component {
    handleNameChange = (e) => {
        const uusinimi = e.target.value;
        this.setState({name: uusinimi});
    };
    handlePhotolinkChange = (e) => {
        this.setState({photolink: e.target.value});
    };
    handleUserIDChange = (e) => {
        this.setState({userID: e.target.value});
    };
    handleCreateClick = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
        this.setState({name: '', photolink: '', userID: ''});
    };
    state = {name: '', photolink: '', userID: ''};

    render() {
        return (
            <form>
                <input type="text" placeholder="Plant Name" value={this.state.name} onChange={this.handleNameChange}/>
                <input type="text" placeholder="Photo Link" value={this.state.photolink}
                       onChange={this.handlePhotolinkChange}/>
                <input type="text" placeholder="User ID" value={this.state.userID} onChange={this.handleUserIDChange}/>
                <input type="submit" value="Create" onClick={this.handleCreateClick}/>
            </form>
        );
    }
}

export default Plantform;
