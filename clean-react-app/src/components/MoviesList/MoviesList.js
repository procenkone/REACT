import React from 'react';
import css from './movieList.module.css'
import {NavLink} from "react-router-dom";

const MoviesList = ({
                        movie: {
                            id,
                            title,
                            backdrop_path,
                            genre_ids,
                            original_title,
                            first_air_date,
                            overview,
                            popularity,
                            poster_path,
                            release_date,
                            name
                        }
                    }) => {

    const year = release_date ? release_date.toString().slice(0, 4) : first_air_date.toString().slice(0, 4)

    function truncate(str, maxlength) {
        return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    }

    return (
        <div className={css.movieItem}>
            <NavLink to={`/movie/${id}`} state={backdrop_path}>
                <div>
                    <div className={css.titleBlock}>
                        <h3>{title?title:name} ({year})</h3>
                    </div>
                    <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
                </div>
            </NavLink>

            <div className={css.overview}>
                {truncate(overview, 550)}
                <br/>
                <br/>
                <div className={css.dateReleas}>
                    <p>Дата релиза: {release_date?release_date:first_air_date} </p>
                </div>
            </div>
        </div>
    );
};

export {MoviesList};