import React from 'react';
import {Outlet} from 'react-router-dom'

import css from './layout.module.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className={css.layout}>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;