import React from 'react';
import {Outlet} from "react-router-dom";
import {Footer, Header} from "../index";
import css from './layout.module.css'
import Carousel from "../Carousel/Carousel";


const Layout = () => {
    return (
        <div className={css.wrapLayout}>
            <Header/>
            <Carousel/>
            <div>
                <Outlet/>
            </div>
            {/*<main>*/}
            {/*    {children}*/}
            {/*</main>*/}
            <Footer/>
        </div>
    );
};

export {Layout};