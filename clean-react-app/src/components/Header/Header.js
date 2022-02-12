import React from 'react';

import css from './header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.headerWrap}>
            <div className={css.logo}>
                <NavLink to={'/'}>
                    <img src={"https://kinogo.zone/templates/tmp/images/kinogo.png"} alt={"смотреть киного онлайн"}/>
                </NavLink>
            </div>
            <div style={{display: 'flex', gap: '20px'}}>
                <UserInfo/>
                <form>
                    <input type={'text'} placeholder={'Поиск'}/>
                    <button>ok</button>
                </form>
            </div>
        </div>
    );
};

export {Header};