import React from 'react';
import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.headerWrap}>
            <div className={css.logo}>
                <img src={"https://kinogo.zone/templates/tmp/images/kinogo.png"} alt={"смотреть киного онлайн"}/>
            </div>
            <div>
                <form>
                    <input type={'text'} placeholder={'Поиск'}/>
                    <button>ok</button>
                </form>
            </div>
        </div>
    );
};

export {Header};