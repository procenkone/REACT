import React, {useEffect, useState} from 'react';
import {MoviesList} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie, getPopular, paginate, pagination} from "../store";
import css from './moviePage.module.css'
import Pagination from "../components/Pagination/Pagination";

const MoviesPage = () => {
    const dispatch = useDispatch();

    const {currentPost, movies, popular, error, status} = useSelector(state => state['movieReducer']);




    useEffect(() => {
        (async () => {
            await dispatch(getAllMovie())

            await dispatch(paginate(1))
        })();
    }, [])


    const prev = () => {
        if (movies.page > 1) {
            dispatch(pagination(movies.page - 1))
            // dispatch(paginate(1));
        }
    }
    const next = () => {
        if (movies.page < movies.total_pages) {
            dispatch(pagination(movies.page + 1));
            // dispatch(paginate(1));
        }
    }


    return (
        <div>
            <div className={css.moviePageWrap}>
                {status === 'pending' && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {currentPost && currentPost.map(m => <MoviesList key={m.id} m={m}/>)}
            </div>

            <div className={css.buttonBlock}>
                <button onClick={() => prev()}>previous
                </button>
                {movies.page}
                <button onClick={() => next()}>next</button>
            </div>
            <Pagination/>
        </div>
    );
};

export {MoviesPage};