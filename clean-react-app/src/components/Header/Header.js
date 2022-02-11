import React from 'react';

import css from './header.module.css'
import {UserInfo} from "../UserInfo/UserInfo";

const Header = () => {
    return (
        <div className={css.headerWrap}>
            <div className={css.logo}>
                <img src={"https://kinogo.zone/templates/tmp/images/kinogo.png"} alt={"смотреть киного онлайн"}/>
            </div>
            <div style={{display:'flex', gap:'20px'}}>
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