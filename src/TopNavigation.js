import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './app.css';
import app from "./base";

class TopNavigation extends Component {

    logout = () => {
        app.auth().signOut().then(() => {
            localStorage.removeItem("UID");
            localStorage.removeItem("email");
            console.log("logged out successfully");
        }, err => {
            console.log("unable to logout", err);
        });
    };

    render() {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><p className="fontjou">Kasv<span className="IO">IO</span></p></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem className="fontjou" eventKey={1} href="/">Dashboard</NavItem>
                        <NavItem className="fontjou" eventKey={2} href="/profile">Plant Profile</NavItem>
                        {/*<NavItem eventKey={2} href="/chartbox">ChartBox</NavItem>
                        <NavDropdown eventKey={3} title="Browse Data" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} href="/">Show humidity</MenuItem>
                            <MenuItem eventKey={3.2} href="/">Show temperature</MenuItem>
        </NavDropdown>*/}
                        <NavItem className="fontjou" eventKey={3} onClick={this.logout} href="/">Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNavigation;