import React from 'react';
import {Link} from "react-router-dom"
const Nav = () => {
    return (
        <nav>
            <Link to="/">홈</Link>
            <Link to="/sub1">메뉴1</Link>
            <Link to="/sub2">메뉴2</Link>
        </nav>
    );
};

export default Nav;