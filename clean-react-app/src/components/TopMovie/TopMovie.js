import React from 'react';
import css from './topMovie.module.css'
import {NavLink} from "react-router-dom";


const TopMovie = ({movie: {poster_path, title, id, backdrop_path: poster}}) => {
    // console.log(poster)
    return (
        <div className={css.movieItem}>
            <NavLink to={`movie/${id}`} state={poster}>
                <img title={title} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
            </NavLink>

        </div>
    );
};

export {TopMovie};