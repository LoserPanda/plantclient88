import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
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
    }

    render() {
        return (
            <Navbar staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Navigation</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">Home</NavItem>
                        <NavDropdown eventKey={2} title="Browse Data" id="basic-nav-dropdown">
                            <MenuItem eventKey={2.1} href="/">Show humidity</MenuItem>
                            <MenuItem eventKey={2.2} href="/">Show temperature</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={3} onClick={this.logout} href="/">Logout</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default TopNavigation;