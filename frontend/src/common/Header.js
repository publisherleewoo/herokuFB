import React, { Component } from 'react';

import Nav from './Nav';
class Header extends Component {
    render() {
        return (
            <header>
                <h1>TodoApp</h1>
                <Nav></Nav>
            </header>
        );
    }
}

export default Header;