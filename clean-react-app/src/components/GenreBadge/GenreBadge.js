import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../../store";
import {NavLink} from "react-router-dom";
import css from './genre.module.css'


const GenreBadge = () => {

    const dispatch = useDispatch();
    const {genres: {genres}, statusGenres} = useSelector(state => state['movieReducer'])
    useEffect(() => {
        dispatch(getGenres())
    }, [])

    console.log(genres && genres)

    return (
        <div className={css.genreWrap}>
            {statusGenres && <h1>Loading...</h1>}
            <div className={css.links}>
                <div className={css.titleBlock}><span>Жанры</span></div>
                {genres && genres.map(genre =>
                    <NavLink key={genre.id} to={''}>{genre.name}</NavLink>
                )}
            </div>
        </div>
    );
};

export {GenreBadge};