import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

import css from './layout.module.css'
import Temp from "../Temp";

const Layout = () => {
    return (
        <>
            <div className={css.header}>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <Temp/>
            <div className={css.outlet}>
                <Outlet/>
            </div>

            <div className={css.footer}>
                <h4>ClassWork</h4>
            </div>
        </>
    );
};

export default Layout;