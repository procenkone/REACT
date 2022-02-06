import React from 'react';
import {Footer,Header} from "../index";
import css from './layout.module.css'
const Layout = ({children}) => {
    return (
        <div className={css.wrapLayout}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export {Layout};