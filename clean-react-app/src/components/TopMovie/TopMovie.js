import React from 'react';
import css from './topMovie.module.css'
const TopMovie = ({movie:{poster_path,title}}) => {
    return (
        <div className={css.movieItem}>
            <img title={title} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>

        </div>
    );
};

export {TopMovie};