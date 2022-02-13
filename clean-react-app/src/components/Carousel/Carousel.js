import React, {useEffect} from 'react';
import css from "./carousel.module.css";
import {TopMovie} from "../TopMovie/TopMovie";
import {useDispatch, useSelector} from "react-redux";
import {getPopular} from "../../store";
import {NavLink} from "react-router-dom";

const Carousel = () => {
    const {popular, error, statusPopular} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopular())
    }, [])

    return (
        <div>
            {statusPopular === 'pending' && <h1>Loading...</h1>}
                <div className={css.carouselWrap}>
                    <div className={css.navPanel}>
                        <NavLink to={'/'}><span>ГЛАВНАЯ</span></NavLink>
                        <NavLink to={'/latest'}><span>НОВИНКИ</span></NavLink>
                        <NavLink to={'/tv'}><span>СЕРИАЛЫ</span></NavLink>
                        <NavLink to={'/orderdesc'}><span>СТОЛ ЗАКАЗОВ</span></NavLink>
                    </div>
                    <div className={css.horizontal}>
                        {popular.results && popular.results.map(movieTop => <TopMovie key={movieTop.id}
                                                                                      movie={movieTop}/>)}
                    </div>
                </div>
        </div>
    );
};

export default Carousel;