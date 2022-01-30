import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={'header'}>
            header
            <NavLink to={'cars'}>Cars</NavLink>
            <NavLink to={'users'}>Users</NavLink>

        </div>
    );
};

export default Header;