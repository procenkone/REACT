import React, {useEffect} from 'react';
import {MoviesList, TopMovie} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie, getPopular, getPopularity, pagination} from "../store";
import css from './moviePage.module.css'
import {isDisabled} from "@testing-library/user-event/dist/utils";

const MoviesPage = () => {
    const dispatch = useDispatch();

    const {movies: {results, page, total_pages}, popular, error, status} = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getAllMovie())
    }, [])

    useEffect(() => {
        dispatch(getPopular())
    }, [])

    console.log(results)


    return (
        <div>

            <div className={css.carouselWrap}>
                <div className={css.horizontal}>

                    {popular.results && popular.results.map(movieTop => <TopMovie key={movieTop.id} movie={movieTop}/>)}
                </div>
            </div>

            <div className={css.moviePageWrap}>
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {results && results.map(movie => <MoviesList key={movie.id} movie={movie}/>)}
                <div style={{color: 'white'}}>
                    <button  onClick={() => page > 1 && dispatch(pagination(page - 1))}>previous</button>
                    {page}
                    <button onClick={() => page < total_pages && dispatch(pagination(page + 1))}>next</button>
                </div>
            </div>

        </div>
    );
};

export {MoviesPage};