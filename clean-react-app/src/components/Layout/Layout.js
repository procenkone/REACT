import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            Layout
            <Header/>

            <div className={'outlet'}>
                <Outlet/>
            </div>

            <Footer/>

        </div>
    );
};

export default Layout;