import React, {useEffect} from 'react';
import {MoviesList} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie, getPopular, pagination} from "../store";
import css from './moviePage.module.css'

const MoviesPage = () => {
    const dispatch = useDispatch();

    const {movies: {results, page, total_pages}, popular, error, status} = useSelector(state => state['movieReducer']);


    useEffect(() => {
        dispatch(getAllMovie())
    }, [])





    return (
        <div>
            <div className={css.moviePageWrap}>
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button onClick={() => page > 1 && dispatch(pagination(page - 1))}>previous
                </button>
                {page}
                <button onClick={() => page < total_pages && dispatch(pagination(page + 1))}>next</button>
            </div>
        </div>
    );
};

export {MoviesPage};