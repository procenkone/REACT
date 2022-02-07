import React from 'react';
import css from './movieList.module.css'

const MoviesList = ({
                        movie: {
                            id,
                            title,
                            backdrop_path,
                            genre_ids,
                            original_title,
                            overview,
                            popularity,
                            poster_path,
                            release_date,
                        }
                    }) => {
    // adult: false
    // backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
    // genre_ids: (3) [28, 12, 878]
    // id: 634649
    // original_language: "en"
    // original_title: "Spider-Man: No Way Home"
    // overview: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    // popularity: 15932.56
    // poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    // release_date: "2021-12-15"
    // title: "Spider-Man: No Way Home"
    // video: false
    // vote_average: 8.4
    // vote_count: 7103
    return (
        <div className={css.movieItem}>
            <div className={css.titleBlock}>
                <h3>{title}</h3>
            </div>
            <img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={title}/>
            <div>{release_date}</div>
        </div>
    );
};

export {MoviesList};