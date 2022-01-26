import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './layout.module.css'

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/episodes">Rick and Morty</NavLink>
            </div>

            <div className={css.outlet}>
                <Outlet/>
            </div>

            <div className={css.footer}>
                <h4>Additional Work</h4>
            </div>
        </>
    );
};

export default Layout;