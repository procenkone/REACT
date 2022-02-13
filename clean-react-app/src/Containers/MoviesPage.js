import React, {useEffect} from 'react';
import {GenreNav, MoviesList} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {getAllMovie, getGenreList, getPopular, pagination} from "../store";
import css from './moviePage.module.css'
import Upcoming from "../components/Upcoming/Upcoming";
import HomePage from "../components/HomePage/HomePage";

const MoviesPage = () => {
    const dispatch = useDispatch();

    const {movies: {results, page, total_pages}, searchResults} = useSelector(state => state['movieReducer']);

    useEffect(() => {
        dispatch(getAllMovie())
    }, [])

    console.log(searchResults)


    return (
        <div>
            <div className={css.navigate}><span>Навигация</span></div>
            <GenreNav/>
            <Upcoming/>

            {  results && <HomePage/>  }


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