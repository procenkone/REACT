import React from 'react';
import {NavLink} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to={'cars'}>Cars</NavLink>
            <NavLink to={'users'}>Users</NavLink>
        </div>
    );
};

export default Header;