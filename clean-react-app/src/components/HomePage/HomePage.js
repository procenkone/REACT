import React from 'react';
import css from "../../Containers/moviePage.module.css";
import {MoviesList} from "../MoviesList/MoviesList";
import {useSelector} from "react-redux";

const HomePage = () => {
    const {movies: {results, page, total_pages},searchResults,statusSearchResults, popular, error, status} = useSelector(state => state['movieReducer']);


    return (
        <div>
            <div className={css.moviePageWrap}>
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>
        </div>
    );
};

export default HomePage;