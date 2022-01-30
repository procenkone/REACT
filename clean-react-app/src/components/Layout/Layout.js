import React from 'react';
import {Outlet} from 'react-router-dom'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    return (
        <div className={'layout'}>
            layout
            <Header/>
            <div className={'outlet'}>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;