import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            <NavLink to={'/users'}>USERS</NavLink>
            _____
            <NavLink to={'/posts'}>POSTS</NavLink>

        </div>
    );
};

export default Header;