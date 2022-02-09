import React, {useEffect} from 'react';
import css from "./carousel.module.css";
import {TopMovie} from "../TopMovie/TopMovie";
import {useDispatch, useSelector} from "react-redux";
import {getPopular} from "../../store";

const Carousel = () => {
    const { popular, error, status} = useSelector(state => state['movieReducer']);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPopular())
    }, [])
    return (
        <div>
            <div className={css.carouselWrap}>
                <div className={css.horizontal}>
                    {popular.results && popular.results.map(movieTop => <TopMovie key={movieTop.id} movie={movieTop}/>)}
                </div>
            </div>

        </div>
    );
};

export default Carousel;